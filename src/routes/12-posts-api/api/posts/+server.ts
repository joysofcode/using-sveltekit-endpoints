import { json } from '@sveltejs/kit'

type Post = {
	userId: number
	id: number
	title: string
	body: string
}

type Params = {
	start: number
	end: number
	userId: number | null
}

async function getPosts({ start = 0, end = 10, userId = null }: Params) {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts: Post[] = await response.json()

	if (userId) {
		const userIdPosts = posts.filter((user) => user.userId === userId)
		return userIdPosts.slice(start, end)
	} else {
		return posts.slice(start, end)
	}
}

export async function GET({ url }) {
	const start = Number(url.searchParams.get('start')) || 0
	const end = Number(url.searchParams.get('end')) || 10
	const userId = Number(url.searchParams.get('userId')) || null

	const posts = await getPosts({ start, end, userId })

	return json(posts)
}
