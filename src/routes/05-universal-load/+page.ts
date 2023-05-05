import Counter from './counter.svelte'

export async function load() {
	return {
		title: 'Universal load functions',
		component: Counter,
	}
}
