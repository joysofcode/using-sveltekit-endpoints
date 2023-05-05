<script lang="ts">
	import * as devalue from 'devalue'

	export let data

	console.log(data)
</script>

<h1>{data.title}</h1>

<div>
	<p>
		<a
			href="https://kit.svelte.dev/docs/load#universal-vs-server"
			target="_blank"
		>
			Server <code>load</code> functions
		</a>
		must return data that can be serialized with
		<a href="https://github.com/Rich-Harris/devalue">devalue</a>. The data can
		include <b>promises</b> that are streamed to the browser.
	</p>
</div>

<textarea rows="3" spellcheck="false" value={devalue.stringify(data)} />

<style>
	textarea {
		margin-top: var(--size-3);
	}
</style>
