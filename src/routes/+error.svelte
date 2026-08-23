<script lang="ts">
	import '$lib/styles/styles.scss'

	import { Link, Message } from '$lib/boilerplate/components'
	import { page } from '$app/state'
	import { browser } from '$app/environment'
	import { pushState } from '$app/navigation'

	if (browser && !page.url.searchParams.has('error')) {
		pushState('', '?error=' + page.status)
	}

	const message = page.error?.message || 'Ein Fehler ist aufgetreten'
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div data-error>
	<div class="$text-center">
		<Message title="🥵 Ups…" type="error">
			<em>
				{#if page.status === 404}
					Die Seite wurde nicht gefunden.
				{:else if page.status === 400}
					Fehlerhafte Eingabe
				{:else}
					Ein interner Fehler ist aufgetreten
				{/if}
			</em>
		</Message>
		<p>
			<Link to="/">Zur Startseite</Link>.
		</p>
		<hr />
		<p>
			<small>{message}</small>
		</p>
	</div>
</div>

<style>
	hr {
		max-width: 26rem;
		margin: 0 auto;
	}

	[data-error] {
		display: grid;
		place-items: center;
		height: 80vh;
	}
</style>
