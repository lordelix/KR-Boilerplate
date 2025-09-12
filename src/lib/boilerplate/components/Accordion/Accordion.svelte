<script lang="ts">
	import './Accordion.css'

	import classnames from 'classnames'
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { type AccordionProps } from './Accordion.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'Accordion',
		children,
		class: className,
		...restProps
	}: AccordionProps = $props()

	// -----------------------------------------------------------------------------------------------

	let activeItem = writable(null)

	setContext('Accordion:active-item', activeItem)
</script>

<ul {...restProps} class={classnames(baseName, className)}>
	{@render children?.()}
</ul>
