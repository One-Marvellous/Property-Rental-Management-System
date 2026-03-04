import { prisma } from '../../config/db.js';
import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import {
  buildPaginatedResponse,
  getPagination,
} from '../../utils/pagination.js';
import { property_approval_status } from '../../generated/prisma/index.js';
import { OrderStatus } from '../../models/order.js';
import { ENV } from '../../config/env.js';
import imageUploader from '../../utils/imageUploader.js';
import logger from '../../config/logger.js';

class ManagerPropertyService {
  async addProperty(data) {
    const {
      userId,
      title,
      description,
      address,
      city,
      state,
      pricingUnit,
      basePrice,
      categoryId,
    } = data;

    const property = await prisma.properties.create({
      data: {
        address,
        base_price: basePrice,
        city,
        pricing_unit: pricingUnit,
        state,
        title,
        description,
        manager_id: userId,
        category_id: categoryId,
      },
      omit: {
        approved_at: true,
        rejected_at: true,
        suspended_at: true,
        deleted_at: true,
        approved_by: true,
        rejected_by: true,
        suspended_by: true,
        rejection_reason: true,
      },
    });

    return property;
  }

  async publishProperty(data) {
    const { userId, propertyId } = data;

    const property = await prisma.properties.findFirst({
      where: { manager_id: userId, id: propertyId },
    });

    if (!property) throw new NotFoundError('Property');

    if (property.approval_status === property_approval_status.pending) {
      throw new BadRequestError('Property is already pending approval');
    }

    if (property.approval_status === property_approval_status.approved) {
      throw new BadRequestError('Property is already approved');
    }

    const updatedProperty = await prisma.properties.update({
      where: { id: propertyId, manager_id: userId },
      data: {
        approval_status: property_approval_status.pending,
      },
      omit: {
        approval_status: true,
        approved_by: true,
        approved_at: true,
        suspended_by: true,
        suspended_at: true,
        rejected_at: true,
        rejected_by: true,
        deleted_at: true,
        rejection_reason: true,
      },
    });

    return updatedProperty;
  }

  async editProperty(data) {
    const {
      userId,
      propertyId,
      title,
      description,
      address,
      city,
      state,
      pricingUnit,
      basePrice,
      categoryId,
    } = data;

    const property = await prisma.properties.findFirst({
      where: { manager_id: userId, id: propertyId },
    });

    if (!property) throw new NotFoundError('Property');

    if (property.approval_status !== property_approval_status.approved) {
      throw new BadRequestError('Only approved properties can be edited');
    }

    const toUpdate = {};
    if (title != null) toUpdate.title = title;
    if (description != null) toUpdate.description = description;
    if (address != null) toUpdate.address = address;
    if (city != null) toUpdate.city = city;
    if (state != null) toUpdate.state = state;
    if (pricingUnit != null) toUpdate.pricing_unit = pricingUnit;
    if (basePrice != null) toUpdate.base_price = basePrice;
    if (categoryId != null) toUpdate.category_id = categoryId;

    if (Object.keys(toUpdate).length === 0) return property;

    const updatedProperty = await prisma.properties.update({
      where: { id: propertyId, manager_id: userId },
      data: toUpdate,
      omit: {
        approval_status: true,
        approved_by: true,
        approved_at: true,
        suspended_by: true,
        suspended_at: true,
        rejected_at: true,
        rejected_by: true,
        deleted_at: true,
        rejection_reason: true,
      },
    });

    return updatedProperty;
  }

  async removeProperty(data) {
    const { userId, propertyId } = data;

    const property = await prisma.properties.findFirst({
      where: { manager_id: userId, id: propertyId },
    });

    if (!property) throw new NotFoundError('Property');

    const images = await prisma.property_images.findMany({
      where: { property_id: propertyId },
    });

    await prisma.properties.delete({
      where: { id: propertyId, manager_id: userId },
    });

    const cleanupErrors = [];
    await Promise.allSettled(
      images.map(async (image) => {
        try {
          await imageUploader.deleteImageByPublicId(
            image.public_id,
            image.image_url
          );
        } catch (err) {
          cleanupErrors.push({ imageId: image.id, error: err.message });
        }
      })
    );

    if (cleanupErrors.length > 0) {
      logger.warn(
        `Property ${propertyId} deleted but ${cleanupErrors.length} image(s) failed storage cleanup`,
        { cleanupErrors }
      );
    }
  }

  async getUserProperty(data) {
    const {
      userId,
      page = 1,
      limit = ENV.LIMIT || 15,
      from,
      to,
      order = OrderStatus.DESC,
      status,
    } = data;

    const { skip, take } = getPagination({ page, limit });
    const where = { manager_id: userId };

    if (from || to) {
      where.created_at = {};
      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    where.manager_id = userId;

    if (status) where.approval_status = status;

    const properties = await prisma.properties.findMany({
      where,
      skip,
      take,
      orderBy: { created_at: order },
    });

    const total = await prisma.properties.count({ where });

    return buildPaginatedResponse({ data: properties, total, page, limit });
  }

  async addPropertyImages(data) {
    const { userId, propertyId, files } = data;

    const property = await prisma.properties.findFirst({
      where: { id: propertyId, manager_id: userId },
    });

    if (!property) throw new NotFoundError('Property');

    if (!files || files.length === 0)
      throw new BadRequestError('No files provided');

    const existingCount = await prisma.property_images.count({
      where: { property_id: propertyId },
    });
    const MAX = 5;

    if (existingCount >= MAX) {
      throw new BadRequestError(
        `Maximum of ${MAX} images already uploaded for this property`
      );
    }
    if (existingCount + files.length > MAX) {
      throw new BadRequestError(
        `You can upload up to ${MAX - existingCount} more image(s)`
      );
    }

    const uploads = await Promise.all(
      files.map((f) =>
        imageUploader.uploadImage(f, { folder: `properties/${propertyId}` })
      )
    );

    const created = await prisma.$transaction(
      uploads.map((u) =>
        prisma.property_images.create({
          data: {
            property_id: propertyId,
            image_url: u.url,
            public_id: u.public_id || null,
          },
        })
      )
    );

    return created;
  }

  async removePropertyImage(data) {
    const { userId, propertyId, imageId } = data;

    const property = await prisma.properties.findFirst({
      where: { id: propertyId, manager_id: userId },
    });
    if (!property) throw new NotFoundError('Property');

    const image = await prisma.property_images.findFirst({
      where: { id: imageId, property_id: propertyId },
    });
    if (!image) throw new NotFoundError('Image');

    await imageUploader.deleteImageByPublicId(image.public_id, image.image_url);

    await prisma.property_images.delete({ where: { id: imageId } });
  }
}

export default new ManagerPropertyService();
