<script lang="ts">
	import './Message.scss'
	import type { MessageProps } from './Message.d'
	import Fontello from '../Fontello/Fontello.svelte'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		type = undefined,
		title = undefined,
		inline = false,
		tag = 'div',
		closable = false,
		onclose,
		class: className,
		children,
		code,
		...restProps
	}: MessageProps = $props()

	// -----------------------------------------------------------------------------------------------

	const baseName = restProps['ex-class'] || 'Message'

	let computedClassName = $derived([
		baseName,
		className,
		!type || baseName + '--' + type,
		!inline || baseName + '--inline',
		!closable || baseName + '--closable'
	])
</script>

<svelte:element this={tag} class={computedClassName} {...restProps}>
	{#if closable}
		<Fontello name="cancel" class="{baseName}__close-button" onclick={onclose} />
	{/if}
	{#if title}
		<h4 class={baseName + '__title'}>
			{title}
		</h4>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	{#if code}
		<pre>{@render code()}</pre>
	{/if}
</svelte:element>
