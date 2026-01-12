<script>
	import Github from '$lib/components/icons/github.svelte';
	import Instagram from '$lib/components/icons/instagram.svelte';
	import Signature from '$lib/components/icons/signature.svelte';
	import Telegram from '$lib/components/icons/telegram.svelte';
	import Youtube from '$lib/components/icons/youtube.svelte';
	import Blog from '$lib/components/landing/blog.svelte';
	import Hero from '$lib/components/landing/hero.svelte';
	import Project from '$lib/components/landing/project.svelte';
	import Resume from '$lib/components/landing/resume.svelte';
	import TechStack from '$lib/components/landing/tech_stack.svelte';
</script>

<div class="container mx-auto max-w-4xl px-4 md:mt-20">
	<!-- hero -->
	<Hero />

	<!-- project -->
	<Project />

	<!-- tech stack -->
	<TechStack />

	<!-- blog -->
	<Blog />

	<!-- resume -->
	<Resume/>

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
