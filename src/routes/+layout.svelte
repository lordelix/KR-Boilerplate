<script lang="ts">
	import '$styles/styles.scss'

	import { Nav, Toplink, Wrapper } from '$lib/boilerplate/components'
	import { page } from '$app/state'
	import routes from '$routes'
	import stammdaten from '$stammdaten'

	const { children } = $props()
	const canonicalUrl = $derived(`https://${stammdaten.web}${page.url.pathname}`)
</script>

<svelte:head>
	<meta name="theme-color" content="#333" />
	<meta name="thumbnail" content="https://{stammdaten.web}/meta/og-image.jpg" />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={stammdaten.title} />
	<meta property="og:description" content="[...]" />
	<meta property="og:image" content="https://{stammdaten.web}/meta/og-image.jpg" />
</svelte:head>

<div data-layout="root">
	<Nav {routes} sticky />
	<Wrapper tag="main">
		{@render children?.()}
	</Wrapper>
</div>

<Toplink />
