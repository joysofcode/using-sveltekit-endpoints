<script lang="ts">
	export let data
</script>

<!-- preload is enabled by default in `app.html` -->
<section data-sveltekit-preload-data="off">
	{#each data.images as image}
		<a class="image" href="images/{image.id}">
			<img src={image.thumbnailUrl} alt={image.title} />
		</a>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--size-3);
	}
</style>
