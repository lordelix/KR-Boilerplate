<script lang="ts">
	import type { FontelloProps } from './Fontello.d'

	let {
		baseName = 'Fontello',
		class: classProp,

		name,

		onClick,
		...restProps
	}: FontelloProps = $props()
</script>

<i
	class={[baseName, classProp, 'fontello-' + name]}
	aria-hidden="true"
	onclick={() => onClick?.()}
	{...restProps}></i>
