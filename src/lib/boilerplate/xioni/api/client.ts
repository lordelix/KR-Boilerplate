import createOpenApiClient, { type ClientOptions } from 'openapi-fetch'
import { KR_API_KEY } from '$app/env/public'
import type { paths } from './api'

export default function createClient(clientOptions?: ClientOptions) {
	return createOpenApiClient<paths>({
		baseUrl: 'https://api.klickrhein.de/v6',
		...clientOptions,
		headers: {
			accept: 'application/json',
			'api-key': KR_API_KEY,
			...clientOptions?.headers
		}
	})
}
