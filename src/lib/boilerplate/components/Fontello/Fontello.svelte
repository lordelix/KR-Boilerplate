<script lang="ts">
	import type { FontelloProps } from './Fontello'

	let { baseName = 'Fontello', class: _class, name, onClick }: FontelloProps = $props()
</script>

<i class={[baseName, _class, 'fontello-' + name]} aria-hidden="true" onclick={onClick}></i>
