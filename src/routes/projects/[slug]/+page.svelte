<script>
	// Props dari load function (SvelteKit)
	// data.content adalah HTML string hasil compile Markdown
	// data.meta adalah frontmatter (title, stack, link, dll)
	let { data } = $props(); 
</script>

<svelte:head>
	<title>{data.meta.title} — Project Case Study</title>
</svelte:head>

<article class="min-h-screen w-full bg-white pb-32 dark:bg-black">
	
	<!-- 1. Hero Section -->
	<header class="container mx-auto max-w-5xl px-6 pt-32 md:pt-40">
		<div class="flex flex-col gap-8">
			<!-- Breadcrumb -->
			<a href="/projects" class="group flex w-fit items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
				<svg class="size-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
				Back to Projects
			</a>

			<h1 class="font-heading text-5xl font-bold tracking-tighter text-zinc-900 sm:text-7xl md:text-8xl dark:text-white">
				{data.meta.title}
			</h1>
			
			<p class="max-w-2xl text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
				{data.meta.description}
			</p>
		</div>
	</header>

	<!-- 2. Cinematic Hero Image -->
	<div class="mt-16 w-full px-4 md:px-6">
		<div class="container mx-auto max-w-6xl overflow-hidden rounded-3xl bg-zinc-100 shadow-2xl dark:bg-zinc-900">
			<img 
				src={data.meta.coverImage} 
				alt="Cover of {data.meta.title}" 
				class="aspect-video w-full object-cover"
			/>
		</div>
	</div>

	<!-- 3. Content Layout (Grid) -->
	<div class="container mx-auto mt-20 max-w-5xl px-6">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
			
			<!-- Sidebar: Project Details (Sticky) -->
			<aside class="lg:col-span-4">
				<div class="sticky top-32 flex flex-col gap-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
					
					{#snippet detailItem(label, value)}
						<div class="flex flex-col gap-1">
							<span class="font-mono text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{label}</span>
							<span class="text-base font-medium text-zinc-900 dark:text-white">{value}</span>
						</div>
					{/snippet}

					{@render detailItem('Role', data.meta.role)}
					{@render detailItem('Timeline', data.meta.year)}
					
					<div class="flex flex-col gap-2">
						<span class="font-mono text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Tech Stack</span>
						<div class="flex flex-wrap gap-2">
							{#each data.meta.stack as tech}
								<span class="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
									{tech}
								</span>
							{/each}
						</div>
					</div>

					<div class="h-px w-full bg-zinc-200 dark:bg-zinc-700"></div>

					{#if data.meta.link}
						<a 
							href={data.meta.link} 
							target="_blank"
							class="group flex items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
						>
							Visit Live Site
							<svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
						</a>
					{/if}
				</div>
			</aside>

			<!-- Main Content: Markdown Render -->
			<div class="lg:col-span-8">
				<!-- 
					Class 'prose' dari @tailwindcss/typography.
					Kita custom habis-habisan di CSS agar terlihat 'Luxury'.
				-->
				<div class="prose prose-lg prose-zinc dark:prose-invert max-w-none 
					prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight 
					prose-p:font-light prose-p:leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-400
					prose-a:font-medium prose-a:text-zinc-900 prose-a:underline prose-a:decoration-zinc-300 prose-a:underline-offset-4 hover:prose-a:decoration-zinc-900 dark:prose-a:text-white dark:prose-a:decoration-zinc-600 dark:hover:prose-a:decoration-white
					prose-img:rounded-xl prose-img:shadow-lg prose-img:ring-1 prose-img:ring-black/5
					prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:font-medium prose-code:text-zinc-800 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-zinc-800 dark:prose-code:text-zinc-200">
					
					<!-- Render HTML dari Markdown -->
					{@html data.content}
				
				</div>
			</div>

		</div>
	</div>

	<!-- Next Project Navigation -->
	<div class="container mx-auto mt-32 max-w-5xl px-6">
		<div class="border-t border-zinc-200 pt-12 dark:border-zinc-800">
			<span class="mb-4 block font-mono text-xs font-medium uppercase tracking-wider text-zinc-400">Next Project</span>
			<a href="/projects/next-slug" class="group inline-flex items-center gap-4">
				<h2 class="font-heading text-3xl font-bold text-zinc-900 transition-colors group-hover:text-zinc-600 sm:text-5xl dark:text-white dark:group-hover:text-zinc-400">
					Verifido Mobile App
				</h2>
				<svg class="size-8 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
			</a>
		</div>
	</div>
</article>