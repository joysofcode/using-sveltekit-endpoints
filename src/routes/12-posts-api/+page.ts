export async function load({ fetch }) {
	const response = await fetch('/12-posts-api/api/posts?start=0&end=100')
	const posts = await response.json()
	return { posts }
}
