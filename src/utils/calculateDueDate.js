import { addDays, addMonths } from 'date-fns';

// Helper function to add duration based on pricing_unit
export const calculateDueDate = (startDate, increment, unit) => {
  switch (unit) {
    case 'month':
      return addMonths(startDate, increment);
    case 'day':
      return addDays(startDate, increment);
    case 'night':
      return addDays(startDate, increment);
    case 'event':
      // Assume 'event' is same-day or treat as 1 day unit
      return addDays(startDate, increment);
    default:
      return addMonths(startDate, increment);
  }
};
