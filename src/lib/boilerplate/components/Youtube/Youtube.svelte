<script lang="ts">
	import './YouTube.css'

	import { uniqueId } from 'lodash-es'
	import type { YouTubeProps } from './YouTube'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let {
		id = uniqueId('button-'),
		class: classProp,
		baseName = 'YouTube',

		videoId = false,
		allow = ['encrypted-media'],

		...restProps
	}: YouTubeProps = $props()
</script>

<div class={[baseName, classProp]} {...restProps}>
	<iframe
		class={baseName + '__frame'}
		src={'https://www.youtube-nocookie.com/embed/' + videoId}
		title="Youtube video player"
		frameborder="0"
		allow={allow.join('; ')}
		allowfullscreen></iframe>
</div>
