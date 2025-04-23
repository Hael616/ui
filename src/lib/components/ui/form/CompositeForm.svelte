<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { Card, Form } from '..';

	let {
		children,
		title,
		description,
		class: importedClass = '',
		footerContent,
		styles = {
			wrapper: '',
			header: '',
			title: '',
			description: '',
			content: '',
			footer: ''
		},
		...restProps
	} = $props<{
		children: Snippet;
		title: string;
		description: string;
		class?: string;
		footerContent: Snippet;
		styles?: {
			wrapper?: string;
			header?: string;
			title?: string;
			description?: string;
			content?: string;
			footer?: string;
		};
		[key: string]: any;
	}>();
</script>

<Form class={importedClass} {...restProps}>
	<Card.Card class={styles?.wrapper}>
		<Card.CardHeader class={styles?.header}>
			<Card.CardTitle class={styles?.title}>{title}</Card.CardTitle>
			<Card.CardDescription class={styles?.description}>{description}</Card.CardDescription>
		</Card.CardHeader>
		<Card.CardContent class={styles?.content}>
			{@render children()}
		</Card.CardContent>
		<Card.CardFooter class={cn('flex justify-center ', styles?.footer)}>
			*{@render footerContent()}
		</Card.CardFooter>
	</Card.Card>
</Form>
