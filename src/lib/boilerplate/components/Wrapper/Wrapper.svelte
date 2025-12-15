<script lang="ts">
	import './Wrapper.scss'
	import type { WrapperProps } from './Wrapper.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		tag = 'div',
		responsive = false,
		size,
		baseName = 'Wrapper',
		children,
		class: className,
		...restProps
	}: WrapperProps = $props()

	// -----------------------------------------------------------------------------------------------

	const computedClassName = $derived([
		baseName,
		size ? `${baseName}--${size}` : undefined,
		responsive ? `${baseName}--responsive` : undefined,
		className
	])
</script>

<svelte:element this={tag} {...restProps} class={computedClassName}>
	{#if children}
		{@render children()}
	{/if}
</svelte:element>
