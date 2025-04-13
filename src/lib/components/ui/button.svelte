<script lang="ts">
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' =
		'default';
	export let size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
	export let disabled = false;
	export let loading = false;

	const variantClassMap = {
		default: 'bg-primary text-primary-foreground hover:opacity-90',
		destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
		outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
		secondary: 'bg-secondary text-secondary-foreground hover:opacity-80',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
		link: 'text-primary underline-offset-4 hover:underline'
	};

	const sizeClassMap = {
		default: 'h-10 px-4 py-2',
		sm: 'h-9 rounded-md px-3',
		lg: 'h-11 rounded-md px-8',
		icon: 'h-10 w-10'
	};

	function handleClick(event: MouseEvent) {
		if (!disabled && !loading) {
			dispatch('click', event);
		}
	}
</script>

<button
	{type}
	class={cn(
		'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		'disabled:pointer-events-none disabled:opacity-50',
		variantClassMap[variant],
		sizeClassMap[size],
		$$props.class
	)}
	{disabled}
	on:click={handleClick}
	{...$$restProps}
>
	{#if loading}
		<span class="mr-2 animate-spin">&#9696;</span>
	{/if}
	<slot />
</button>
