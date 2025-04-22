<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<div class={cn('py-4', $$props.class)} {...$$restProps}>
	<slot />
</div> 