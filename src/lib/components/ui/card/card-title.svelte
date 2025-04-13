<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<h3 class={cn('text-lg leading-none font-semibold tracking-tight', $$props.class)} {...$$restProps}>
	<slot />
</h3>
