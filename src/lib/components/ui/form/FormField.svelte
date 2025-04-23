<script lang="ts">
	import { cn } from '$lib/utils';

	import { Input } from '../input';

	let {
		id,
		label,
		description,
		error = $bindable(null),
		value = $bindable(''),
		placeholder = '',

		...restProps
	} = $props<{
		id: string;
		label: string;
		value?: string;
		placeholder: string;
		description?: string;
		error?: string | null | undefined;

		[key: string]: any;
	}>();

	let uid = $props.id();
</script>

<div id="field-{uid}" class="space-y-2">
	{#if label}
		<label
			{id}
			for={id}
			class={cn(
				'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
				error ? 'text-destructive' : '',
				restProps?.class
			)}
			aria-labelledby={id}
		>
			{label}
			{#if restProps?.required}
				<span class="ml-1 text-destructive">*</span>
			{/if}
		</label>
	{/if}

	<Input {id} bind:value {placeholder} bind:error {...restProps} />

	{#if description && !error}
		<p class="text-sm text-muted-foreground">{description}</p>
	{/if}

	{#if error}
		<p class="text-sm text-destructive">{error}</p>
	{/if}
</div>
