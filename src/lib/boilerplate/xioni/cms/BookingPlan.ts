import { ApiPaths } from '../api/api.d'
import { fetchWithErrorHandling } from '../utils/fetchWithErrorResponse'
import createClient from '../api/client'
import type { ClientOptions } from 'openapi-fetch'
import type { XioniCMS } from '../types'

// --- Factory -------------------------------------------------------------------------------------

export default function useBookingPlan(clientOptions?: ClientOptions) {
	const client = createClient(clientOptions)

	/**
	 * Get blocked days of a booking plan
	 *
	 * @param module Module id
	 * @returns Booking plan
	 */

	async function getBookedDays(moduleId: number): Promise<XioniCMS.BookingPlan> {
		const data = await fetchWithErrorHandling(() =>
			client.GET(ApiPaths.getBookingPlan, {
				params: {
					path: { moduleId }
				}
			})
		)

		return {
			bookedDays: data.blockedDays,
			meta: {
				updatedAt: data.lastChange || null,
				totalCount: data.blockedDays?.length || 0
			}
		}
	}
	return {
		getBookedDays
	}
}

export const getBookedDays = useBookingPlan().getBookedDays
