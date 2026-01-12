<script lang="ts">
	let posts = [
		{
			date: '2025-12-20',
			formattedDate: 'Dec 20',
			year: '2025',
			tag: 'Engineering',
			title: "Migrating from PHP to Go: A Student's Perspective",
			excerpt:
				'Why I decided to switch stack for backend development. Exploring concurrency patterns and strict typing benefits.',
			slug: '/blog/php-to-go'
		},
		{
			date: '2025-11-15',
			formattedDate: 'Nov 15',
			year: '2025',
			tag: 'System',
			title: 'Minimalist Dev Environment on Lubuntu',
			excerpt:
				'Turning an old laptop into a productivity machine. My configuration for i3wm, Alacritty, and Neovim.',
			slug: '/blog/lubuntu-setup'
		},
		{
			date: '2025-10-03',
			formattedDate: 'Oct 03',
			year: '2025',
			tag: 'Case Study',
			title: 'Fighting SMS Scams with Flutter & ML',
			excerpt:
				"A deep dive into building 'Verifido'. How we collected datasets and trained a model to detect fraud.",
			slug: '/blog/verifido-ml'
		}
	];
</script>

<section class="w-full px-4 pt-20" id="blog-section">
	<div class="container mx-auto max-w-4xl">
		<div class="flex items-end justify-between pb-6">
			<div class="max-w-lg">
				<h2 class="font-heading text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
					Writing
				</h2>
				<p class="mt-2 text-base font-light text-zinc-500 dark:text-zinc-400">
					Thoughts on software engineering, performance, and the open web.
				</p>
			</div>

			<a
				href="/blog"
				class="group hidden items-center gap-1 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 sm:flex dark:text-white dark:hover:text-zinc-300"
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

		<!-- list -->
		<div class="flex flex-col">
			{#each posts as post}
				{@render postRow(post)}
			{/each}
		</div>

		<!-- mobile view all -->
		<div class="mt-8 flex justify-center sm:hidden">
			<a href="/blog" class="text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-white">
				View Archive
			</a>
		</div>
	</div>
</section>

<!-- snippet row -->
{#snippet postRow(post: any)}
	<a
		href={post.slug}
		class="group relative grid grid-cols-1 gap-y-2 py-8 transition-all duration-500 sm:grid-cols-12 sm:gap-x-8"
	>
		<div
			class="absolute inset-x-0 top-0 h-px bg-zinc-200 transition-colors duration-500 group-hover:bg-zinc-300 dark:bg-zinc-800 dark:group-hover:bg-zinc-700"
		></div>

		<div class="flex items-center gap-3 sm:col-span-3 sm:flex-col sm:items-start sm:gap-1">
			<time
				datetime={post.date}
				class="font-mono text-xs font-medium tracking-wider text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
			>
				{post.year} / {post.formattedDate}
			</time>

			<span
				class="hidden rounded-full border border-zinc-200 px-2 py-0.5 text-[10px] font-medium text-zinc-500 sm:inline-flex dark:border-zinc-800 dark:text-zinc-400"
			>
				{post.tag}
			</span>
		</div>

		<div class="sm:col-span-9">
			<h3
				class="font-heading text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white"
			>
				{post.title}
			</h3>

			<p
				class="mt-2 max-w-2xl text-base leading-relaxed font-light text-pretty text-zinc-500 transition-colors duration-300 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300"
			>
				{post.excerpt}
			</p>

			<div
				class="mt-4 flex -translate-x-2 items-center gap-2 text-sm font-medium text-zinc-900 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-white"
			>
				<span>Read Article</span>
				<svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
					/>
				</svg>
			</div>
		</div>
	</a>
{/snippet}
