<script lang="ts">
	// Props
	let { src, fallBackText, css } = $props<{
		src?: string
		fallBackText?: string
		css?: string
	}>()
</script>

{#if src}
	<img alt="..." class={css} onerror={() => (src = undefined)} {src} />
{:else}
	<span
		class="glass-effect flex aspect-square h-full items-center justify-center rounded-full font-bold">
		{fallBackText?.at(0)?.toUpperCase() ?? 'P'}
	</span>
{/if}
