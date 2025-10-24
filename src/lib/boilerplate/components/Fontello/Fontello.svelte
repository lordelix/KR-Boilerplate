<script lang="ts">
	import { uniqueId } from 'lodash-es'
	import type { FontelloProps } from './Fontello.d'

	let {
		id = uniqueId('fontello-'),
		baseName = 'Fontello',
		class: classProp,

		name,

		onClick,
		...restProps
	}: FontelloProps = $props()
</script>

<i
	{id}
	class={[baseName, classProp, 'fontello-' + name]}
	aria-hidden="true"
	onclick={() => onClick?.()}
	{...restProps}></i>
