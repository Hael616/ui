<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Toast } from '.';
	import { userEvent, within } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'Components/Toasts',
		component: Toast,
		tags: ['autodocs'],
		play: async ({ canvasElement }) => {
			const canvas = within(canvasElement);

			await userEvent.click(canvas.getByRole('button'));
		}
	});
</script>

<Story
	name="Default toast"
	args={{
		title: 'Default toast',
		description: 'This is what a default toast looks like',
		close: () => console.log('closing')
	}}
/>

<Story
	name="Success toast"
	args={{
		title: 'Success toast',
		description: 'This is what a success toast looks like',
		type: 'success'
	}}
/>
<Story
	name="Error toast"
	args={{
		title: 'Error toast',
		description: 'This is what an error toast looks like',
		type: 'error'
	}}
/>
<Story
	name="Warning toast"
	args={{
		title: 'Warning toast',
		description: 'This is what a warning toast looks like',
		type: 'warning'
	}}
/>
<Story
	name="Info toast"
	args={{
		title: 'Info toast',
		description: 'This is what an info toast looks like',
		type: 'info'
	}}
/>
