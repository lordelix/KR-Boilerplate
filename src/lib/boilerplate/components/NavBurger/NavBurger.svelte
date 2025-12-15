<script lang="ts">
	import './NavBurger.scss'
	import type { NavBurgerProps } from './NavBurger.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		active = false,
		baseName = 'NavBurger',
		class: className,
		...restProps
	}: NavBurgerProps = $props()

	// -----------------------------------------------------------------------------------------------

	let computedClassName = $derived([baseName, !active || 'NavBurger--active', className])
</script>

<button aria-label="Menü" class={computedClassName} {...restProps}>
	<span class="NavBurger__text">Menü</span>
	<!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
	<svg class="NavBurger__svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path
			class="NavBurger__svg-path"
			d="M5 8H13.75M5 12H19M10.25 16L19 16"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
</button>
