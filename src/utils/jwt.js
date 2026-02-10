/**
 * @deprecated Use src/config/jwt.js instead
 * All new code should import from src/config/jwt.js
 */

import { jwt } from '../config/jwt.js';

export const generateTokens = (userId, activeRole) => {
  return jwt.create({ userId, activeRole });
};

export { jwt };
