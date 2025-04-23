<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Input } from './index';

	const { Story } = defineMeta({
		title: 'Input',
		component: Input,
		tags: ['autodocs'],
		argTypes: {
			type: {
				control: { type: 'select' },
				options: ['text', 'email', 'password', 'number']
			},

			disabled: {
				control: { type: 'boolean' }
			},

			readonly: {
				control: { type: 'boolean' }
			},
			required: {
				control: { type: 'boolean' }
			},
			error: {
				control: { type: 'text' }
			},
			placeholder: {
				control: { type: 'text' }
			}
		}
	});
</script>

<Story name="Default" args={{ type: 'text', placeholder: 'Default input' }} />
<Story name="Disabled" args={{ type: 'text', disabled: true, placeholder: 'Disabled input' }} />
<Story name="Readonly" args={{ type: 'text', readonly: true, placeholder: 'Readonly input' }} />
<Story
	name="With Error"
	args={{ type: 'text', error: 'This field is required', placeholder: 'With error' }}
/>
<Story name="With Label" args={{ type: 'text', placeholder: 'Input with label' }} />
<Story
	name="With Description"
	args={{
		type: 'text',
		placeholder: 'Input with description',
		description: 'This is a helpful description'
	}}
/>
<Story
	name="Required Field"
	args={{ type: 'text', placeholder: 'Required field', required: true }}
/>
