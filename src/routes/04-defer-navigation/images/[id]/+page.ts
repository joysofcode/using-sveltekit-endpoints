import { browser } from '$app/environment'

async function loadImage(url: string) {
	return new Promise((resolve) => {
		const image = new Image()
		image.onload = () => resolve(image)
		image.src = url
	})
}

export async function load({ data }) {
	if (browser) {
		await loadImage(data.image.url)
	}

	return data
}
