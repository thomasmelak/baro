<script lang="ts">
	let tourDates = [
		{
			name: 'Ethorica tour',
			date: new Date(Date.parse('08/09/2026 12:00')),
			city: 'New York',
			venue: 'Madison Square Garden'
		},
		{
			name: 'Ethorica tour',
			date: new Date(Date.parse('09/12/2026 20:00')),
			city: 'Los Angeles',
			venue: 'Hollywood Bowl'
		},
		{
			name: 'Ethorica tour',
			date: new Date(Date.parse('10/09/2026 22:00')),
			city: 'Chicago',
			venue: 'United Center'
		}
	];

	let { showTop } = $props<{
		showTop?: boolean;
	}>();
</script>

<div class="mx-auto w-full max-w-7xl">
	<div class="mb-8 flex w-full flex-wrap items-end justify-between gap-8">
		<div class="flex flex-col space-x-8 sm:max-w-3/4">
			<h1 class="mb-4 text-3xl font-bold">Upcoming Tour Dates</h1>
			<p class="font-light">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusantium!
			</p>
		</div>
		{#if showTop}
			<a href="/tour" class="btn w-full btn-outline btn-primary sm:w-auto">View all dates</a>
		{/if}
	</div>

	<ul class="space-y-2">
		{#each tourDates as tour}
			<li
				class="group bg-card flex cursor-pointer flex-col justify-between gap-4 rounded-xl border border-base-content/20 bg-base-200 p-6 transition-colors hover:border-primary/80 md:flex-row md:items-center"
			>
				<div class="flex gap-4">
					<div class="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-primary/10">
						<span class="text-xs font-medium text-primary uppercase"
							>{tour.date.toDateString().split(' ')[1]}</span
						><span class="text-2xl font-bold text-primary"
							>{tour.date.toDateString().split(' ')[2]}</span
						>
					</div>
					<div>
						<h3
							class="text-foreground text-lg font-semibold transition-colors group-hover:text-primary"
						>
							{tour.name}
						</h3>
						<div class="mt-1 flex items-center gap-4 text-sm text-base-content/60">
							<span class="flex items-center gap-1"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-calendar h-4 w-4"
									aria-hidden="true"
									><path d="M8 2v4"></path><path d="M16 2v4"></path><rect
										width="18"
										height="18"
										x="3"
										y="4"
										rx="2"
									></rect><path d="M3 10h18"></path></svg
								>{tour.date.toLocaleString()}</span
							>
						</div>
					</div>
				</div>
				<div class="flex items-center gap-2 text-base-content/60 md:flex-1 md:justify-center">
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
						class="lucide lucide-map-pin h-4 w-4"
						aria-hidden="true"
						><path
							d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
						></path><circle cx="12" cy="10" r="3"></circle></svg
					><span>{tour.venue}, {tour.city}</span>
				</div>
				<div>
					<a class="btn btn-primary w-full" href="https://tickets.example.com" target="_blank" rel="noopener noreferrer">
						Get Tickets
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
							class="lucide lucide-external-link h-4 w-4"
							aria-hidden="true"
							><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							></path></svg
						>
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>
