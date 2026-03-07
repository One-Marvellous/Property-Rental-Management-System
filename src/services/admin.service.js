import adminUsersService from './admin/users.service.js';
import adminApplicationsService from './admin/applications.service.js';
import adminPropertiesService from './admin/properties.service.js';
import adminIncomeService from './admin/income.service.js';

class AdminService {
  getAllUsers(filters) {
    return adminUsersService.getAllUsers(filters);
  }
  suspendUser(data) {
    return adminUsersService.suspendUser(data);
  }
  getManagerApplications(filters) {
    return adminApplicationsService.getManagerApplications(filters);
  }
  getManagerApplicationById(id) {
    return adminApplicationsService.getManagerApplicationById(id);
  }
  approveManagerApplication(data) {
    return adminApplicationsService.approveManagerApplication(data);
  }
  rejectManagerApplication(data) {
    return adminApplicationsService.rejectManagerApplication(data);
  }
  getPropertySubmissions(filters) {
    return adminPropertiesService.getPropertySubmissions(filters);
  }
  approvePropertySubmission(propertyId, reviewerId) {
    return adminPropertiesService.approvePropertySubmission(
      propertyId,
      reviewerId
    );
  }
  rejectPropertySubmission(data) {
    return adminPropertiesService.rejectPropertySubmission(data);
  }
  suspendProperty(data) {
    return adminPropertiesService.suspendProperty(data);
  }
  getIncomePerProperty() {
    return adminIncomeService.getIncomePerProperty();
  }
}

export default new AdminService();
