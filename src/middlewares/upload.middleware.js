import imageUploader from '../utils/imageUploader.js';

const multerInstance = imageUploader.initMulter();

// multiple files middleware expecting field name 'images' (max 5 files)
export const uploadMultipleImages = multerInstance.array('images', 5);
