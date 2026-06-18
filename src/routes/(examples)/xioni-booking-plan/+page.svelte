<script lang="ts">
	import { Wrapper, XioniBookingPlan } from '$lib/boilerplate/components'

	const today = Date.now()

	function addDays(timestamp: number, daysToAdd: number): string {
		return new Date(timestamp + daysToAdd * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
	}

	const bookedDays: string[] = [7, 9, 15, 22, 34, 41, 58, 73, 96].map(offset =>
		addDays(today, offset)
	)

	const bookedDaysLastUpdate = new Intl.DateTimeFormat('de-DE', {
		dateStyle: 'full',
		timeStyle: 'short'
	}).format(today)
</script>

<Wrapper size="large">
	<h1>XioniBookingPlan</h1>
	<p>
		Dieses Demo zeigt den Belegungsplan mit Beispieldaten aus den kommenden Monaten. Die markierten
		Tage werden ueber die Property <code>bookedDays</code> uebergeben.
	</p>

	<XioniBookingPlan {bookedDays} {bookedDaysLastUpdate} />
</Wrapper>
