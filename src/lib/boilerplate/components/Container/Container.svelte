<script lang="ts">
	import type { ContainerProps } from './Container'
	import './Container.scss'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id,
		class: classProp,
		baseName = 'Checkbox',

		tag = 'div',

		children,
		...restProps
	}: ContainerProps = $props()
</script>

<svelte:element this={tag} {...restProps} class={[baseName, classProp]}>
	{@render children()}
</svelte:element>
