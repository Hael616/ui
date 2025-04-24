<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '.';

	const { Story } = defineMeta({
		title: 'Card',
		component: Card,
		tags: ['autodocs']
	});
</script>

<Story name="Default" args={{ id: 'defaultCard' }}>
	{#snippet children(args)}
		<Card {...args}>This is a default card</Card>
	{/snippet}
</Story>

<Story name="Card with header and desc" args={{ id: 'cardWithHeader', class: 'max-w-3xl' }}>
	{#snippet children(args)}
		<Card {...args}>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here</CardDescription>
			</CardHeader>
		</Card>
	{/snippet}
</Story>

<Story name="Card with content" args={{ id: 'cardWithContent', class: 'max-w-3xl' }}>
	{#snippet children(args)}
		<Card {...args}>
			<CardHeader>
				<CardTitle>Card with content</CardTitle>
			</CardHeader>
			<CardContent>
				<p>This is the main content of the card. It can contain any element.</p>
			</CardContent>
		</Card>
	{/snippet}
</Story>

<Story name="Card with footer" args={{ id: 'cardWithFooter', class: 'max-w-3xl' }}>
	{#snippet children(args)}
		<Card {...args}>
			<CardHeader>
				<CardTitle>Card with footer</CardTitle>
			</CardHeader>

			<CardFooter>
				<p>This part is the lowest part of the card; for extra information</p>
			</CardFooter>
		</Card>
	{/snippet}
</Story>

<Story name="Composite Card" args={{ id: 'compositeCard', class: 'max-w-3xl' }}>
	{#snippet children(args)}
		<Card {...args}>
			<CardHeader>
				<CardTitle>Composite card</CardTitle>
				<CardDescription>This is a composite card made with card</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This is the main content of the card. It can contain any element.</p>
			</CardContent>
			<CardFooter>
				<p>This part is the lowest part of the card; for extra information</p>
			</CardFooter>
		</Card>
	{/snippet}
</Story>
