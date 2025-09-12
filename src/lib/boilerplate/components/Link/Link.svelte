<script lang="ts">
	// import './Link.css'
	import classnames from 'classnames'
	import isExternalURL from '$lib/boilerplate/utils/isExternalURL'
	import Fontello from '../Fontello/Fontello.svelte'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	import type { LinkProps } from './Link.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'Link',
		children,
		class: className,

		to,
		target,
		fontello,
		rel,
		label,

		onClick = () => undefined
	}: LinkProps = $props()

	// -----------------------------------------------------------------------------------------------

	const bem = makeBEM(baseName)

	// -----------------------------------------------------------------------------------------------

	const tag = to ? 'a' : 'span'
	const classNames = classnames(bem.block, className, !fontello || bem.modifier('has-icon'))

	if (to && isExternalURL(to) && !target) {
		rel = 'nofollow noopener'
		target = '_blank'
	}

	function trimScheme(link: typeof to) {
		if (!link) return ''

		if (!isExternalURL(link)) return link

		const { hostname } = new URL(link)
		return hostname
	}
</script>

{#if fontello}
	<span class={classNames}>
		{#if fontello}
			<Fontello class={bem.element('icon')} name={fontello} />&nbsp;
		{/if}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<svelte:element this={tag} href={to} {target} {rel} aria-label={label} onclick={onClick}>
			{#if children}
				{@render children()}
			{:else}
				{trimScheme(to)}
			{/if}
		</svelte:element>
	</span>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={tag}
		class={className}
		href={to}
		{target}
		{rel}
		aria-label={label}
		onclick={onClick}>
		{#if children}
			{@render children()}
		{:else}
			{trimScheme(to)}
		{/if}
	</svelte:element>
{/if}

<style lang="scss" src="./Link.css"></style>
