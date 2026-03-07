import { UserRole } from '../models/roles.js';

export const resolveUserRole = (roles) => {
  if (roles.includes(UserRole.ADMIN)) return UserRole.ADMIN;
  return UserRole.USER;
};
