<script lang="ts">
	let albums = [
		{
			title: 'ETHORICA',
			year: 2026,
			cover: '/baro/images/ethorica.jpeg'
		},
		{
			title: 'Ethiopia',
			year: 2017,
			cover: '/baro/images/ethiopia.jpg'
		},
		{
			title: 'Tikur sew',
			year: 2012,
			cover: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Tikur_Sew_single_Teddy_Afro.jpeg'
		},
		{
			title: 'Yasteseryal',
			year: 2005,
			cover: 'https://www.teddyafromuzika.com/wp-content/uploads/2015/12/abogida.jpg'
		},
			{
			title: 'Teddy',
			year: 2002,
			cover: 'https://www.teddyafromuzika.com/wp-content/uploads/2015/12/abogida.jpg'
		},
		{
			title: 'Abugida',
			year: 2001,
			cover: 'https://www.teddyafromuzika.com/wp-content/uploads/2015/12/abogida.jpg'
		}
	];

	let { showTop } = $props<{
		showTop?: boolean;
	}>();
</script>

<div class="mx-auto w-full max-w-7xl">
	<div class="mb-8 flex w-full flex-wrap items-end justify-between gap-8">
		<div class="flex flex-col space-x-8 sm:max-w-3/4">
			<h1 class="mb-4 text-3xl font-bold text-base-content">Discography</h1>
			<p class="font-light">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusantium!
			</p>
		</div>
		{#if showTop}
			<a href="/music" class="btn w-full btn-outline btn-primary sm:w-auto">Show more</a>
		{/if}
	</div>

	<div class="grid grid-cols-1 flex-wrap gap-8 md:grid-cols-2">
		{#each showTop ? albums.splice(0, 2) : albums as album}
			<a
				href="/music"
				class="group flex flex-1 flex-col items-stretch overflow-hidden rounded-3xl border border-base-content/20 bg-base-200 shadow-sm lg:flex-row"
			>
				<img class="object-cover lg:w-1/2 aspect-square" src={album.cover} alt={album.title} />
				<div class="flex flex-col justify-end p-8">
					<h2 class="text-2xl font-bold group-hover:text-primary">{album.title}</h2>
					<h4 class="mb-4 font-light text-base-content/60">{album.year}</h4>
					<button class="btn mt-4 w-full btn-primary">Listen</button>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	/* Updated to glassmorphism design with transparency and blur */
</style>
