async function getImages(limit: number) {
	const response = await fetch('https://jsonplaceholder.typicode.com/photos')
	const images = await response.json()
	return images.slice(0, limit)
}

export async function load() {
	return {
		images: await getImages(20),
	}
}
