<script>
	import Signature from '$lib/components/icons/signature.svelte';

	// Import Icons (Gunakan library pilihan Anda, misal lucide-svelte)
	// import { Github, Instagram, Send, Youtube, ArrowUpRight } from 'lucide-svelte';

	// Svelte 5 State untuk Jam
	let time = $state(
		new Date().toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
			timeZone: 'Asia/Jakarta'
		})
	);

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date().toLocaleTimeString('en-US', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
				timeZone: 'Asia/Jakarta'
			});
		}, 1000);

		return () => clearInterval(interval);
	});

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Writing', href: '/blog' },
		{ name: 'Resume', href: '/resume' } // Asumsi ada halaman resume/cv
	];

	const socials = [
		{ name: 'GitHub', href: 'https://github.com/ripkime' },
		{ name: 'Instagram', href: 'https://instagram.com/ripkime' },
		{ name: 'Telegram', href: 'https://t.me/ripkime' },
		{ name: 'YouTube', href: 'https://youtube.com/@ripkime' }
	];
</script>

<footer class="relative mt-32 w-full overflow-hidden bg-white pt-20 pb-10 dark:bg-black">
	<div
		class="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800"
	></div>

	<div class="container mx-auto max-w-5xl px-6">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
			<div class="flex flex-col justify-between gap-6 md:col-span-4">
				<div class="flex flex-col gap-4">
					<div class="w-32 text-zinc-900 dark:text-white">
						<Signature />
					</div>

					<div class="flex flex-col gap-1">
						<span class="text-sm font-medium text-zinc-900 dark:text-white"
							>Muhamad Rifki Saputra</span
						>
						<span class="text-sm text-zinc-500 dark:text-zinc-400">Full Stack Engineer</span>
					</div>
				</div>

				<div class="flex items-center gap-2 text-xs font-medium text-zinc-400 dark:text-zinc-500">
					<span class="relative flex size-2">
						<span
							class="absolute inline-flex size-full animate-pulse rounded-full bg-green-500 opacity-75"
						></span>
						<span class="relative inline-flex size-2 rounded-full bg-green-500"></span>
					</span>
					<span class="tabular-nums">{time}</span>
					<span>•</span>
					<span>Jakarta, ID</span>
				</div>
			</div>

			<div class="md:col-span-4 md:col-start-6">
				<h3
					class="mb-4 font-mono text-xs font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500"
				>
					Sitemap
				</h3>
				<nav class="flex flex-col gap-3">
					{#each links as link}
						<a
							href={link.href}
							class="group flex w-fit items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
						>
							{link.name}
						</a>
					{/each}
				</nav>
			</div>

			<div class="md:col-span-3">
				<h3
					class="mb-4 font-mono text-xs font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500"
				>
					Connect
				</h3>
				<nav class="flex flex-col gap-3">
					{#each socials as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex w-fit items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
						>
							{social.name}
							<svg
								class="size-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.5 19.5 19.5 4.5M19.5 4.5H8.25m11.25 0v11.25"
								/>
							</svg>
						</a>
					{/each}
				</nav>
			</div>
		</div>

		<div
			class="mt-20 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-8 text-xs text-zinc-500 md:flex-row dark:border-zinc-800/50 dark:text-zinc-500"
		>
			<p>&copy; 2025 Ripki.me. All rights reserved.</p>

			<p class="flex items-center gap-1">
				Crafted with
				<span class="font-medium text-zinc-900 dark:text-zinc-300">Svelte 5</span>
				&
				<span class="font-medium text-zinc-900 dark:text-zinc-300">Tailwind 4</span>
			</p>
			<button
				onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				class="group flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-white"
			>
				Back to Top
				<svg
					class="size-3 transition-transform group-hover:-translate-y-1 -rotate-45"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 19.5 19.5 4.5M19.5 4.5H8.25m11.25 0v11.25"
					/>
				</svg>
			</button>
		</div>
	</div>
</footer>
