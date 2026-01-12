<script lang="ts">
	import { type MainStack, type SupportStack, tech_stack } from '$lib/constants';
</script>

<section class="w-full px-4 pt-20" id="tech-stack">
	<div class="container mx-auto max-w-5xl">
		
		<!-- Header -->
		<div class="mb-16">
			<h2 class="font-heading text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
				The Arsenal
			</h2>
			<p class="mt-4 max-w-2xl text-lg font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
				My preferred weapons of choice for building scalable backends and fluid user interfaces.
			</p>
		</div>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
			{#each tech_stack[0].mainStack as item}
				{@render mainCard(item)}
			{/each}

			{#each tech_stack[0].supportStack as item}
				{@render supportCard(item)}
			{/each}

		</div>
	</div>
</section>

<!-- snippet main card -->
{#snippet mainCard(item: MainStack)}
	{@const Icon = item.icon}
	<div
		class="group relative col-span-2 overflow-hidden rounded-2xl bg-zinc-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/50"
		style="--brand-color: {item.color}"
	>
		<div
			class="absolute -top-10 -right-10 size-40 rounded-full bg-(--brand-color) opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20 dark:group-hover:opacity-15"
		></div>

		<div
			class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-zinc-200 transition-colors ring-inset group-hover:ring-(--brand-color)/30 dark:ring-zinc-800"
		></div>

		<div class="relative z-10 flex items-start gap-5">
			<div
				class="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-zinc-100 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md dark:bg-zinc-800 dark:ring-zinc-700"
			>
				<Icon />
			</div>

			<div class="flex flex-col pt-1">
				<h3
					class="font-heading text-lg font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-(--brand-color) dark:text-white"
				>
					{item.title}
				</h3>
				<p class="text-sm font-medium text-zinc-500 dark:text-zinc-400">
					{item.subtitle}
				</p>
			</div>
		</div>
	</div>
{/snippet}

<!-- snippet support card -->
 {#snippet supportCard(item:SupportStack)}
 {@const Icon = item.icon}
	<div 
		class="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-zinc-50 py-8 transition-all duration-300 hover:bg-white hover:shadow-md dark:bg-zinc-900/50 dark:hover:bg-zinc-800"
		style="--brand-color: {item.color}"
	>
		<div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 transition-colors group-hover:ring-(--brand-color)/20"></div>

		<!-- Icon -->
		<div class="transition-transform duration-300 group-hover:scale-110">
            <Icon/>
		</div>

		<span class="font-heading text-sm font-semibold text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white">
			{item.title}
		</span>
	</div>
{/snippet}
