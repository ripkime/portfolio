<script lang="ts">
    let projects = [
		{
			title: "Piggy Tracker",
			description: "Money tracking app powered by Laravel. Keep track of income and expense, with category emoji.",
			image: "/assets/images/piggy-tracker-screenshot.png",
			stack: ["Laravel", "Flutter", "React", "MySQL"],
			link: "#piggy",
			year: "2024"
		},
		{
			title: "ripki.me",
			description: "A modern personal website built for performance. 100/100 Lighthouse score and fluid animations.",
			image: "/assets/images/ripki-me-screenshot.png",
			stack: ["Svelte 5", "Tailwind 4", "Vercel"],
			link: "#ripki",
			year: "2025"
		}
	];
</script>

<section class="w-full px-4 pt-20" id="project-section">
	<div class="container mx-auto max-w-5xl">
		<!-- header -->
		<div class="mb-20 flex flex-col justify-between gap-8 border-b border-zinc-200 pb-8 md:flex-row md:items-end dark:border-zinc-800">
			<div class="max-w-xl">
				<h2 class="font-heading text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
					Selected Work
				</h2>
				<p class="mt-4 text-lg font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
					A curation of digital products engineered with precision.
				</p>
			</div>

			<a
				href="/projects"
				class="group flex items-center gap-2 pb-1 text-sm font-medium text-zinc-900 transition-all hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
			>
				<span>View Archive</span>
				<svg
					class="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
				</svg>
			</a>
		</div>

		<div class="grid gap-x-10 gap-y-20 md:grid-cols-2">
			{#each projects as project}
				{@render projectCard(project)}
			{/each}
		</div>
	</div>
</section>

{#snippet projectCard(project:any)}
	<article class="group flex flex-col gap-6">
		<a 
			href={project.link} 
			class="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
		>
			<div class="pointer-events-none absolute inset-0 z-20 rounded-lg ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
			
			<div class="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 ease-out group-hover:bg-black/5 dark:group-hover:bg-white/5"></div>

			<img
				src={project.image}
				alt="{project.title} screenshot"
				class="size-full object-cover transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
			/>
		</a>

		<div class="flex flex-col gap-3">
			<div class="flex items-start justify-between gap-4">
				<div class="flex flex-col gap-1">
					<h3 class="font-heading text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
						<a href={project.link} class="flex items-center gap-2">
							{project.title}
							<svg 
								class="size-4 opacity-0 -translate-x-2 text-zinc-400 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" 
								viewBox="0 0 24 24" 
								fill="none" 
								stroke="currentColor" 
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
							</svg>
						</a>
					</h3>
					<span class="text-xs font-medium text-zinc-400 dark:text-zinc-500">{project.year}</span>
				</div>
			</div>

			<p class="line-clamp-2 text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
				{project.description}
			</p>

			<div class="mt-2 flex flex-wrap gap-2">
				{#each project.stack as tech}
					<span class="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-600 transition-colors group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:group-hover:border-zinc-700">
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</article>
{/snippet}