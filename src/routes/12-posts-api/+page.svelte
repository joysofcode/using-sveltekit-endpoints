<script lang="ts">
	export let data
</script>

<h1>API Endpoint</h1>

<a href="/12-posts-api/api/posts" target="_blank">Posts API endpoint</a>
<a href="/12-posts-api/api/posts?start=0&end=100" target="_blank">
	Posts API endpoint with range parameters
</a>
<a href="/12-posts-api/api/posts?start=0&end=100&userId=1" target="_blank">
	Posts API endpoint with range parameters and filtering
</a>

<ul>
	{#each data.posts as post}
		<li>{post.title}</li>
	{/each}
</ul>
