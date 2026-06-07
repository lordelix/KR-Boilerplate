<script lang="ts">
	import {
		eachDayOfInterval,
		startOfMonth,
		endOfMonth,
		startOfWeek,
		endOfWeek,
		isSameMonth,
		isToday,
		format
	} from 'date-fns'
	import { de } from 'date-fns/locale'
	import './Calendar.scss'
	import type { CalendarProps } from './Calendar.d'

	let {
		month = new Date().getMonth() + 1,
		year = new Date().getFullYear(),
		baseName = 'Calendar',
		class: classProp,
		markedDays = [],
		...restProps
	}: CalendarProps = $props()

	const parseMarkedDay = (markedDay: Date | string) => {
		if (markedDay instanceof Date) return markedDay
		// `YYYY-MM-DD` is parsed as UTC by `new Date()`, so normalise date-only strings to local midnight.
		return new Date(markedDay.includes('T') ? markedDay : `${markedDay}T00:00:00`)
	}

	const markedDayKeys = $derived(
		new Set(markedDays.map(day => format(parseMarkedDay(day), 'yyyy-MM-dd')))
	)

	const isMarkedDay = (date: Date) => {
		return markedDayKeys.has(format(date, 'yyyy-MM-dd'))
	}

	const currentMonth = $derived(new Date(year, month - 1, 1))
	const monthStart = $derived(startOfMonth(currentMonth))
	const monthEnd = $derived(endOfMonth(currentMonth))
	const calendarStart = $derived(startOfWeek(monthStart, { weekStartsOn: 1 }))
	const calendarEnd = $derived(endOfWeek(monthEnd, { weekStartsOn: 1 }))

	const days = $derived(eachDayOfInterval({ start: calendarStart, end: calendarEnd }))
	const monthName = $derived(format(currentMonth, 'MMMM', { locale: de }))
	const ariaLabel = $derived(`${monthName} ${year} Kalender`)

	const getDayClasses = (isCurrentMonth: boolean, day: Date) => {
		const classes = [baseName + '__day']

		if (isToday(day)) {
			classes.push(baseName + '__day--today')
		}

		if (isMarkedDay(day)) {
			classes.push(baseName + '__day--marked')
		}

		if (!isCurrentMonth && day < monthStart) {
			classes.push(baseName + '__day--month-prev')
		}

		if (!isCurrentMonth && day > monthEnd) {
			classes.push(baseName + '__day--month-next')
		}

		return classes.join(' ')
	}
</script>

<div class={[baseName, classProp]} role="region" aria-label={ariaLabel} {...restProps}>
	<span class="{baseName}__title">{monthName} {year}</span>

	<div class="{baseName}__weekdays" role="presentation">
		<abbr title="Montag">Mo</abbr>
		<abbr title="Dienstag">Di</abbr>
		<abbr title="Mittwoch">Mi</abbr>
		<abbr title="Donnerstag">Do</abbr>
		<abbr title="Freitag">Fr</abbr>
		<abbr title="Samstag">Sa</abbr>
		<abbr title="Sonntag">So</abbr>
	</div>
	<ol class="{baseName}__day-grid" aria-label="Tage des Monats">
		{#each days as day (day.toISOString())}
			{@const isCurrentMonth = isSameMonth(day, currentMonth)}
			{@const dayNum = day.getDate()}

			<li class={getDayClasses(isCurrentMonth, day)} title={format(day, 'PP', { locale: de })}>
				{dayNum}
			</li>
		{/each}
	</ol>
</div>
