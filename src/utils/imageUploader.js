import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { ENV } from '../config/env.js';

// Configure Cloudinary from environment variables (only used in production)
if (ENV.NODE_ENV === 'production') {
  cloudinary.config({
    cloud_name: ENV.CLOUDINARY_CLOUD_NAME,
    api_key: ENV.CLOUDINARY_API_KEY,
    api_secret: ENV.CLOUDINARY_API_SECRET,
    secure: true,
  });
}

// Ensure upload directory exists for development
function ensureUploadDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Initialize multer storage depending on environment
export function initMulter() {
  if (ENV.NODE_ENV === 'production') {
    return multer({
      storage: multer.memoryStorage(),
      limits: { fileSize: 5 * 1024 * 1024 },
    });
  }

  const uploadDir = path.join(process.cwd(), 'uploads', 'properties');
  ensureUploadDir(uploadDir);

  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
      const safeName = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;
      cb(null, safeName);
    },
  });

  return multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });
}

// Upload a file - accepts a multer `file` object. Returns { url, public_id? }
export async function uploadImage(file, { folder = 'properties' } = {}) {
  if (!file) throw new Error('No file provided');

  if (ENV.NODE_ENV === 'production') {
    // Upload buffer to Cloudinary using upload_stream
    return new Promise((resolve, reject) => {
      const options = { folder };
      const uploadStream = cloudinary.uploader.upload_stream(
        options,
        (err, result) => {
          if (err) return reject(err);
          resolve({ url: result.secure_url, public_id: result.public_id });
        }
      );
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  // Development: file is stored on disk by multer.diskStorage
  const localUrl = `/uploads/properties/${file.filename}`;
  return { url: localUrl };
}

// Derive Cloudinary public id from a Cloudinary URL
function deriveCloudinaryPublicId(url) {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split('/');
    // find index of 'upload' then take remaining parts
    const uploadIndex = parts.findIndex((p) => p === 'upload');
    if (uploadIndex === -1) return null;
    let idParts = parts.slice(uploadIndex + 1);
    // remove version if present (v123456)
    if (idParts[0] && /^v\d+$/.test(idParts[0])) idParts = idParts.slice(1);
    // remove file extension
    const last = idParts[idParts.length - 1];
    idParts[idParts.length - 1] = last.replace(/\.[^.]+$/, '');
    return idParts.join('/');
  } catch (e) {
    console.warn(`Error occurred, Error: ${e}`);
    return null;
  }
}

// Delete image using stored public_id (for Cloudinary) or URL (for local disk)
export async function deleteImageByPublicId(publicId, url) {
  if (!publicId && !url) return;

  if (ENV.NODE_ENV === 'production') {
    // Use stored public_id if available (robust)
    const idToDelete = publicId || deriveCloudinaryPublicId(url);
    if (!idToDelete) return;
    return cloudinary.uploader.destroy(idToDelete);
  }

  // Local file removal
  try {
    // url is expected to be /uploads/properties/filename
    const localPath = path.join(process.cwd(), url.replace(/^\//, ''));
    if (fs.existsSync(localPath)) {
      await fs.promises.unlink(localPath);
    }
  } catch (err) {
    console.warn(`Error occurred, Error: ${err}`);
    // ignore
  }
}

// Deprecated: use deleteImageByPublicId instead
export async function deleteImageByUrl(url) {
  return deleteImageByPublicId(null, url);
}

export default {
  initMulter,
  uploadImage,
  deleteImageByPublicId,
  deleteImageByUrl,
};
