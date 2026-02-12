export const getPagination = ({ page, limit }) => {
  const take = Number(limit);
  const skip = (Number(page) - 1) * take;

  return { take, skip };
};

/**
 * Format paginated response
 */
export const buildPaginatedResponse = ({ data, total, page, limit }) => {
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
};
