<script lang="ts">
	let count = 0

	let increment = () => (count += 1)
</script>

<button on:click={increment}>
	{count}
</button>

<style>
	button {
		margin-block: var(--size-7);
	}
</style>
