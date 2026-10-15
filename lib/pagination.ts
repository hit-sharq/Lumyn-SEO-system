export const ITEMS_PER_PAGE = 6

export function paginate<T>(items: T[], page: number, perPage = ITEMS_PER_PAGE): T[] {
  const start = (page - 1) * perPage
  return items.slice(start, start + perPage)
}

export function getTotalPages(totalItems: number, perPage = ITEMS_PER_PAGE): number {
  return Math.ceil(totalItems / perPage)
}

export function getPaginationData(currentPage: number, totalPages: number) {
  const pages: (number | 'ellipsis')[] = []
  
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (currentPage > 3) pages.push('ellipsis')
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }
    if (currentPage < totalPages - 2) pages.push('ellipsis')
    pages.push(totalPages)
  }
  
  return {
    pages,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
    prevPage: currentPage - 1,
    nextPage: currentPage + 1,
  }
}