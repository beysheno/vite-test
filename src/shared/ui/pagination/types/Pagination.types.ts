export interface PaginationProps {
    totalPages: number
    onPageChange: (page: number) => void
    currentPage: number
    scrollTop?: boolean
}
