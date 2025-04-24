<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		children,
		class: importedClass = '', // using 'class' as a prop name to avoid conflict with Svelte's built-in class attribute since restProps.class will override it
		...restProps
	} = $props<{
		children: Snippet;
		class?: string;
		[key: string]: any;
	}>();
</script>

<h3 class={cn('text-lg font-semibold leading-none tracking-tight', importedClass)} {...restProps}>
	{@render children()}
</h3>
