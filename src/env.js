import { defineEnvVars } from '@sveltejs/kit/env'

export const variables = defineEnvVars({
	PUBLIC_KR_API_KEY: {
		public: true,
		static: true,
		description: 'API-Key für die Klickrhein-API',
		schema: value => value ?? ''
	}
})
