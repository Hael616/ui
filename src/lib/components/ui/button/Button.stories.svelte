<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import { fn, userEvent, within } from '@storybook/test';
	import { Button } from './index';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			type: {
				control: { type: 'select' },
				options: ['button', 'submit', 'reset']
			},
			variant: {
				control: { type: 'select' },
				options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
			},

			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			},
			onpress: {
				action: 'clicked'
			}
		},
		play: async ({ canvasElement }) => {
			const canvas = within(canvasElement);
			const button = await canvas.getByRole('button', { name: /button/i });
			await userEvent.click(button);
		},
		parameters: {
			actions: {
				handles: ['press']
			}
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->

{#snippet children()}
	Button
{/snippet}

<Story name="Default" args={{ type: 'button', children }} />
<Story name="Destructive" args={{ type: 'button', variant: 'destructive', children }} />
<Story name="Outline" args={{ type: 'button', variant: 'outline', children }} />
<Story name="Secondary" args={{ type: 'button', variant: 'secondary', children }} />
<Story name="Ghost" args={{ type: 'button', variant: 'ghost', children }} />
<Story name="Link" args={{ type: 'button', variant: 'link', children }} />
<Story name="Small" args={{ type: 'button', size: 'sm', children }} />
<Story name="Large" args={{ type: 'button', size: 'lg', children }} />
<Story name="Icon" args={{ type: 'button', size: 'icon', children }} />
<Story name="Disabled" args={{ type: 'button', disabled: true, children }} />
<Story
	name="Loading"
	args={{ type: 'button', variant: 'secondary', class: 'text-red-500', loading: true, children }}
/>
