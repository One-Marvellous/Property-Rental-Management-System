import managerPropertyService from './manager/property.service.js';
import managerBookingService from './manager/booking.service.js';
import managerIncomeService from './manager/income.service.js';

class PropertyManagerService {
  addProperty(d) {
    return managerPropertyService.addProperty(d);
  }
  publishProperty(d) {
    return managerPropertyService.publishProperty(d);
  }
  editProperty(d) {
    return managerPropertyService.editProperty(d);
  }
  removeProperty(d) {
    return managerPropertyService.removeProperty(d);
  }
  getUserProperty(d) {
    return managerPropertyService.getUserProperty(d);
  }
  addPropertyImages(d) {
    return managerPropertyService.addPropertyImages(d);
  }
  removePropertyImage(d) {
    return managerPropertyService.removePropertyImage(d);
  }
  getAllBookings(d) {
    return managerBookingService.getAllBookings(d);
  }
  viewBookingDetails(d) {
    return managerBookingService.viewBookingDetails(d);
  }
  approveBooking(d) {
    return managerBookingService.approveBooking(d);
  }
  rejectBooking(d) {
    return managerBookingService.rejectBooking(d);
  }
  getIncome(managerId) {
    return managerIncomeService.getIncome(managerId);
  }
}

export default new PropertyManagerService();
