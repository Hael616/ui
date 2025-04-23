<script lang="ts">
	import { cn } from '$lib/utils';
	import { type Snippet } from 'svelte';

	let uid = $props.id();
	let { name, children, ...restProps } = $props<{
		name?: string;
		children: Snippet;
		[key: string]: any;
	}>();
</script>

<form
	id="form-{uid}"
	name={name ? name + '-' + uid : 'form-' + uid}
	class={cn('space-y-6', restProps?.class)}
	{...restProps}
>
	{@render children()}
</form>
