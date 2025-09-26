<script>
	import './aspect.scss'

	// --- [ Props ] ---------------------------------------------------------------------------------

	export let ratio = '16:9'
	export let baseName = 'Aspect'

	// -----------------------------------------------------------------------------------------------

	const [x, y] = ratio.split(':')
	const className = [baseName, $$props.class]
</script>

<div class={className}>
	<div class={baseName + '__ratio'} style={`padding-top: ${(+y / +x) * 100}%`}></div>
	<div class={baseName + '__content'}>
		<slot />
	</div>
</div>
