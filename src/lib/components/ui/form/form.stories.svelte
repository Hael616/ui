<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Form, FormField } from '.';
	import { Button, Card } from '..';

	const { Story } = defineMeta({
		title: 'Form',
		component: Form,
		tags: ['autodocs']
	});
</script>

<Story name="Default" args={{ id: 'defaultForm', class: 'border-2 max-w-3xl p-5' }}>
	{#snippet children(args)}
		<Form {...args}>This is a default form</Form>
	{/snippet}
</Story>

<Story
	name="Form fields"
	args={{ id: 'formFields', class: 'border-2 max-w-3xl grid grid-cols gap-5 p-5' }}
>
	{#snippet children(args)}
		<Form {...args}>
			<FormField
				id="defaultFormField"
				label="Default form field"
				placeholder="Default form field"
			/>
			<FormField
				id="descriptionField"
				label="Form field with description"
				description="This is a form field with description"
				placeholder="Form field with description"
			/>
			<FormField id="requiredField" label="Required field" required placeholder="Required field" />

			<FormField
				id="errorFormField"
				label="Error input"
				error="This is an error"
				placeholder="Error input"
			/>
		</Form>
	{/snippet}
</Story>

<Story name="Composite form" args={{ id: 'compositeForm', class: 'border-2 max-w-3xl p-5' }}>
	{#snippet children(args)}
		<Form {...args}>
			<Card.Card>
				<Card.CardHeader>
					<Card.CardTitle>Composite form</Card.CardTitle>
					<Card.CardDescription>This is a composite form made with card</Card.CardDescription>
				</Card.CardHeader>
				<Card.CardContent>
					<div class="grid grid-cols-2 gap-4">
						<FormField id="firstName" label="First name" placeholder="First name" required />

						<FormField id="lastName" label="Last name" placeholder="Last name" required />
					</div>

					<FormField id="email" label="Email" placeholder="johndoe@gmail.com" required />

					<FormField id="password" label="Password" placeholder="Password" required />

					<FormField
						id="confirmPassword"
						label="Confirm password"
						placeholder="Confirm password"
						required
					/>

					<div class="pt-2">
						<Button type="submit" class="w-full">Create account</Button>
					</div>
				</Card.CardContent>
				<Card.CardFooter class="flex justify-center">
					<p class="text-sm text-muted-foreground">
						For extras like this:
						<span class="text-primary underline-offset-4 hover:underline"
							>Sign in or forgot password</span
						>
					</p>
				</Card.CardFooter>
			</Card.Card>
		</Form>
	{/snippet}
</Story>
