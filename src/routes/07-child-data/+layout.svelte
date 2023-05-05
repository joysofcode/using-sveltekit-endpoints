<script>
	import { page } from '$app/stores'
</script>

<pre>
 {JSON.stringify($page, null, 2)}
</pre>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<h1>Accessing child data</h1>

<slot />
