<script lang="ts">
	import { enhance } from '$app/forms'

	export let form
</script>

<h1>Form actions</h1>

<form method="POST" action="?/login" use:enhance>
	{#if form?.invalid}
		<p class="error">Invalid credentials.</p>
	{/if}

	<label for="email">
		Email
		<input name="email" type="email" value={form?.email ?? ''} />
	</label>

	<label for="password">
		Password
		<input name="password" type="password" />
	</label>

	<button type="submit">Log in</button>
	<button type="submit" formaction="?/register">Register</button>
</form>

<style>
	form {
		max-inline-size: 400px;
		display: grid;
		gap: var(--size-3);
	}

	input {
		inline-size: 100%;
		font-size: var(--font-size-3);
		line-height: 2;
	}

	button {
		display: inline-block;
	}

	.error {
		color: var(--red-4);
	}
</style>
