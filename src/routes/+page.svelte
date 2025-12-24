<script>
	import { tech_stack } from '$lib/constants';
</script>

<div class="container mx-auto max-w-4xl px-4 md:mt-20">
	<!-- hero -->
	<section class="px-4 pt-20">
		<div class="container mx-auto max-w-4xl">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-12">
				<div class="flex flex-col gap-6 text-sm md:col-span-3">
					<div
						class="flex w-full flex-row-reverse items-center justify-between gap-4 md:flex-col md:items-start md:gap-8"
					>
						<div
							class="group relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-24 sm:w-24 md:h-40 md:w-40 dark:bg-zinc-800"
						>
							<img
								alt="Foto Ripki"
								src="./assets/images/ripki.webp"
								class="h-full w-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
							/>
						</div>

						<div class="flex flex-col gap-4">
							<div>
								<span class="mb-1 block font-heading font-bold text-gray-900 dark:text-white">
									Role
								</span>
								<span class="font-medium text-gray-500 dark:text-gray-400"> Full Stack Dev </span>
							</div>

							<div>
								<span class="mb-1 block font-heading font-bold text-gray-900 dark:text-white">
									Location
								</span>
								<span class="font-medium text-gray-500 dark:text-gray-400"> Jakarta, ID </span>
							</div>

							<div class="flex items-center gap-2 font-medium text-green-600 dark:text-green-400">
								<span class="relative flex h-2 w-2">
									<span
										class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
									></span>
									<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
								</span>
								Open to Work
							</div>
						</div>
					</div>
				</div>

				<div class="md:col-span-9">
					<h1
						class="font-heading text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl md:text-7xl dark:text-white"
					>
						Muhamad Rifki. S
					</h1>

					<p
						class="mt-8 text-xl leading-relaxed font-light text-gray-600 md:text-2xl dark:text-gray-300"
					>
						I engineer robust systems behind the scenes and craft fluid interfaces on the screen.
						Currently obsessed with <span
							class="font-medium text-gray-900 underline decoration-1 underline-offset-4 dark:text-white"
							>Go performance</span
						>.
					</p>

					<div class="mt-12 flex items-center gap-6">
						<a
							href="#projects"
							class="text-lg font-medium text-black underline-offset-4 hover:underline dark:text-white"
						>
							See Selected Work
						</a>
						<span class="text-gray-300">/</span>
						<a
							href="mailto:work@ripki.me"
							class="text-lg font-medium text-gray-500 hover:text-black dark:hover:text-white"
						>
							Get in Touch
						</a>
					</div>
				</div>
			</div>

			<div class="mt-8 h-px w-full bg-gray-200 dark:bg-gray-800"></div>
		</div>
	</section>

	<!-- project -->
	<section class="px-4 pt-32" id="projects">
		<div class="container mx-auto max-w-4xl">
			<div
				class="mb-16 flex items-center justify-between space-x-7 border-b border-gray-200 pb-6 dark:border-gray-800"
			>
				<div>
					<h2 class="font-heading text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
						Latest Work
					</h2>
					<p class="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">
						A selection of projects I've built with my favourite stack.
					</p>
				</div>

				<a
					href="/projects"
					class="group flex items-center gap-2 text-sm font-medium text-gray-900 transition hover:text-black dark:text-white dark:hover:text-gray-300"
				>
					View All
					<svg
						class="h-4 w-4 transition-transform group-hover:translate-x-1"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg
					>
				</a>
			</div>

			<div class="grid gap-x-12 gap-y-16 sm:grid-cols-2">
				<article class="group cursor-pointer">
					<div
						class="relative mb-6 overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl dark:bg-zinc-800"
					>
						<div
							class="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/5"
						></div>

						<img
							src="/assets/images/piggy-tracker-screenshot.png"
							alt="Piggy Tracker App screenshot"
							class="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						/>
					</div>

					<div class="flex flex-col gap-3">
						<div class="flex items-center justify-between">
							<h3 class="font-heading text-2xl font-bold text-gray-900 dark:text-white">
								<a href="#s" class="relative">
									Piggy Tracker
									<span
										class="absolute -bottom-1 left-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full dark:bg-white"
									></span>
								</a>
							</h3>
							<svg
								class="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"><path d="M7 17L17 7M7 7h10v10" /></svg
							>
						</div>

						<p class="text-base leading-relaxed font-light text-gray-600 dark:text-gray-400">
							Money tracking app powered by Laravel. Keep track of income and expense, with category
							emoji.
						</p>

						<div
							class="mt-2 flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-500"
						>
							<span>Laravel</span>
							<span class="h-1 w-1 rounded-full bg-gray-300 dark:bg-zinc-700"></span>
							<span>Flutter</span>
							<span class="h-1 w-1 rounded-full bg-gray-300 dark:bg-zinc-700"></span>
							<span>React</span>
							<span class="h-1 w-1 rounded-full bg-gray-300 dark:bg-zinc-700"></span>
							<span>MySQL</span>
						</div>
					</div>
				</article>

				<article class="group cursor-pointer">
					<div
						class="relative mb-6 overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl dark:bg-zinc-800"
					>
						<div
							class="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/5"
						></div>

						<img
							src="/assets/images/ripki-me-screenshot.png"
							alt="Ripki.me Screenshot"
							class="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						/>
					</div>

					<div class="flex flex-col gap-3">
						<div class="flex items-center justify-between">
							<h3 class="font-heading text-2xl font-bold text-gray-900 dark:text-white">
								<a href="#s" class="relative">
									ripki.me
									<span
										class="absolute -bottom-1 left-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full dark:bg-white"
									></span>
								</a>
							</h3>
							<svg
								class="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"><path d="M7 17L17 7M7 7h10v10" /></svg
							>
						</div>

						<p class="text-base leading-relaxed font-light text-gray-600 dark:text-gray-400">
							A modern personal website built for performance. 100/100 Lighthouse score.
						</p>

						<div
							class="mt-2 flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-500"
						>
							<span>Svelte</span>
							<span class="h-1 w-1 rounded-full bg-gray-300 dark:bg-zinc-700"></span>
							<span>Tailwind</span>
							<span class="h-1 w-1 rounded-full bg-gray-300 dark:bg-zinc-700"></span>
							<span>Vercel</span>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>

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
</div>
