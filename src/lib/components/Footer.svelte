<script lang="ts">
const currentYear = new Date().getFullYear();
import { base } from '$lib';
</script>

<footer class="bg-card border-border border-t">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			<div class="col-span-2 md:col-span-1">
				<a class="mb-4 flex items-center gap-2" href="{base}">
					<span class="text-xl font-bold font-serif">TEDDY AFRO</span></a
				>
				<p class="text-muted-foreground text-sm leading-relaxed">
					The voice of unity. Experience the music that unites millions.
				</p>
			</div>
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wide text-primary">MUSIC</h3>
				<ul class="flex flex-col gap-2">
					<li>
						<a
							class="text-muted-foreground text-sm transition-colors hover:text-primary"
							href="{base}music">Discography</a
						>
					</li>
					<li>
						<a
							class="text-muted-foreground text-sm transition-colors hover:text-primary"
							href="{base}music">Latest Release</a
						>
					</li>
					<li>
						<a
							class="text-muted-foreground text-sm transition-colors hover:text-primary"
							href="{base}music">Music Videos</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wide text-primary">TOUR</h3>
				<ul class="flex flex-col gap-2">
					<li>
						<a
							class="text-muted-foreground text-sm transition-colors hover:text-primary"
							href="{base}tour">Upcoming Shows</a
						>
					</li>
					<li>
						<a
							class="text-muted-foreground text-sm transition-colors hover:text-primary"
							href="{base}tour">Past Events</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wide text-primary">INFO</h3>
				<ul class="flex flex-col gap-2">
					<li>
						<a
							class="text-muted-foreground text-sm transition-colors hover:text-primary"
							href="{base}contact">Contact</a
						>
					</li>
						<li>
						<a
							class="text-muted-foreground text-sm transition-colors hover:text-primary"
							href="{base}contact">Press</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="border-border mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
		>
			<div class="flex items-center gap-4">
				<a
					href="{base}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground transition-colors hover:text-primary"
					aria-label="Instagram"
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
						class="lucide lucide-instagram h-5 w-5"
						aria-hidden="true"
						><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path
							d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
						></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg
					></a
				><a
					href="{base}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground transition-colors hover:text-primary"
					aria-label="Twitter"
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
						class="lucide lucide-twitter h-5 w-5"
						aria-hidden="true"
						><path
							d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
						></path></svg
					></a
				><a
					href="{base}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground transition-colors hover:text-primary"
					aria-label="Facebook"
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
						class="lucide lucide-facebook h-5 w-5"
						aria-hidden="true"
						><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
						></path></svg
					></a
				><a
					href="{base}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground transition-colors hover:text-primary"
					aria-label="YouTube"
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
						class="lucide lucide-youtube h-5 w-5"
						aria-hidden="true"
						><path
							d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
						></path><path d="m10 15 5-3-5-3z"></path></svg
					></a
				>
			</div>
			<div class="flex flex-col items-center gap-1 md:items-end">
				<p class="text-muted-foreground text-sm">© {currentYear} Teddy Afro. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Updated to use daisyUI components for navbar */
</style>
