<script lang="ts">
	import { cn } from '$lib/utils';
	import { Toast, Toasts, type ToastPosition } from './index.ts';

	let {
		position = 'bottom-center',
		class: importedClass = '',
		...restProps
	} = $props<{ position: ToastPosition }>();

	const positionClasses: Record<ToastPosition, string> = {
		'top-left': 'top-0 left-0',
		'top-right': 'top-0 right-0',
		'bottom-left': 'bottom-0 left-0',
		'bottom-right': 'bottom-0 right-0',
		'top-center': 'top-0 left-1/2 -translate-x-1/2',
		'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2'
	};

	function handleClose(id: string) {
		Toasts.remove(id);
	}
</script>

<div
	class={cn(
		'fixed z-50 flex w-full max-w-md flex-col gap-2 p-4 sm:p-6 md:max-w-lg',
		positionClasses[position],
		importedClass
	)}
	{...restProps}
>
	{#each Toasts.toasts as toast (toast.id)}
		<Toast
			type={toast.type}
			title={toast.title}
			description={toast.description}
			duration={toast.duration ?? 5000}
			closable={toast.closable ?? true}
			close={() => handleClose(toast.id)}
		/>
	{/each}
</div>
