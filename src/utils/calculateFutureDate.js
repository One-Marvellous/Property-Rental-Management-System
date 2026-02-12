import { PricingUnit } from '../models/pricing.unit';

export const calculateFutureDate = (unit, multiplier = 1) => {
  const today = new Date();
  let result;

  switch (unit) {
    case PricingUnit.DAY:
      result = new Date(today);
      result.setDate(today.getDate() + 1 * multiplier);
      break;

    case PricingUnit.EVENT:
      result = new Date(today);
      result.setDate(today.getDate() + 1 * multiplier);
      break;

    case PricingUnit.NIGHT:
      result = new Date(today);
      result.setDate(today.getDate() + 1 * multiplier);
      break;

    case PricingUnit.MONTH:
      result = new Date(today);
      result.setMonth(today.getMonth() + 1 * multiplier);
      break;

    default:
      result = new Date(today);
      result.setDate(today.getDate() + 1 * multiplier);
  }

  return result;
};
