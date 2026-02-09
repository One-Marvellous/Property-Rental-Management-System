/**
 * Standardized API Response class for consistent API responses
 * Used to wrap all API responses with a consistent structure
 */
export class ApiResponse {
  /**
   * Creates an instance of ApiResponse
   * @param {boolean} success - Indicates whether the request was successful
   * @param {string} message - Response message for the client
   * @param {*} [data=null] - Response data payload (can be any type)
   */
  constructor(success, message, data = null) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
