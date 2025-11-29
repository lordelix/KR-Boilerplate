<script lang="ts">
	import './XioniShopCartButton.scss'

	import { CART } from '$lib/stores'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { XioniShopCartButtonProps } from './XioniShopCartButton'
	import { Button } from '..'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'XioniShopCartButton',
		class: classProp,
		hideEmpty = false,
		text = 'Warenkorb',
		onClick,
		...restProps
	}: XioniShopCartButtonProps = $props()

	// --- [ Setup ] ---------------------------------------------------------------------------------

	const itemsCount = $derived($CART.products.length)
	const { modifier, element } = makeBEM(baseName)
	const classNames = $derived([
		baseName,
		itemsCount > 0 ? modifier('item-count-' + itemsCount) : undefined,
		classProp
	])
</script>

{#if !(hideEmpty && !itemsCount)}
	<Button to="/checkout" {baseName} fontello="basket" class={classNames} {...restProps}>
		{text}
	</Button>
{/if}
