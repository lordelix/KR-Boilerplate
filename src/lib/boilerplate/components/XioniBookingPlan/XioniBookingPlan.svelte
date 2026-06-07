<script lang="ts">
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import { Calendar, Grid } from '..'
	import type { XioniBookingPlanProps } from './XioniBookingPlan.d'

	let {
		class: classProp,
		baseName = 'XioniBookingPlan',

		bookedDays = [],
		bookedDaysLastUpdate,
		...restProps
	}: BookingPlanProps = $props()

	// svelte-ignore state_referenced_locally
	const { block, element } = makeBEM(baseName)

	const now = new Date()
	const upcomingMonths = Array.from({ length: 18 }, (_, index) => {
		const date = new Date(now.getFullYear(), now.getMonth() + index, 1)

		return {
			month: date.getMonth() + 1,
			year: date.getFullYear()
		}
	})
</script>

<div class={[block, classProp]} {...restProps}>
	<Grid gap>
		{#each upcomingMonths as { month, year }, i (i)}
			<Grid size="tablet-1-2">
				<Calendar {month} {year} markedDays={bookedDays} class={element('month')} />
			</Grid>
		{/each}
	</Grid>
	{#if bookedDaysLastUpdate}
		<p><small>Letzte Aktualisierung am {bookedDaysLastUpdate}</small></p>
	{/if}
</div>
