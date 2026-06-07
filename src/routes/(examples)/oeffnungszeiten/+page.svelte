<script>
	import { format } from '$lib/boilerplate/utils/formatDate'
	import { isWithinInterval } from 'date-fns'

	const now = new Date()
	const periodStartDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)
	const periodEndDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14, 23, 59)
	const isWithinPeriod = isWithinInterval(now, {
		start: periodStartDate,
		end: periodEndDate
	})
</script>

<h1>Öffnungszeiten</h1>

<Client browser>
	{#if isWithinPeriod}
		<h3>⛱️ Wir sind im Urlaub 🏄🏻‍♀️</h3>
		<p>
			aus diesem Grund haben wir von <strong>{format(periodStartDate, 'PPPP')}</strong> bis
			einschließlich <strong>{format(periodEndDate, 'PPPP')}</strong> geschlossen.
		</p>
	{:else}
		<OpeningHours hours="Mo-Sa 09:00-12:00; We 15:00-18:00" interactive />
	{/if}
</Client>
