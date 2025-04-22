<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<h2 class={cn('text-lg font-semibold leading-none tracking-tight', $$props.class)} {...$$restProps}>
	<slot />
</h2> 