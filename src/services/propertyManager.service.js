import managerPropertyService from './manager/property.service.js';
import managerBookingService from './manager/booking.service.js';
import managerIncomeService from './manager/income.service.js';
import managerRentalService from './manager/rental.service.js';

class PropertyManagerService {
  addProperty(data) {
    return managerPropertyService.addProperty(data);
  }
  publishProperty(data) {
    return managerPropertyService.publishProperty(data);
  }
  editProperty(data) {
    return managerPropertyService.editProperty(data);
  }
  removeProperty(data) {
    return managerPropertyService.removeProperty(data);
  }
  getUserProperty(data) {
    return managerPropertyService.getUserProperty(data);
  }
  addPropertyImages(data) {
    return managerPropertyService.addPropertyImages(data);
  }
  removePropertyImage(data) {
    return managerPropertyService.removePropertyImage(data);
  }
  getAllBookings(data) {
    return managerBookingService.getAllBookings(data);
  }
  viewBookingDetails(data) {
    return managerBookingService.viewBookingDetails(data);
  }

  getRental(data) {
    return managerRentalService.getRental(data);
  }

  approveBooking(data) {
    return managerBookingService.approveBooking(data);
  }
  rejectBooking(data) {
    return managerBookingService.rejectBooking(data);
  }
  getIncome(managerId) {
    return managerIncomeService.getIncome(managerId);
  }
}

export default new PropertyManagerService();
