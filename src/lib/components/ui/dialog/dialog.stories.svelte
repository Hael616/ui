<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { 
		Dialog, 
		DialogHeader, 
		DialogContent, 
		DialogFooter, 
		DialogTitle, 
		DialogDescription, 
		DialogClose 
	} from '.';
	import { Button } from '../button';
	import { Input } from '../input';

	const { Story } = defineMeta({
		title: 'Dialog',
		component: Dialog,
		tags: ['autodocs']
	});
</script>

<Story name="Default" args={{ open: true }}>
	{#snippet children(args)}
		<Dialog {...args}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Default Dialog</DialogTitle>
					<DialogDescription>
						This is a basic dialog with minimal content.
					</DialogDescription>
				</DialogHeader>
				<div class="py-4">
					<p>This is the content area of the dialog.</p>
				</div>
				<DialogFooter>
					<Button>Close</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	{/snippet}
</Story>

<Story name="Settings Example" args={{ open: true }}>
	{#snippet children(args)}
		<Dialog {...args}>
			<DialogContent>
				<DialogClose />
				<DialogHeader>
					<DialogTitle>Settings</DialogTitle>
					<DialogDescription>
						Manage your account settings and preferences.
					</DialogDescription>
				</DialogHeader>
				<div class="py-4 grid gap-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<label for="name" class="text-right">Name</label>
						<div class="col-span-3">
							<Input id="name" value="John Doe" />
						</div>
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<label for="username" class="text-right">Username</label>
						<div class="col-span-3">
							<Input id="username" value="@johndoe" />
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button variant="outline">Cancel</Button>
					<Button>Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	{/snippet}
</Story>

<Story name="No Outside Click" args={{ open: true, closeOnOutsideClick: false }}>
	{#snippet children(args)}
		<Dialog {...args}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Important Notice</DialogTitle>
					<DialogDescription>
						This dialog can only be closed using the buttons below.
						Clicking outside will not close it.
					</DialogDescription>
				</DialogHeader>
				<div class="py-4">
					<p>Outside clicking is disabled for this dialog. You must use the buttons to close it.</p>
				</div>
				<DialogFooter>
					<Button>Close Dialog</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	{/snippet}
</Story>

<Story name="Custom Styling" args={{ open: true, className: 'border-4 border-purple-500 rounded-xl bg-gray-50' }}>
	{#snippet children(args)}
		<Dialog {...args}>
			<DialogContent class="text-center">
				<DialogHeader>
					<DialogTitle class="text-purple-600">Custom Dialog</DialogTitle>
					<DialogDescription class="text-purple-400">
						This dialog has custom styling applied to it.
					</DialogDescription>
				</DialogHeader>
				<div class="py-4">
					<p>The dialog container has custom border and background styling.</p>
					<p>Each component can receive its own styling.</p>
				</div>
				<DialogFooter class="flex-col gap-2">
					<Button class="w-full" variant="outline">Cancel</Button>
					<Button class="w-full bg-purple-600 hover:bg-purple-700">Confirm</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	{/snippet}
</Story>

<Story name="Destructive Action" args={{ open: true }}>
	{#snippet children(args)}
		<Dialog {...args}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Account</DialogTitle>
					<DialogDescription>
						This action cannot be undone. Your account and all associated data will be permanently removed.
					</DialogDescription>
				</DialogHeader>
				<div class="py-4">
					<p>Please type "confirm" to proceed with account deletion:</p>
					<div class="mt-2">
						<Input type="text" placeholder="Type 'confirm'" />
					</div>
				</div>
				<DialogFooter>
					<Button variant="outline">Cancel</Button>
					<Button variant="destructive">Delete Account</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	{/snippet}
</Story>