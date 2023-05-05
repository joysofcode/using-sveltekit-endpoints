import { fail } from '@sveltejs/kit'

export const actions = {
	async login({ request }) {
		const data = await request.formData()
		const email = data.get('email')
		const password = data.get('password')

		if (!email || password !== '1234') {
			return fail(400, { email, invalid: true })
		}
	},
	async register() {
		// ...
	},
}
