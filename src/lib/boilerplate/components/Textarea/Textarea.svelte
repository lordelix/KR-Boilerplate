<script lang="ts">
	import './Textarea.scss'

	import randomString from '$lib/boilerplate/utils/randomString'

	// --- [ Props ] ---------------------------------------------------------------------------------

	export let label: string | boolean = false
	export let name = 'textarea'
	export let placeholder: string | null = null
	export let required = false
	export let rows: number | null | undefined = 4
	export let value = ''
	export let id = 'text-' + randomString()
	export let baseName = 'Textarea'
</script>

<div {...$$restProps} class={[baseName, $$props.class]}>
	{#if label}
		<label class={baseName + '__label'} for={id}>
			{label}
			{#if required}*{/if}
		</label>
	{/if}
	<textarea class={baseName + '__input'} {required} {id} {name} {rows} {placeholder} bind:value
	></textarea>
</div>
