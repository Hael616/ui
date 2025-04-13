<script lang="ts">
	import { cn } from '$lib/utils';

	export let id: string;
	export let label: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let error: string | null = null;
	export let required: boolean = false;
</script>

<div class="space-y-2">
	{#if label}
		<label
			for={id}
			class={cn(
				'text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
				error && 'text-destructive',
				$$props.labelClass
			)}
		>
			{label}
			{#if required}
				<span class="text-destructive ml-1">*</span>
			{/if}
		</label>
	{/if}

	<slot />

	{#if description && !error}
		<p class="text-muted-foreground text-sm">{description}</p>
	{/if}

	{#if error}
		<p class="text-destructive text-sm">{error}</p>
	{/if}
</div>
