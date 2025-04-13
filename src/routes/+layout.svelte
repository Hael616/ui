<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Toasts from '$lib/components/ui/toasts.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<header class="border-b border-border">
		<div class="container mx-auto flex h-16 items-center px-4 sm:px-6">
			<nav class="flex items-center gap-6 text-sm">
				<a
					href="/"
					class="font-medium transition-colors hover:opacity-80 {$page.url.pathname === '/'
						? 'text-foreground'
						: 'text-foreground/60'}"
				>
					Home
				</a>
				<a
					href="/components"
					class="font-medium transition-colors hover:opacity-80 {$page.url.pathname ===
					'/components'
						? 'text-foreground'
						: 'text-foreground/60'}"
				>
					Components
				</a>
				<a
					href="/form-example"
					class="font-medium transition-colors hover:opacity-80 {$page.url.pathname ===
					'/form-example'
						? 'text-foreground'
						: 'text-foreground/60'}"
				>
					Form Example
				</a>
			</nav>

			<div class="flex flex-1 items-center justify-end gap-2">
				<a
					href="https://github.com/ibrahimraimi/ui"
					target="_blank"
					rel="noreferrer"
					class="font-medium text-foreground/60 transition-colors hover:opacity-80"
				>
					GitHub
				</a>
			</div>
		</div>
	</header>

	<main class="flex-1 bg-background">
		<slot />
	</main>

	<footer class="border-t border-border py-6">
		<div class="container mx-auto flex justify-center px-4 sm:px-6">
			<p class="text-sm text-foreground/60">
				&copy; {new Date().getFullYear()} hash/ui. All rights reserved.
			</p>
		</div>
	</footer>

	<Toasts position="bottom-right" />
</div>
