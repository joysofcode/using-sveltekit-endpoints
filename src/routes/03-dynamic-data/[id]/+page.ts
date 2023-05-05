async function getPost(id: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	)
	return response.json()
}

export async function load({ params }) {
	return {
		post: await getPost(params.id),
	}
}
