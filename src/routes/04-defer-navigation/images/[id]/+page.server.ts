async function getImage(id: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/photos/${id}`
	)
	const image = await response.json()
	return image
}

export async function load({ params }) {
	return {
		image: await getImage(params.id),
	}
}
