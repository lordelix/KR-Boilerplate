<script lang="ts">
	import './Pagination.scss'

	import { range } from 'lodash-es'
	import type { PaginationProps } from './Pagination.d'

	let {
		baseName = 'Pagination',
		class: className,
		currentPage,
		pagesCount,
		onPageClick,
		...restProps
	}: PaginationProps = $props()
</script>

<div class={[baseName, className]} {...restProps}>
	{#each range(1, pagesCount) as page}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span
			aria-label="Zu Seite {page}"
			class={`Pagination__item ${page === currentPage ? 'Pagination__item--current' : ''}`}
			onclick={() => {
				if (page === currentPage && typeof onPageClick === 'function') return

				onPageClick(page)
			}}>
			{page}
		</span>
	{/each}
</div>
