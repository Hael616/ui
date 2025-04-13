<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<div
	class={cn('rounded-lg border shadow-sm', 'bg-card text-card-foreground', $$props.class)}
	{...$$restProps}
>
	<slot />
</div>
