<script lang="ts">
	let slides = $state([
		{
			url: '/baro/images/ethorica.jpeg',
			id: 0,
			description: 'ETHORICA',
			year: 2026
		},
		{
			url: '/baro/images/ethiopia.jpg',
			id: 0,
			description: 'Ethiopia',
			year: 2017
		},
		{
			url: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Tikur_Sew_single_Teddy_Afro.jpeg',
			id: 0,
			description: 'Tikur Sew',
			year: 2012
		}
		// {
		// 	url: 'https://plus.unsplash.com/premium_photo-1683147850018-447471b3d00c?q=80&w=400',
		// 	id: 0,
		// 	description:
		// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut exercitationem obcaecati placeat quaerat enim corporis consequuntur sed eius voluptates, itaque eos omnis in facere nemo nesciunt suscipit totam. Consequuntur?'
		// },
		// {
		// 	url: 'https://images.unsplash.com/photo-1742540425845-8d8dabe893ca?q=80&w=400',
		// 	id: 0,
		// 	description:
		// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut exercitationem obcaecati placeat quaerat enim corporis consequuntur sed eius voluptates, itaque eos omnis in facere nemo nesciunt suscipit totam. Consequuntur?'
		// },
		// {
		// 	url: 'https://plus.unsplash.com/premium_photo-1683147850018-447471b3d00c?q=80&w=400',
		// 	id: 0,
		// 	description:
		// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut exercitationem obcaecati placeat quaerat enim corporis consequuntur sed eius voluptates, itaque eos omnis in facere nemo nesciunt suscipit totam. Consequuntur?'
		// },
		// {
		// 	url: 'https://images.unsplash.com/photo-1742540425845-8d8dabe893ca?q=80&w=400',
		// 	id: 0,
		// 	description:
		// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut exercitationem obcaecati placeat quaerat enim corporis consequuntur sed eius voluptates, itaque eos omnis in facere nemo nesciunt suscipit totam. Consequuntur?'
		// },
		// {
		// 	url: 'https://plus.unsplash.com/premium_photo-1683147850018-447471b3d00c?q=80&w=400',
		// 	id: 0,
		// 	description:
		// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut exercitationem obcaecati placeat quaerat enim corporis consequuntur sed eius voluptates, itaque eos omnis in facere nemo nesciunt suscipit totam. Consequuntur?'
		// }
	]);
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	// svelte-ignore state_referenced_locally
	const isOddLength: boolean = slides.length % 2 != 0;
	onMount(() => {
		slides = slides.reverse();

		slides.forEach((slide, index) => (slide.id = index));
		// slides = slides.toReversed();
		const slidesContainer = document.querySelector('.active-slide');
		const slidesElements: Array<HTMLElement> = gsap.utils.toArray('.slide');
		const activeSlideImages: Array<HTMLElement> = gsap.utils.toArray('.active-slide img');

		slidesElements.forEach(
			(element, index) =>
				(element.style.transform = `translateX(0%) translateY(-50%) translateZ(${(slidesElements.length - index - 1) * -2000}px)`)
		);
		function getInitialTranslateZ(slide: any) {
			const style = window.getComputedStyle(slide);
			const matrix = style.transform.match(/matrix3d\((.+)\)/);
			if (matrix) {
				const values = matrix[1].split(', ');
				return parseFloat(values[14] || '0.0');
			}
			return 0;
		}
		function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
			return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
		}
		slidesElements.forEach((slide: HTMLElement, index) => {
			const initialZ = getInitialTranslateZ(slide);
			ScrollTrigger.create({
				trigger: '.container',
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,

				onUpdate: (self) => {
					const progress = self.progress;
					const zIncrement = progress * 1850 * slides.length;
					const currentZ = initialZ + zIncrement;
					let opacity;
					if (currentZ > -2000) {
						opacity = mapRange(currentZ, -2000, 0, 0.5, 1);
					} else {
						opacity = mapRange(currentZ, -5000, -2000, 0, 0);
					}
					slide.style.opacity = opacity.toString();
					slide.style.transform = `translateX(0%) translateY(-50%) translateZ(${currentZ}px)`;

					if (currentZ < 300) {
						gsap.to(activeSlideImages[index], { opacity: 1, ease: 'power3.out' });
					} else {

						gsap.to(activeSlideImages[index], { opacity: index === 0 ? 1 : 0, ease: 'power3.out' });
					}
					if (progress == 1) {
						gsap.to(slidesContainer, { opacity: 0, ease: 'power3.out' });
					} else {
						gsap.to(slidesContainer, { opacity: 1, ease: 'power3.out' });
					}
			
				}
			});
		});
	});
</script>

<div class="relative -z-10 container -m-8 -mt-32">
	<div class="active-slide">
		{#each slides as slide}
			<img fetchpriority="high" src={slide.url} alt="" srcset="" />
		{/each}
	</div>
	<div class="slider">
		{#each slides as slide}
			<div
				// class:justify-end={isOddLength ? slide.id % 2 == 0 : slide.id % 2 != 0}
				class:lg:flex-row-reverse={isOddLength ? slide.id % 2 != 0 : slide.id % 2 == 0}
				class:opacity-100={slide.id == slides.length - 1}
				class:opacity-0={slide.id < slides.length - 1}
				class="slide flex w-full max-w-[1/2vw] flex-col justify-end gap-4 lg:max-w-300 lg:flex-row"
			>
				<div
					class:lg:items-end={isOddLength ? slide.id % 2 == 0 : slide.id % 2 != 0}
					class:lg:items-baseline={isOddLength ? slide.id % 2 != 0 : slide.id % 2 == 0}
					class="slide-copy flex flex-col content-end items-center justify-end gap-4 self-center lg:self-end"
				>
					{#if slide.description}
						<p class="font-serif text-3xl text-primary">{slide.description}</p>
						<p>{slide.year}</p>
					{/if}
				</div>
				<div class="slide-img h-full self-center lg:self-end">
					<img fetchpriority="high" src={slide.url} alt="" />
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	* {
		padding: 0;
		box-sizing: border-box;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.container {
		width: 100vw;
		height: 340vh;
	}
	.active-slide {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #000;
		opacity: 0.85;
		z-index: -1;
	}
	.active-slide img {
		position: absolute;
		filter: blur(50px) brightness(0.8);
		transform: scale(1.125);
	}
	.slider {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
		transform-style: preserve-3d;
		perspective: 750px;
		overflow: hidden;
	}
	.slide {
		position: absolute;

		overflow: hidden;
		img {
			width: 400px;
			aspect-ratio: 1;
		}
	}
	.slide {
		position: absolute;
		top: 50%;
		left: calc((100vw - 1200px) / 2);
		transform: translateX(0%) translateY(-50%);
	}
	:global(.odd) {
		left: 70%;
	}
	:global(.even) {
		left: 30%;
	}

	/* @media (max-aspect-ratio: 1/1) { */
	@media screen and (max-width: 1024px) {
		.slide {
			left: 0;
		}
		:global(.odd, .even) {
			/* display: none; */
			left: 50%;
		}
	}
</style>
