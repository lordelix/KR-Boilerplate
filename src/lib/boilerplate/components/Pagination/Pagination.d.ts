export type PaginationProps = {
	pagesCount: number
	currentPage: number
	onPageClick: (page: number) => void
} & ComponentBaseProps
