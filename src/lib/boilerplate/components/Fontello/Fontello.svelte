<script lang="ts">
	import type { FontelloProps } from './Fontello.d'

	let { baseName = 'Fontello', class: classProp, name, onClick }: FontelloProps = $props()
</script>

<i class={[baseName, classProp, 'fontello-' + name]} aria-hidden="true" onclick={onClick}></i>
