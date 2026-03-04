/**
 * Centralized success responses — single source of truth for all API success
 * messages and their HTTP status codes.
 *
 * Used in the controllers:
 *   const { statusCode, message } = SuccessMessages.AUTH.REGISTER;
 *   res.status(statusCode).json(new ApiResponse(true, message, data));
 */
export class SuccessMessages {
  static AUTH = {
    REGISTER: { statusCode: 201, message: 'User registered successfully' },
    LOGIN: { statusCode: 200, message: 'Login successful' },
    REFRESH_TOKEN: { statusCode: 200, message: 'Token refreshed successfully' },
  };

  static USER = {
    ROLE_SWITCHED: { statusCode: 200, message: 'Role switched successfully' },
    BOOKING_CREATED: {
      statusCode: 201,
      message: 'Booking created successfully',
    },
    BOOKINGS_FETCHED: {
      statusCode: 200,
      message: 'Bookings fetched successfully',
    },
    BOOKING_FETCHED: {
      statusCode: 200,
      message: 'Booking fetched successfully',
    },
    BOOKING_CANCELLED: {
      statusCode: 200,
      message: 'Booking cancelled successfully',
    },
    MANAGER_APPLICATION_SUBMITTED: {
      statusCode: 200,
      message: 'Manager application submitted successfully',
    },
    MANAGER_APPLICATION_CANCELLED: {
      statusCode: 200,
      message: 'Manager application cancelled successfully',
    },
    MANAGER_APPLICATION_FETCHED: {
      statusCode: 200,
      message: 'Manager application fetched successfully',
    },
    MANAGER_APPLICATION_STATUS: {
      statusCode: 200,
      message: 'Manager application status fetched successfully',
    },
    RENTAL_FETCHED: { statusCode: 200, message: 'Rental fetched successfully' },
    INVOICE_CREATED: {
      statusCode: 201,
      message: 'Invoice created successfully',
    },
    CHECKOUT_CREATED: {
      statusCode: 200,
      message: 'Checkout session created successfully',
    },
    PAYMENT_SUCCESS: { statusCode: 200, message: 'Payment successful' },
    PAYMENT_HISTORY_FETCHED: {
      statusCode: 200,
      message: 'Payment history fetched successfully',
    },
  };

  static MANAGER = {
    PROPERTY_CREATED: {
      statusCode: 201,
      message: 'Property draft created successfully',
    },
    PROPERTY_PUBLISHED: {
      statusCode: 200,
      message: 'Property submitted for admin approval',
    },
    PROPERTY_UPDATED: {
      statusCode: 200,
      message: 'Property updated successfully',
    },
    IMAGES_UPLOADED: {
      statusCode: 201,
      message: 'Images uploaded successfully',
    },
    PROPERTY_REMOVED: {
      statusCode: 200,
      message: 'Property removed successfully',
    },
    PROPERTIES_FETCHED: {
      statusCode: 200,
      message: 'Properties fetched successfully',
    },
    BOOKINGS_FETCHED: {
      statusCode: 200,
      message: 'Bookings fetched successfully',
    },
    BOOKING_FETCHED: {
      statusCode: 200,
      message: 'Booking details fetched successfully',
    },
    BOOKING_APPROVED: {
      statusCode: 200,
      message: 'Booking approved successfully',
    },
    BOOKING_REJECTED: {
      statusCode: 200,
      message: 'Booking rejected successfully',
    },
    IMAGE_REMOVED: { statusCode: 200, message: 'Image removed successfully' },
    INCOME_FETCHED: {
      statusCode: 200,
      message: 'Earnings retrieved successfully',
    },
  };

  static ADMIN = {
    USERS_FETCHED: { statusCode: 200, message: 'Users fetched successfully' },
    USER_SUSPENDED: { statusCode: 200, message: 'User suspended successfully' },
    APPLICATIONS_FETCHED: {
      statusCode: 200,
      message: 'Manager applications fetched successfully',
    },
    APPLICATION_FETCHED: {
      statusCode: 200,
      message: 'Manager application fetched successfully',
    },
    APPLICATION_APPROVED: {
      statusCode: 200,
      message: 'Manager application approved successfully',
    },
    APPLICATION_REJECTED: {
      statusCode: 200,
      message: 'Manager application rejected successfully',
    },
    PROPERTY_SUBMISSIONS_FETCHED: {
      statusCode: 200,
      message: 'Property submissions fetched successfully',
    },
    PROPERTY_APPROVED: {
      statusCode: 200,
      message: 'Property approved successfully',
    },
    PROPERTY_REJECTED: {
      statusCode: 200,
      message: 'Property rejected successfully',
    },
    PROPERTY_SUSPENDED: {
      statusCode: 200,
      message: 'Property suspended successfully',
    },
    INCOME_FETCHED: {
      statusCode: 200,
      message: 'Income per property retrieved successfully',
    },
  };

  static CATEGORY = {
    FETCHED: { statusCode: 200, message: 'Categories fetched successfully' },
    CREATED: { statusCode: 201, message: 'Category created successfully' },
    UPDATED: { statusCode: 200, message: 'Category updated successfully' },
    DELETED: { statusCode: 200, message: 'Category deleted successfully' },
  };

  static PROPERTY = {
    LIST_FETCHED: {
      statusCode: 200,
      message: 'Properties fetched successfully',
    },
    FETCHED: { statusCode: 200, message: 'Property fetched successfully' },
  };
}
