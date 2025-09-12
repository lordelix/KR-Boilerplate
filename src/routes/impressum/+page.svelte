<script>
	import stammdaten from '$lib/stammdaten'

	const { title, web } = stammdaten
</script>

<svelte:head>
	<title>Impressum | {title}</title>
	<meta
		name="description"
		content="Impressum und rechtliche Hinweise - Kontaktdaten und Verantwortlichkeiten für {web}." />
</svelte:head>

<h1>Impressum</h1>

<Address {...stammdaten} />

<h3>Haftungshinweis</h3>
<p>
	Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer
	Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
</p>
<h3>Webdesign, Programmierung:</h3>
<p>
	<strong>klickrhein</strong>, Frank Förster
	<br />
	<Link to="https://www.klickrhein.de" title="klickrhein, Webagentur in Oestrich-Winkel" />
	| <Mail to="info@klickrhein.de" />
</p>
