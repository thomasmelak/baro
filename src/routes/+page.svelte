<script>
	import Depth from '$lib/components/depthGallery.svelte';
	import Music from './music/+page.svelte';
	import Tour from './tour/+page.svelte';
	let hero = {
		heading: 'TEDDY AFRO',
		subheading: 'The voice of unity and love',
		body: 'Experience the powerful music that has touched millions of hearts across the globe. A celebration of Ethiopian heritage and the universal language of love.'
	};
</script>

<section
	class="-mt-32 -ml-8 flex h-screen w-screen bg-linear-180 from-base-100 to-transparent px-8 py-24 backdrop-blur-2xl lg:bg-transparent lg:from-transparent lg:backdrop-blur-none"
>
	<div class="mx-auto flex w-screen max-w-7xl items-center">
		<div class="lg:w-1/2">
			<p class="mb-0 font-serif text-3xl leading-relaxed font-extrabold text-primary">
				{hero.subheading}
			</p>
			<h1 class="mb-0 text-5xl leading-relaxed font-extrabold">{hero.heading}</h1>
			<p class="mb-10 text-xl opacity-90">
				{hero.body}
			</p>
			<div class="flex space-x-4">
				<a class="btn btn-primary" href="/baro/music">Discography </a>
				<a class="btn" href="/baro/tour"> Tour dates</a>
			</div>
		</div>
	</div>
</section>

<Depth />

<div class="mx-auto mt-32 flex max-w-7xl flex-col gap-32">
	<Tour showTop />
	<Music showTop />

	<section class="bg-background relative overflow-hidden py-20">
		<!-- <div class="absolute inset-0 opacity-5">
			<div
				class="absolute inset-0"
				style="background-image:url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a853' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)"
			></div>
		</div> -->
		<div class="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
			<div
				class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-8 w-8 text-primary"
					aria-hidden="true"
					><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect
						x="2"
						y="4"
						width="20"
						height="16"
						rx="2"
					></rect></svg
				>
			</div>
			<h2 class="text-foreground mb-4 text-3xl font-bold text-balance md:text-4xl">
				Get updates about Teddy Afro
			</h2>
			<p class="text-muted-foreground mb-8 text-lg leading-relaxed">
				Be the first to know about new music releases, tour dates, exclusive content, and special
				offers. Join the family.
			</p>
			<form class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
				<input
					type="email"
					data-slot="input"
					class="file:text-foreground placeholder:text-muted-foreground selection:text-primary-foreground dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-card border-border h-9 w-full min-w-0 flex-1 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-primary focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
					placeholder="Enter your email"
					required
					value=""
				/><button
					data-slot="button"
					class="btn btn-primary"
					>Subscribe</button
				>
			</form>
			<p class="text-muted-foreground mt-4 text-xs">
				By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
			</p>
		</div>
	</section>
	<!-- <Shop showTop/> -->
	<!-- <Contact /> -->
</div>
