import adminUsersService from './admin/users.service.js';
import adminApplicationsService from './admin/applications.service.js';
import adminPropertiesService from './admin/properties.service.js';
import adminIncomeService from './admin/income.service.js';

class AdminService {
  getAllUsers(f) {
    return adminUsersService.getAllUsers(f);
  }
  suspendUser(d) {
    return adminUsersService.suspendUser(d);
  }
  getManagerApplications(f) {
    return adminApplicationsService.getManagerApplications(f);
  }
  getManagerApplicationById(id) {
    return adminApplicationsService.getManagerApplicationById(id);
  }
  approveManagerApplication(d) {
    return adminApplicationsService.approveManagerApplication(d);
  }
  rejectManagerApplication(d) {
    return adminApplicationsService.rejectManagerApplication(d);
  }
  getPropertySubmissions(f) {
    return adminPropertiesService.getPropertySubmissions(f);
  }
  approvePropertySubmission(p, r) {
    return adminPropertiesService.approvePropertySubmission(p, r);
  }
  rejectPropertySubmission(d) {
    return adminPropertiesService.rejectPropertySubmission(d);
  }
  suspendProperty(d) {
    return adminPropertiesService.suspendProperty(d);
  }
  getIncomePerProperty() {
    return adminIncomeService.getIncomePerProperty();
  }
}

export default new AdminService();
