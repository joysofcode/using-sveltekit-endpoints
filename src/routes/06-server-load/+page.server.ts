export async function load() {
	return {
		title: 'Server load functions',
		bigint: BigInt(9007199254740991n),
		date: new Date(),
		map: new Map(),
		set: new Set(),
		regex: /([A-Z])\w+/g,
	}
}
