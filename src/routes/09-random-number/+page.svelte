<script lang="ts">
	let randomNumber = 0

	async function getRandomNumber() {
		const response = await fetch('/09-random-number/random-number')
		randomNumber = await response.json()
	}
</script>

<h1>Random number</h1>
<h2>{randomNumber.toFixed(1)}</h2>

<button on:click={getRandomNumber}>🎲</button>
