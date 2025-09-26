<script>
	import './ButtonRow.scss'

	// --- [ Props ] ---------------------------------------------------------------------------------

	const baseName = 'ButtonRow'
</script>

<div class={[baseName, $$props.class]}>
	<slot />
</div>
