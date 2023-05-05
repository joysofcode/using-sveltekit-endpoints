export async function GET({ url }) {
	const max = Number(url.searchParams.get('max') ?? 1)
	const randomNumber = Math.random() * max
	return new Response(String(randomNumber))
}
