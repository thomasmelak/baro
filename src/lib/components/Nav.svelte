<script lang="ts">
	import gsap from 'gsap'
	import { SplitText } from 'gsap/SplitText'
	import { onMount } from 'svelte'

	import { base } from '$lib'

	onMount(() => {
		const navToggler = document.querySelector('.nav-toggler')
		const navBarContainer = document.querySelector('.nav-container')
		const navBgs = document.querySelectorAll('.nav-bg')
		const itemsContainer = document.querySelector('.nav-items')
		const itemContent = document.querySelector('.nav-content')
		const ease = 'power3.inOut'
		gsap.registerPlugin(SplitText)

		let isMenuOpen = false
		let isAnimating = false
		const linkBlocks = ['.socials .line, .legal .line', '.nav-primary-links .line']

		document.fonts.ready.then((_) => {
			SplitText.create('.nav-items a', {
				type: 'lines',
				mask: 'lines',
				linesClass: 'line',
			})
		})
		function animateLinksIn() {
			linkBlocks.forEach((selector) => {
				gsap.fromTo(
					selector,
					{ y: '100%' },
					{ y: '0%', duration: 0.75, stagger: 0.05, ease: ease, delay: 0.5 },
				)
			})
		}
		const timeline1 = gsap.timeline({
			paused: true,
			onComplete: () => {
				isAnimating = false	
			},
			onReverseComplete: () => {
				gsap.set(linkBlocks.join(', '), { y: '100%' })
				isAnimating = false
			},
		})

		function toggleMenu() {
			if (isAnimating) return
			isAnimating = true
			navToggler?.classList.toggle('open')
			itemContent?.classList.toggle('pointer-events-none')

			if (!isMenuOpen) {
				timeline1.play()
				animateLinksIn()
			} else {
				timeline1.reverse()
			}
			isMenuOpen = !isMenuOpen
			navBarContainer?.classList.toggle('text-primary-content')
			navBarContainer?.classList.toggle('bg-base-content/30')
		}
		itemsContainer?.addEventListener('click', toggleMenu)

		navToggler?.addEventListener('click', toggleMenu)
		timeline1.to(navBgs, {
			scaleY: 1,
			duration: 0.5,
			stagger: 0.1,
			ease: ease,
		})
		timeline1.to(
			'.nav-items',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				duration: 0.75,
				ease: ease,
				delay: 0.1,
			},
			'-=0.6',
		)
	})
</script>

<div
	class="nav-container fixed z-2 flex w-full place-content-center bg-base-content/30 p-8 backdrop-blur-md">
	<nav class="flex w-full max-w-7xl items-center justify-between">
		<div class="nav-logo flex items-center">
			<a href={base} class="font-serif text-2xl uppercase transition-colors ease-in-out">
				Teddy Afro
			</a>
		</div>
		<button
			aria-label="menu"
			tabindex="0"
			class="nav-toggler flex flex-col content-center items-center gap-1">
			<span></span>
			<span></span>
		</button>
	</nav>
</div>

<div class="nav-content pointer-events-none place-content-center">
	<div class="nav-bg"></div>
	<div class="nav-bg"></div>
	<div class="nav-bg"></div>
	<div class="nav-items place-content-center px-8 md:py-32">
		<div class="flex w-full max-w-7xl flex-col justify-center gap-8 md:flex-row">
			<div class="nav-items-col flex-col-reverse items-start md:flex-col">
				<div class="socials flex flex-col gap-1">
					<a href={base}>Youtube</a>
					<a href={base}>Twitter</a>
					<a href="{base}tour">Facebook</a>
					<a href="{base}music">Instagram</a>
					<a href="{base}contact">Contact</a>
				</div>
				<div class="legal hidden flex-col gap-1 md:flex">
					<a href={base}>Cookie Policy</a>
					<a href="{base}tour">Disclosures</a>
					<a href="{base}music">Press</a>
				</div>
			</div>
			<div class="nav-items-col items-end">
				<div class="nav-primary-links flex flex-col gap-4">
					<a href={base}>Home</a>
					<a href="{base}music">Music</a>
					<a href="{base}tour">Tour</a>
					<a href={base}>Press</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.nav-toggler {
		padding: 1rem;
		margin-left: -1rem;
		cursor: pointer;
	}
	:global(.nav-toggler) {
		background: none;

		border: none;
		span {
			width: 40px;
			height: 2px;
			background-color: currentColor;
			transition: all 0.4s ease;
		}
		&.open {
			:global(span) {
				&:first-child {
					transform-origin: center;
					transform: translateY(3.5px) translateX(3.5px) rotate(45deg);
				}
				&:nth-child(2) {
					transform-origin: center;
					transform: translateY(-2.5px) translateX(2.5px) rotate(-45deg);
				}
			}
		}
	}
	.nav-content {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
		a {
			:global(.line) {
				position: relative;
				will-change: transform;
				transform: translateY(100%);
			}
		}
	}
	.nav-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		transform: scaleY(0);
		transform-origin: top;
		will-change: transform;
		pointer-events: none;
		&:nth-child(1) {
			background-color: green;
		}
		&:nth-child(2) {
			background-color: yellow;
		}
		&:nth-child(3) {
			background-color: red;
		}
	}
	.nav-items {
		display: flex;
		gap: 2rem;
		background-color: var(--color-primary);
		color: var(--color-primary-content);
		clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
		will-change: clip-path;
		a {
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.nav-items-col {
		display: flex;
		justify-content: space-between;
		gap: 2rem;

		&:nth-child(1) {
			flex: 2;
			.legal {
				font-size: 0.9rem;
				opacity: 0.5;
			}
			.socials {
				font-size: 1.25rem;
			}
		}
		&:nth-child(2) {
			flex: 4;
			font-size: 3rem;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.nav-content,
		.nav-items {
			height: 100svh;
		}
		.nav-items-col {
			&:nth-child(1),
			&:nth-child(2) {
				flex: none;
			}
		}
	}
</style>
