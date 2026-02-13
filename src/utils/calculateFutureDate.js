import { pricing_unit } from '../generated/prisma/index.js';

export const calculateFutureDate = (unit, multiplier = 1) => {
  const today = new Date();
  let result;

  switch (unit) {
    case pricing_unit.day:
      result = new Date(today);
      result.setDate(today.getDate() + 1 * multiplier);
      break;

    case pricing_unit.event:
      result = new Date(today);
      result.setDate(today.getDate() + 1 * multiplier);
      break;

    case pricing_unit.night:
      result = new Date(today);
      result.setDate(today.getDate() + 1 * multiplier);
      break;

    case pricing_unit.month:
      result = new Date(today);
      result.setMonth(today.getMonth() + 1 * multiplier);
      break;

    default:
      result = new Date(today);
      result.setDate(today.getDate() + 1 * multiplier);
  }

  return result;
};
