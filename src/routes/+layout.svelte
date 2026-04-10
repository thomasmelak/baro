<script lang="ts">
	import Footer from '../lib/components/Footer.svelte'

	import Nav from '../lib/components/Nav.svelte'

	import favicon from '$lib/assets/favicon.svg'
	import './layout.css'

	let { children } = $props()
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Nav></Nav>

<main class="min-h-screen p-8 pt-32">
	{@render children()}
</main>

<Footer></Footer>

<style>
	/* Updated to use daisyUI components for navbar */
</style>
