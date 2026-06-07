export type CalendarProps = ComponentBaseProps & {
	month?: number // 1-12, defaults to current month
	year?: number // defaults to current year
	baseName?: string // CSS block name, defaults to 'Calendar'
	markedDays?: Array<Date | string> // List of dates to mark with --marked modifier
}
