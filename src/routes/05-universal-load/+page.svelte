<script lang="ts">
	export let data
</script>

<h1>{data.title}</h1>

<div>
	<p>
		<a
			href="https://kit.svelte.dev/docs/load#universal-vs-server"
			target="_blank"
		>
			Universal <code>load</code> functions
		</a>
		return an object containing
		<b>any values</b> including Svelte components.
	</p>
</div>

<svelte:component this={data.component} />
