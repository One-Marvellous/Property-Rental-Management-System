import { UserRole } from '../models/roles.js';

export const resolveUserRole = (roles) => {
  if (roles.includes(UserRole.ADMIN)) return UserRole.ADMIN;
  if (roles.includes(UserRole.MANAGER)) return UserRole.MANAGER;
  return UserRole.USER;
};
