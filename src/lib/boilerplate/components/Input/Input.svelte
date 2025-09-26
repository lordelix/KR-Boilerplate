<script lang="ts">
	import './Input.scss'

	import randomString from '$lib/boilerplate/utils/randomString'

	// --- [ Types ] ---------------------------------------------------------------------------------

	import { type InputProps, InputType } from './Input.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id = 'input-' + randomString(),
		baseName = 'Input',
		class: classProp,
		label,
		name,
		placeholder,
		readonly,
		required,
		type = InputType.TEXT,
		value,
		error,
		multiple = false,
		...restProps
	}: InputProps = $props()

	// -----------------------------------------------------------------------------------------------

	const inputProps = {
		name,
		placeholder,
		required,
		readonly,
		type,
		multiple
	}
</script>

<div
	class={[
		baseName,
		classProp,
		{ [baseName + '--has-error']: !!error, [baseName + '--read-only']: !!readonly }
	]}>
	{#if label}
		<label class={baseName + '__label'} for={id}>
			{label}

			{#if required}*{/if}
		</label>
	{/if}
	<input {id} {...inputProps} {...restProps} class={baseName + '__input'} bind:value />
</div>
