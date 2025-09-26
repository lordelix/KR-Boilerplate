<script lang="ts">
	import { useMailer } from '$lib/boilerplate/xioni/mailer/Message'
	import { writable } from 'svelte/store'

	import type { XioniApiErrorResponse } from '$lib/boilerplate/xioni/types'
	import type { SchemaMailerMessageRequestBody } from '$lib/boilerplate/xioni/api/api.d'

	// --- [ Components ] ----------------------------------------------------------------------------

	import { LoadingIndicator, Message, Modal, type FormProps } from '..'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id,
		class: className,
		baseName = 'Form',

		moduleId,

		onSuccess,
		onError,

		children,
		done
	}: FormProps = $props()

	// -----------------------------------------------------------------------------------------------

	let formRef: HTMLFormElement
	let doneModalRef: Modal
	let errorModalRef: Modal

	const formMail = useMailer()
	const formError = writable<XioniApiErrorResponse | undefined>()
	const isFormDone = writable(false)
	const isLoading = writable(false)

	export function submit(e: Event) {
		e.preventDefault()

		const formData = new FormData(formRef)
		formData.set('module-id', moduleId.toString())

		isLoading.set(true)
		formError.set(undefined)

		formMail
			.send(formData as unknown as SchemaMailerMessageRequestBody)
			.then(() => {
				formRef.reset()
				isFormDone.set(true)
				doneModalRef.open()

				if (onSuccess) {
					onSuccess()
				}
			})
			.catch(error => {
				formError.set(error)
				errorModalRef.open()

				if (onError) {
					onError(error)
				}
			})
			.finally(() => isLoading.set(false))
	}
</script>

<form class={[baseName, className]} bind:this={formRef} onsubmit={submit}>
	{@render children?.()}
</form>

{#if $isLoading}
	<LoadingIndicator />
{/if}

<Modal bind:this={doneModalRef}>
	{#if done}
		{@render done?.()}
	{:else}
		<p>Vielen Dank.</p>
	{/if}
</Modal>

<Modal bind:this={errorModalRef}>
	<Message class="{baseName}__errors" type="error">
		<ul>
			{#each Object.entries($formError?.details || []) as [key, values]}
				<li>
					<b>{key.toUpperCase()}:</b>
					{values.map(value => value.message).join('<br />')}
				</li>
			{/each}
		</ul>
	</Message>
</Modal>
