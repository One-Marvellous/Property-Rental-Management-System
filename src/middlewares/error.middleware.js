import ApiError from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';

export const globalErrorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res
      .status(err.statusCode || 500)
      .json(new ApiResponse(false, err.message || 'Error', {
        code: err.code || 'ERROR',
        errors: err.errors || [],
      }));
  }

  console.error('Unhandled error:', err);
  return res
    .status(500)
    .json(
      new ApiResponse(false, 'Internal Server Error', {
        message: err?.message || 'An unexpected error occurred',
      })
    );
};

export default globalErrorHandler;
