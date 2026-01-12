<script>
	import Github from '$lib/components/icons/github.svelte';
	import Instagram from '$lib/components/icons/instagram.svelte';
	import Signature from '$lib/components/icons/signature.svelte';
	import Telegram from '$lib/components/icons/telegram.svelte';
	import Youtube from '$lib/components/icons/youtube.svelte';
	import Hero from '$lib/components/landing/hero.svelte';
	import Project from '$lib/components/landing/project.svelte';
	import { tech_stack } from '$lib/constants';
</script>

<div class="container mx-auto max-w-4xl px-4 md:mt-20">
	<!-- hero -->
	<Hero />

	<!-- project -->
	<Project />

	<!-- tech stack -->
	<section class="px-4 pt-32">
		<div class="container mx-auto max-w-4xl">
			<div class="mb-12">
				<h2 class="font-heading text-3xl font-bold text-gray-900 dark:text-white">The Arsenal</h2>
				<p
					class="mt-4 max-w-xl text-lg leading-relaxed font-light text-gray-500 dark:text-gray-400"
				>
					The technology stack I use to build scalable backends and fluid user interfaces.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
				{#each tech_stack[0].mainStack as item}
					{@const Icon = item.icon}

					<div
						class={`group relative col-span-2 overflow-hidden rounded-3xl bg-gray-50 p-8 transition-all duration-300 hover:bg-${item.color}-50 hover:shadow-xl hover:shadow-${item.color}-500/10 dark:bg-zinc-900 dark:hover:bg-${item.color}-900/10`}
					>
						<div class="relative z-10 flex h-full flex-row justify-start gap-6">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-110 dark:bg-zinc-800 dark:ring-white/10"
							>
								<Icon />
							</div>

							<div class="flex flex-col">
								<h3 class="font-heading text-xl font-bold text-gray-900 dark:text-white">
									{item.title}
								</h3>
								<p class="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
									{item.subtitle}
								</p>
							</div>
						</div>
						<div
							class={`absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-${item.color}-500/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100`}
						></div>
					</div>
				{/each}

				{#each tech_stack[0].supportStack as item}
					{@const Icon = item.icon}
					<div
						class={`group flex flex-col items-center justify-center gap-4 rounded-3xl bg-gray-50 p-6 transition-all duration-300 hover:bg-${item.color}-50 hover:shadow-lg dark:bg-zinc-900 dark:hover:bg-${item.color}-900/10`}
					>
						<div
							class="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10"
						>
							<Icon />
						</div>
						<span class="font-heading font-semibold text-gray-700 dark:text-gray-300"
							>{item.title}</span
						>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- blog -->
	<section class="mt-32 mb-32 px-4">
		<div class="container mx-auto max-w-4xl">
			<div class="mb-12 flex items-end justify-between">
				<div>
					<h2 class="font-heading text-3xl font-bold text-gray-900 dark:text-white">Writing</h2>
					<p class="mt-2 text-base font-light text-gray-500 dark:text-gray-400">
						Thoughts on software engineering, performance, and Linux.
					</p>
				</div>

				<a
					href="/blog"
					class="group flex items-center gap-2 text-sm font-medium text-gray-900 transition hover:text-black dark:text-white dark:hover:text-gray-300"
				>
					Read all posts
					<svg
						class="h-4 w-4 transition-transform group-hover:translate-x-1"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg
					>
				</a>
			</div>

			<div class="flex flex-col">
				<a
					href="#s"
					class="group grid grid-cols-1 gap-y-4 border-t border-gray-200 py-10 transition-all hover:bg-gray-50 md:grid-cols-12 md:gap-x-8 dark:border-gray-800 dark:hover:bg-white/5"
				>
					<div
						class="flex flex-row items-center justify-between gap-4 md:col-span-3 md:flex-col md:items-start md:justify-start"
					>
						<span
							class="font-mono text-xs font-medium tracking-wider text-gray-400 uppercase dark:text-gray-500"
						>
							Dec 20, 2025
						</span>
						<span
							class="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300"
						>
							Engineering
						</span>
					</div>

					<div class="md:col-span-7">
						<h3
							class="mb-3 font-heading text-xl leading-tight font-bold text-gray-900 transition-colors group-hover:text-blue-600 md:text-2xl dark:text-white dark:group-hover:text-blue-400"
						>
							Migrating from PHP to Go: A Student's Perspective
						</h3>
						<p class="leading-relaxed font-light text-gray-600 dark:text-gray-400">
							Why I decided to switch stack for backend development. Exploring concurrency patterns
							and how Go's strict typing saved me hours of debugging compared to Node.js.
						</p>
					</div>

					<div class="hidden items-start justify-end md:col-span-2 md:flex">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white dark:border-gray-700 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-black"
						>
							<svg
								class="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg
							>
						</div>
					</div>
				</a>

				<a
					href="#s"
					class="group grid grid-cols-1 gap-y-4 border-t border-gray-200 py-10 transition-all hover:bg-gray-50 md:grid-cols-12 md:gap-x-8 dark:border-gray-800 dark:hover:bg-white/5"
				>
					<div
						class="flex flex-row items-center justify-between gap-4 md:col-span-3 md:flex-col md:items-start md:justify-start"
					>
						<span
							class="font-mono text-xs font-medium tracking-wider text-gray-400 uppercase dark:text-gray-500"
						>
							Nov 15, 2025
						</span>
						<span
							class="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300"
						>
							System
						</span>
					</div>

					<div class="md:col-span-7">
						<h3
							class="mb-3 font-heading text-xl leading-tight font-bold text-gray-900 transition-colors group-hover:text-orange-600 md:text-2xl dark:text-white dark:group-hover:text-orange-400"
						>
							Minimalist Dev Environment on Lubuntu
						</h3>
						<p class="leading-relaxed font-light text-gray-600 dark:text-gray-400">
							Turning an old laptop into a productivity machine. My configuration for i3wm,
							Alacritty, and Neovim to reduce memory usage under 400MB.
						</p>
					</div>

					<div class="hidden items-start justify-end md:col-span-2 md:flex">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white dark:border-gray-700 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-black"
						>
							<svg
								class="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg
							>
						</div>
					</div>
				</a>

				<a
					href="#s"
					class="group grid grid-cols-1 gap-y-4 border-t border-b border-gray-200 py-10 transition-all hover:bg-gray-50 md:grid-cols-12 md:gap-x-8 dark:border-gray-800 dark:hover:bg-white/5"
				>
					<div
						class="flex flex-row items-center justify-between gap-4 md:col-span-3 md:flex-col md:items-start md:justify-start"
					>
						<span
							class="font-mono text-xs font-medium tracking-wider text-gray-400 uppercase dark:text-gray-500"
						>
							Oct 03, 2025
						</span>
						<span
							class="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300"
						>
							Case Study
						</span>
					</div>

					<div class="md:col-span-7">
						<h3
							class="mb-3 font-heading text-xl leading-tight font-bold text-gray-900 transition-colors group-hover:text-sky-600 md:text-2xl dark:text-white dark:group-hover:text-sky-400"
						>
							Fighting SMS Scams with Flutter & ML
						</h3>
						<p class="leading-relaxed font-light text-gray-600 dark:text-gray-400">
							A deep dive into building 'Verifido'. How we collected datasets and trained a model to
							detect fraudulent messages in real-time on mobile devices.
						</p>
					</div>

					<div class="hidden items-start justify-end md:col-span-2 md:flex">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white dark:border-gray-700 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-black"
						>
							<svg
								class="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg
							>
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- resume -->
	<section class="mt-32 px-4">
		<div class="container mx-auto max-w-4xl">
			<div
				class="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 px-6 py-16 text-center shadow-sm sm:px-12 sm:py-20 dark:border-gray-800 dark:bg-zinc-900/50"
			>
				<div
					class="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-blue-500/10 to-purple-500/10 blur-3xl dark:from-blue-500/5 dark:to-purple-500/5"
				></div>

				<div class="relative z-10 flex flex-col items-center">
					<div
						class="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm dark:border-gray-700 dark:bg-zinc-800 dark:text-gray-300"
					>
						<span class="relative flex h-2 w-2">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
							></span>
							<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
						</span>
						Open for opportunities
					</div>

					<h2
						class="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
					>
						Let's build something meaningful.
					</h2>

					<p class="mt-4 max-w-lg text-lg font-light text-gray-600 dark:text-gray-400">
						Currently finishing my degree at UBSI and looking for challenges in Backend (Go) or Full
						Stack roles.
					</p>

					<div class="mt-10 flex flex-col gap-4 sm:flex-row">
						<a
							href="/assets/cv-muhamad-rifki-saputra.pdf"
							target="_blank"
							class="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
						>
							<span>Download CV</span>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-y-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
									points="7 10 12 15 17 10"
								/><line x1="12" y1="15" x2="12" y2="3" /></svg
							>
						</a>

						<a
							href="mailto:work@ripki.me"
							class="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
						>
							<span>Send an Email</span>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								><path
									d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
								/><polyline points="22,6 12,13 2,6" /></svg
							>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- footer -->
	<footer
		class="mt-32 border-t border-gray-200 bg-gray-50/30 py-12 backdrop-blur-sm dark:border-gray-800 dark:bg-zinc-900/30"
	>
		<div
			class="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-10 px-4 sm:flex-row sm:gap-6"
		>
			<div class="flex flex-col items-center text-center sm:items-start sm:text-left">
				<p class="text-sm font-medium text-gray-900 dark:text-gray-200">
					&copy; 2025 Muhamad Rifki Saputra.
				</p>

				<p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
					Built with
					<a
						href="https://svelte.dev"
						target="_blank"
						class="font-medium text-gray-700 hover:text-orange-600 hover:underline dark:text-gray-300 dark:hover:text-orange-400"
						>Svelte</a
					>,
					<a
						href="https://tailwindcss.com"
						target="_blank"
						class="font-medium text-gray-700 hover:text-blue-600 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
						>Tailwind</a
					>
					&
					<span class="text-red-500">♥</span>
				</p>

				<div class="mt-6 flex gap-5">
					<a
						href="https://github.com/ripkime"
						target="_blank"
						aria-label="GitHub"
						title="GitHub"
						class="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
					>
						<Github />
					</a>

					<a
						href="https://instagram.com/ripkime"
						target="_blank"
						aria-label="Instagram"
						title="Instagram"
						class="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
					>
						<Instagram />
					</a>

					<a
						href="https://t.me/ripkime"
						target="_blank"
						aria-label="Telegram"
						title="Telegram"
						class="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
					>
						<Telegram />
					</a>

					<a
						href="https://youtube.com/@ripkime"
						target="_blank"
						aria-label="YouTube"
						title="YouTube"
						class="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
					>
						<Youtube />
					</a>
				</div>

				<div class="mt-6 flex gap-6 text-xs font-medium text-gray-500">
					<a href="/" class="transition hover:text-gray-900 dark:hover:text-white">Home</a>
					<a href="/projects" class="transition hover:text-gray-900 dark:hover:text-white"
						>Projects</a
					>
					<a href="/blog" class="transition hover:text-gray-900 dark:hover:text-white">Blog</a>
				</div>
			</div>

			<div class="flex flex-col items-center sm:items-end">
				<Signature />

				<span class="mt-2 text-[10px] tracking-widest text-gray-400 uppercase">
					Jakarta, Indonesia
				</span>
			</div>
		</div>
	</footer>
</div>
