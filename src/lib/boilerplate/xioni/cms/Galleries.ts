import { ApiPaths } from '../api/api.d'
import { fetchWithErrorHandling } from '../utils/fetchWithErrorResponse'
import { mapDtoImage } from '../mapper/dtoImageMapper'
import createClient from '../api/client'
import type { ClientOptions } from 'openapi-fetch'
import type { XioniCMS } from '../types'

// --- Factory -------------------------------------------------------------------------------------

export default function useGallery(clientOptions?: ClientOptions) {
	const client = createClient(clientOptions)

	/**
	 * Get Albums grouped as a Gallery
	 *
	 * @param module Module id
	 * @returns Gallery
	 */

	async function getGallery(moduleId: number): Promise<{
		albums: XioniCMS.Gallery
		meta: {
			totalCount: number
		}
	}> {
		const data = await fetchWithErrorHandling(() =>
			client.GET(ApiPaths.getAlbums, {
				params: {
					path: { moduleId }
				}
			})
		)

		return {
			albums: data.albums.map(album => {
				return {
					...album,
					images: album.images?.map(mapDtoImage) || []
				}
			}),
			meta: {
				totalCount: data.meta.totalCount || data.albums.length || 0
			}
		}
	}

	/**
	 * Get a single Album
	 *
	 * @param id Album id
	 * @returns Album
	 */

	async function getAlbum(
		moduleId: number,
		albumId: number
	): Promise<{
		album: XioniCMS.Album
	}> {
		const data = await fetchWithErrorHandling(() =>
			client.GET(ApiPaths.getAlbum, {
				params: {
					path: {
						moduleId,
						albumId
					}
				}
			})
		)

		return {
			album: {
				...data.album,
				images: data.album.images?.map(mapDtoImage) || []
			}
		}
	}

	return {
		getGallery,
		getAlbum
	}
}

export const getGallery = useGallery().getGallery
export const getAlbum = useGallery().getAlbum
