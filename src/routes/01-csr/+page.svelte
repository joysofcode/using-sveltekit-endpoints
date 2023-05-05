<script lang="ts">
	async function getPosts() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		return response.json()
	}

	let posts = getPosts()
</script>

<h1>Client-Side Rendering</h1>

{#await posts}
	<p>Loading...</p>
{:then posts}
	<ul>
		{#each posts as post}
			<li>{post.title}</li>
		{/each}
	</ul>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
