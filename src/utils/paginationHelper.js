// src/utils/paginationHelper.js
export const paginate = (items, currentPage, itemsPerPage) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  console.log(`Total Pages: ${totalPages}`);
  console.log(`Current Page: ${currentPage}`);
  console.log(`Paginated Items:`, paginatedItems);

  return { paginatedItems, totalPages };
};
