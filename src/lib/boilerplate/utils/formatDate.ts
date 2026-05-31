import { format as formatDate } from 'date-fns'
import { de } from 'date-fns/locale'

interface FormatFromToConfig {
	delimiter?: string
	formats?: {
		long?: string
		medium?: string
		short?: string
		single?: string
	}
}

/**
 * Formats a date range from a start date to an end date into a readable string,
 * choosing different formats based on whether days, months, or years match.
 * If only one date is provided, it formats the start date with the configured single format.
 *
 * @param {Date} from - The start date.
 * @param {Date} to - The end date.
 * @param {Object} [config] - Optional configuration object.
 * @param {string} [config.delimiter='-'] - Delimiter between formatted dates.
 * @param {Object} [config.formats] - Optional format overrides.
 * @param {string} [config.formats.long] - Format used when the dates span different years.
 * @param {string} [config.formats.medium] - Format used when the dates span different months in the same year.
 * @param {string} [config.formats.short] - Format used when the dates share the same month and year.
 * @param {string} [config.formats.single] - Format used when only one date should be shown.
 *
 * @returns {string} The formatted date range.
 *
 * @throws {Error} Throws an error if the 'from' date is missing.
 */

export function formatFromTo(from: Date, to: Date, config: FormatFromToConfig = {}) {
	if (!from) {
		throw new Error('date missing')
	}

	if (!to) {
		return format(from, config.formats?.single || 'EEEE d. LLLL yyyy')
	}

	const delimiter = config.delimiter || '-'

	const longFormat = config.formats?.long || 'EEEE d. LLLL yyyy'
	const mediumFormat = config.formats?.medium || 'EEEE d. LLLL'
	const shortFormat = config.formats?.short || 'EEEE d.'

	const daysMatch = formatDate(from, 'd') === formatDate(to, 'd')
	const yearsMatch = formatDate(from, 'y') === formatDate(to, 'y')
	const monthsMatch = formatDate(from, 'LL') === formatDate(to, 'LL')

	let fromFormat

	if (daysMatch && monthsMatch && yearsMatch) {
		return format(from, config.formats?.single || longFormat)
	}

	if (!yearsMatch) {
		fromFormat = longFormat
	} else if (!monthsMatch) {
		fromFormat = mediumFormat
	} else {
		fromFormat = shortFormat
	}

	return `${format(from, fromFormat)} ${delimiter} ${format(to, longFormat)}`
}

/**
 * Formats a single date according to the given pattern using the German locale.
 *
 * @param {Date} date - The date to format.
 * @param {string} pattern - The formatting pattern.
 *
 * @returns {string} The formatted date string.
 */

export function format(date: Date, pattern: string): string {
	return formatDate(date, pattern, { locale: de })
}
