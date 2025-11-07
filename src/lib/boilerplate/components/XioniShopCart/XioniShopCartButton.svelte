<script lang="ts">
	import './XioniShopCartButton.scss'

	import { Button } from '../Button'
	import { CART } from '$lib/stores'
	import classnames from 'classnames'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { XioniShopCartButtonProps } from './XioniShopCartButton'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'XioniShopCartButton',
		class: classProp,
		onClick,
		...restProps
	}: XioniShopCartButtonProps = $props()

	// --- [ Setup ] ---------------------------------------------------------------------------------

	const { modifier } = makeBEM(baseName)
	const classNames = $derived(
		classnames(classProp, modifier('item-count-' + $CART.products.length || '0'))
	)
</script>

<Button to="/checkout" {baseName} fontello="basket" class={classNames} {...restProps}>
	<span hidden>Warenkorb</span>
</Button>
