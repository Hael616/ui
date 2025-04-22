<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<div class={cn('flex flex-col space-y-1.5 text-left', $$props.class)} {...$$restProps}>
	<slot />
</div> 