<script lang="ts">
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let id: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let error: string | null = null;
	export let required: boolean = false;

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData.entries());
		dispatch('submit', { data });
	}
</script>

<form {id} {name} class={cn('space-y-6', $$props.class)} on:submit={handleSubmit} {...$$restProps}>
	<slot />
</form>
 