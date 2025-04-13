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
				'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
				error && 'text-destructive',
				$$props.labelClass
			)}
		>
			{label}
			{#if required}
				<span class="ml-1 text-destructive">*</span>
			{/if}
		</label>
	{/if}

	<slot />

	{#if description && !error}
		<p class="text-sm text-muted-foreground">{description}</p>
	{/if}

	{#if error}
		<p class="text-sm text-destructive">{error}</p>
	{/if}
</div>
