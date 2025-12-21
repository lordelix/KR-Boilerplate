import { error as svelteError } from '@sveltejs/kit'

export default async function xioniLoader<T>(xioniRequest: Promise<T>) {
	try {
		return await xioniRequest
	} catch (error) {
		const { status, message } = error as { status?: number; message?: string }

		throw svelteError(status || 500, message || 'Ein unbekannter Fehler ist aufgetreten.')
	}
}
