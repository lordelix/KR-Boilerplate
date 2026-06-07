<script>
	const { data } = $props()
	const gallery = $derived(data.gallery.filter(album => album.images.length))
</script>

<h1>XioniGallery</h1>

<Client browser>
	<XioniGallery {gallery} />
</Client>
