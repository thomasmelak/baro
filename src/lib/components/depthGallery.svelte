<script lang="ts">
	import { base } from '$lib'
	import { gsap } from 'gsap'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'

	import { onMount } from 'svelte'
	let slides = $state([
		{
			url: `${base}images/ethorica.jpeg`,
			id: 0,
			description: 'ETHORICA',
			year: 2026,
		},
		{
			url: `${base}images/ethiopia.jpg`,
			id: 0,
			description: 'Ethiopia',
			year: 2017,
		},
		{
			url: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Tikur_Sew_single_Teddy_Afro.jpeg',
			id: 0,
			description: 'Tikur Sew',
			year: 2012,
		}
	])

	gsap.registerPlugin(ScrollTrigger)

	// svelte-ignore state_referenced_locally
	const isOddLength: boolean = slides.length % 2 != 0
	onMount(() => {
		slides.forEach((slide, index) => (slide.id = index))
		const slidesContainer = document.querySelector('.container')
		const slidesElements: Array<HTMLElement> = gsap.utils.toArray('.slide-wrapper')
		const activeSlideImages: Array<HTMLElement> = gsap.utils.toArray('.active-slide img')
		activeSlideImages.reverse()

		// slidesElements.forEach(
		// 	(element, index) =>
		// 		(element.style.transform = `translateX(0%) translateY(-50%) translateZ(0px)`),
		// )
		// slidesElements.reverse()
		function getInitialTranslateZ(slide: any) {
			const style = window.getComputedStyle(slide)
			const matrix = style.transform.match(/matrix3d\((.+)\)/)
			if (matrix) {
				const values = matrix[1].split(', ')
				return parseFloat(values[14] || '0.0')
			}
			return 0
		}
		function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
			return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
		}
		// Pin the entire container
		gsap.timeline({
			scrollTrigger: {
				trigger: '.slider-container',
				start: 'top top',
				end: '+=' + slidesElements.length * 100 + '%',
				scrub: false,
				anticipatePin: 1,
				pin: true,
				pinSpacing: 'margin',
				// pinType: 'fixed',
				// pinSpacer: slidesContainer,
				markers: false,
			},
		})

		slidesElements.forEach((slide: HTMLElement, index) => {
			// const initialZ = getInitialTranslateZ(slide)
			// const previousItem = slidesElements[index - 1]
			// const nextItem = slidesElements[index - 1]

			const inner = slide.querySelector('.slide')
			const t2 = gsap.timeline({
				scrollTrigger: {
					trigger: slide,
					anticipatePin:1 ,
					start: index < 1 ? 'top top' : 'center center',
					// pinnedContainer: '.slider-container',
					end: index < 1 ? 'bottom top' : 'bottom top',
					// endTrigger: 'Footer',
					scrub: true,
					markers: false,
					pin: true,
					// pinType: 'fixed',
					pinSpacing: index < 1,
				},
			})

			if (index < 1) {
				t2.set(inner, { opacity: 1 }, 0)
					.to(
						inner,
						{
							translateZ: 5,
							opacity: 0,
							// ease: 'circ.out',
						},
						1,
					)
					.set(activeSlideImages[index], { opacity: 1 }, 0.3)
					.to(activeSlideImages[index], { opacity: 0 }, 0.8)
					.to({}, {})
			} else {
				t2.set(inner, { opacity: 1, scaleX: 0, scaleY: 0 }, 0)
					.to(
						inner,
						{
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							translateZ: 0,
							// ease: 'circ.out',
						},
						0.2,
					)
					.to(
						inner,
						{
							translateZ: 5,
							opacity: 0,
							// ease: 'circ.out',
						},
						1,
					)
					.set(activeSlideImages[index], { opacity: 1 }, 0.3)
					.to(activeSlideImages[index], { opacity: index + 1 == slides.length ? 1 : 0 }, 0.8)
			}

			// t2.fromTo(slide, { scale: 1, opacity: 1 }, { scale: 0.7, opacity: 0.5, duration: 0.9 }).to(
			// 	slide,
			// 	{ opacity: 0, duration: 0.1 },
			// )
			// 		const t2 = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: slide,
			// 		start: 'top top',
			// 		// pinnedContainer: '.slider-container',
			// 		// pinnedContainer: '.slider-container',
			// 		end: '+=' + slidesElements.length * 100 + '%',
			// 		// end: 'bottom bottom',
			// 		scrub: true,
			// 		pin: true,
			// 		markers: true,
			// 	},
			// })
			// if (previousItem) {
			// 	t2.set(previousItem, { opacity: 0 }, '<')
			// 		.fromTo(
			// 			slide,
			// 			{
			// 				scaleY: 1,
			// 				opacity: 1,
			// 			},
			// 			{
			// 				// translateZ: 0,
			// 				scaleY: 0,
			// 				opacity: 0,
			// 			},
			// 			'<',
			// 		)
			// 		.set(previousItem, { opacity: 0 })
			// }

			// t1.fromTo(
			// 	activeSlideImages[index],
			// 	{
			// 		scaleY: 1,
			// 		opacity: 1,
			// 	},
			// 	{
			// 		scaleY: 0.5,
			// 		opacity: 0,
			// 	},
			// )

			// .fromTo(activeSlideImages[index], { opacity: 1 }, { opacity: 0 })
			// ScrollTrigger.create({
			// 	trigger: '.slider-container',
			// 	start: 'top top',
			// 	end: '+=' + slidesElements.length * 50 + '%',
			// 	scrub: true,
			// 	pin: true,
			// 	markers: true,
			// 	pinnedContainer: '.slider-container',

			// 	onUpdate: (self) => {
			// 		const progress = self.progress
			// 		const zIncrement = progress * 1850 * slides.length
			// 		const currentZ = initialZ + zIncrement
			// 		let opacity

			// 		if (currentZ > -2000) {
			// 			opacity = mapRange(currentZ, -2000, 0, 0.5, 1)
			// 		} else {
			// 			opacity = mapRange(currentZ, -5000, -2000, 0, 0)
			// 		}
			// 		slide.style.opacity = opacity.toString()
			// 		slide.style.transform = `translateX(0%) translateY(-50%) translateZ(${currentZ}px)`

			// 		if (currentZ < 300) {
			// 			gsap.to(activeSlideImages[index], { opacity: 1, ease: 'power3.out' })
			// 		} else {
			// 			gsap.to(activeSlideImages[index], { opacity: index === 0 ? 1 : 0, ease: 'power3.out' })
			// 		}
			// 		if (progress == 1) {
			// 			gsap.to(slidesContainer, { opacity: 0, ease: 'power3.out' })
			// 		} else {
			// 			gsap.to(slidesContainer, { opacity: 1, ease: 'power3.out' })
			// 		}
			// 	},
			// })
		})
	})
</script>

<div class="slider-container  top-24 lg:top-0 container -m-8 -mt-32  -z-10  overflow-y-clip">
	<div class="active-slide">
		{#each slides.toReversed() as slide}
			<img fetchpriority="high" src={slide.url} alt="" srcset="" />
		{/each}
	</div>
	<div class="slider flex h-full flex-col items-center">
		{#each slides as slide}
			<div class="slide-wrapper flex min-h-full w-full max-w-7xl items-center">
				<div
					// class:opacity-100={slide.id == slides.length - 1}
					// class:opacity-0={slide.id < slides.length - 1}
					// class:lg:justify-end={isOddLength ? slide.id % 2 == 0 : slide.id % 2 != 0}
					class:lg:flex-row-reverse={isOddLength ? slide.id % 2 != 0 : slide.id % 2 == 0}
					class="slide mx-auto flex w-full max-w-[1/2vw] flex-col-reverse justify-end gap-4 lg:max-w-300 lg:flex-row">
					<div
						class:lg:items-end={isOddLength ? slide.id % 2 == 0 : slide.id % 2 != 0}
						class:lg:items-baseline={isOddLength ? slide.id % 2 != 0 : slide.id % 2 == 0}
						class="slide-copy flex flex-col content-end items-center justify-end gap-4 self-center lg:self-end">
						{#if slide.description}
							<p class="font-serif text-3xl text-primary">{slide.description}</p>
							<p>{slide.year}</p>
						{/if}
					</div>
					<div class="slide-img h-full self-center lg:self-end">
						<img fetchpriority="high" src={slide.url} alt="" />
					</div>
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
		height: 100vh;
	}
	.active-slide {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
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
		/* position: fixed;
		top: 0; */
		width: 100vw;
		height: 100%;
		/* height: 100%; */
		overflow: hidden;
	}
	.slide-container {
		overflow: hidden;
	}
	.slide-wrapper {
		transform-style: preserve-3d;
		perspective: 5px;
	}
	.slide {
		overflow: hidden;
		img {
			width: 400px;
			aspect-ratio: 1;
		}
	}
	/* 
	:global(.odd) {
		left: 70%;
	}
	:global(.even) {
		left: 30%;
	} */

	/* @media screen and (max-width: 1024px) {
		.slide {
			left: 0;
		}
		:global(.odd, .even) {
			display: none;
			left: 50%;
		}
	} */
</style>
