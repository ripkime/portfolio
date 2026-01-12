<script>
	import { fly } from 'svelte/transition';

	// Mock Data (Nanti diganti dengan data dari CMS/Markdown files)
	let projects = [
		{
			title: "Piggy Tracker",
			category: "Mobile App",
			image: "/assets/images/piggy.webp",
			year: "2024",
			slug: "piggy-tracker",
			featured: true // Item besar
		},
		{
			title: "Verifido",
			category: "Machine Learning",
			image: "/assets/images/verifido.webp",
			year: "2025",
			slug: "verifido",
			featured: false
		},
		{
			title: "Ripki.me v3",
			category: "Web Design",
			image: "/assets/images/ripki.webp",
			year: "2025",
			slug: "ripki-me",
			featured: false
		},
		{
			title: "Go-Commerce",
			category: "Backend",
			image: "/assets/images/backend.webp",
			year: "2023",
			slug: "go-commerce",
			featured: false
		}
	];

	// State untuk Filter
	let activeFilter = $state('All');
	const filters = ['All', 'Mobile App', 'Web Design', 'Backend', 'Machine Learning'];

	// Derived state untuk filtering
	let filteredProjects = $derived(
		activeFilter === 'All' 
			? projects 
			: projects.filter(p => p.category === activeFilter)
	);
</script>

<svelte:head>
	<title>Projects — Muhamad Rifki</title>
</svelte:head>

<section class="min-h-screen w-full px-6 pt-32 pb-20">
	<div class="container mx-auto max-w-6xl">
		
		<!-- Header -->
		<div class="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
			<div class="max-w-2xl">
				<h1 class="font-heading text-4xl font-bold tracking-tighter text-zinc-900 sm:text-6xl dark:text-white">
					Selected Works
				</h1>
				<p class="mt-6 text-xl font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
					A curation of digital products, experiments, and open source contributions.
				</p>
			</div>

			<!-- Filter Pills -->
			<div class="flex flex-wrap gap-2">
				{#each filters as filter}
					<button
						onclick={() => activeFilter = filter}
						class="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300
						{activeFilter === filter 
							? 'border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900' 
							: 'border-zinc-200 bg-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white'}"
					>
						{filter}
					</button>
				{/each}
			</div>
		</div>

		<!-- Gallery Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project (project.slug)}
				<!-- 
					Logic Layout: 
					Jika 'featured', dia mengambil 2 kolom (md:col-span-2).
					Ini membuat grid terlihat dinamis (Bento style).
				-->
				<div 
					in:fly={{ y: 20, duration: 600 }}
					class="group relative flex flex-col gap-4 {project.featured ? 'md:col-span-2' : 'col-span-1'}"
				>
					<a href="/projects/{project.slug}" class="block overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
						<div class="relative aspect-16/10 w-full overflow-hidden">
							<!-- Inner Border -->
							<div class="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
							
							<!-- Image -->
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
							/>

							<!-- Overlay Text (Visible on Hover for "Luxury" feel) -->
							<div class="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
								<span class="rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-black backdrop-blur-md">
									View Case Study
								</span>
							</div>
						</div>
					</a>

					<div class="flex items-start justify-between px-1">
						<div>
							<h3 class="font-heading text-xl font-semibold text-zinc-900 dark:text-white">
								{project.title}
							</h3>
							<span class="text-sm text-zinc-500 dark:text-zinc-400">{project.category}</span>
						</div>
						<span class="font-mono text-xs text-zinc-400">{project.year}</span>
					</div>
				</div>
			{/each}
		</div>

	</div>
</section>