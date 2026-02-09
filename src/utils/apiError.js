/**
 * Custom API Error class for standardized error handling
 * Extends the native Error class to include HTTP status codes and error codes
 */
class ApiError extends Error {
  /**
   * Creates an instance of ApiError
   * @param {number} statusCode - HTTP status code (e.g., 400, 401, 500)
   * @param {string} message - Human-readable error message
   * @param {string} code - Custom error code for categorization
   * @param {Array} [errors=[]] - Array of detailed error objects or messages
   */
  constructor(statusCode, message, code, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.errors = errors;
  }
}

export default ApiError;
