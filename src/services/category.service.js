import { prisma } from '../config/db.js';
import ApiError from '../utils/apiError.js';

/**
 * CategoryService handles operations related to property categories,
 * including retrieval, creation, updating, and deletion of categories.
 * It ensures category name uniqueness and prevents deletion of categories
 * that have properties attached.
 */
class CategoryService {
  async getAllCategory() {
    const categories = await prisma.categories.findMany({
      orderBy: {
        displayOrder: 'asc',
      },
    });

    return { categories };
  }
  /**
   * Creates a new property category
   * @param {object} categoryData - Category information
   * @param {string} categoryData.name - Category name (must be unique)
   * @param {string} categoryData.description - Category description
   * @param {string} categoryData.displayOrder - Order of importance
   * @returns {Promise<object>} The created category object
   * @throws {ApiError} If category name already exists (409)
   */
  async createCategory(categoryData) {
    const { name, description, displayOrder } = categoryData;

    // Verify category name uniqueness
    const existingCategory = await prisma.categories.findUnique({
      where: { name: name.toLowerCase() },
    });
    if (existingCategory) {
      throw new ApiError(409, 'Category with this name already exists');
    }

    const toCreate = {
      name: name.toLocaleLowerCase(),
      description,
    };

    if (displayOrder != null) toCreate.display_order = displayOrder;
    // Insert new category into database
    const newCategory = await prisma.categories.create({
      data: toCreate,
    });

    return newCategory;
  }

  /**
   * Updates an existing category description
   * @param {object} categoryData - Category information
   * @param {string} categoryData.categoryId - The ID of the category to update
   * @param {string} categoryData.description - New description for the category
   * @param {string} categoryData.displayOrder - Order of importance
   * @returns {Promise<object>} The updated category object
   * @throws {ApiError} If category not found (404)
   */
  async editCategory(categoryData) {
    const { categoryId, description, displayOrder } = categoryData;

    const toUpdate = {
      description,
    };
    if (displayOrder != null) toUpdate.display_order = displayOrder;
    // Update category description in database
    const updatedCategory = await prisma.categories.update({
      where: { id: categoryId },
      data: toUpdate,
    });

    if (!updatedCategory) {
      throw new ApiError(404, 'Category not found');
    }

    return updatedCategory;
  }

  /**
   * Deletes a property category
   * @param {string} categoryId - The ID of the category to delete
   * @throws {ApiError} If category not found (404)
   */
  async deleteCategory(categoryId) {
    // Verify category exists before deletion
    const category = await prisma.categories.findUnique({
      where: { id: categoryId },
      include: {
        properties: {
          select: { id: true },
          take: 1,
        },
      },
    });

    if (!category) {
      throw new ApiError(404, 'Category not found');
    }

    // Prevent deletion if a property is attached to the id
    if (category.properties.length > 0) {
      throw new ApiError(
        400,
        'Cannot delete category with attached properties'
      );
    }

    // Remove category from database
    await prisma.categories.delete({
      where: { id: categoryId },
    });
  }
}

export default new CategoryService();
