export type PaginationProps = ComponentBaseProps & {
	pagesCount: number
	currentPage: number
	onPageClick: (page: number) => void
}
