<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<main class="bg-background min-h-screen flex flex-col items-center">
	{@render children()}
</main>
