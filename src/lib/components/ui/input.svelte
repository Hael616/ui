<script lang="ts">
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let type: string = 'text';
	export let value: string = '';
	export let placeholder: string = '';
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let error: string | null = null;
	export let id: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let required: boolean = false;

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
		dispatch('input', { value });
	}

	function handleChange(event: Event) {
		dispatch('change', { value });
	}
</script>

<div class="w-full">
	<input
		{id}
		{name}
		{type}
		{value}
		{placeholder}
		{disabled}
		{readonly}
		{required}
		on:input={handleInput}
		on:change={handleChange}
		class={cn(
			'flex h-10 w-full rounded-md border px-3 py-2 text-sm',
			'border-input bg-background',
			'placeholder:text-muted-foreground',
			'file:border-0 file:bg-transparent file:text-sm file:font-medium',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
			'disabled:cursor-not-allowed disabled:opacity-50',
			error && 'border-destructive focus-visible:ring-destructive',
			$$props.class
		)}
		{...$$restProps}
	/>
	{#if error}
		<p class="mt-1 text-sm text-destructive">{error}</p>
	{/if}
</div>
