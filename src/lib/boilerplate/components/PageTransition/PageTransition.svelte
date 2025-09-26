<script lang="ts">
	import { blur } from 'svelte/transition'
	import { page } from '$app/stores'

	// --- [ Props ] ---------------------------------------------------------------------------------

	export let tag = 'div'
	export let baseName = 'PageTransition'
</script>

{#key $page.url.pathname}
	<svelte:element
		this={tag}
		{...$$restProps}
		class={[baseName, $$props.class]}
		in:blur={{ duration: 250 }}>
		<slot />
	</svelte:element>
{/key}
