<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import FormField from '$lib/components/ui/form-field.svelte';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter
	} from '$lib/components/ui/card/index';
	import {
		Dialog,
		DialogHeader,
		DialogTitle,
		DialogDescription,
		DialogContent,
		DialogFooter,
		DialogClose
	} from '$lib/components/ui/dialog/index';
	import { toasts } from '$lib/stores/toast-store';
	import { Check, X, AlertCircle, Info, AlertTriangle } from 'lucide-svelte';

	let basicDialogOpen = false;
	let formDialogOpen = false;
</script>

<div class="container mx-auto px-4 py-12 sm:px-6">
	<div class="mx-auto max-w-3xl">
		<h1 class="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl">hash/ui Components</h1>

		<section class="grid gap-8">
			<!-- Buttons -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Buttons</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					<Button>Default</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="link">Link</Button>
				</div>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<Button size="sm">Small</Button>
					<Button>Default</Button>
					<Button size="lg">Large</Button>
				</div>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<Button disabled>Disabled</Button>
					<Button loading>Loading</Button>
				</div>
			</div>

			<!-- Inputs -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Inputs</h2>
				<div class="space-y-4">
					<Input placeholder="Default input" />
					<Input placeholder="Disabled input" disabled />
					<Input placeholder="With error" error="This field is required" />
					<FormField id="with-label" label="Input with label">
						<Input id="with-label" placeholder="Input with label" />
					</FormField>
					<FormField
						id="with-description"
						label="Input with description"
						description="This is a helpful description"
					>
						<Input id="with-description" placeholder="Input with description" />
					</FormField>
					<FormField id="required-field" label="Required field" required>
						<Input id="required-field" placeholder="Required field" required />
					</FormField>
				</div>
			</div>

			<!-- Cards -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Cards</h2>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card description goes here</CardDescription>
						</CardHeader>
						<CardContent>
							<p>This is the main content of the card. It can contain any elements.</p>
						</CardContent>
						<CardFooter>
							<Button variant="outline" size="sm">Cancel</Button>
							<Button size="sm" class="ml-2">Submit</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Notification Card</CardTitle>
							<CardDescription>With interactive elements</CardDescription>
						</CardHeader>
						<CardContent>
							<p class="mb-4">
								Cards are perfect for displaying related content in a contained manner.
							</p>
							<div class="flex gap-2">
								<FormField id="card-input" label="Email">
									<Input id="card-input" placeholder="Enter email" />
								</FormField>
							</div>
						</CardContent>
						<CardFooter>
							<Button>Subscribe</Button>
						</CardFooter>
					</Card>
				</div>
			</div>

			<!-- Dialogs -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Dialogs</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<Button onclick={() => (basicDialogOpen = true)}>Open Basic Dialog</Button>
					<Button onclick={() => (formDialogOpen = true)}>Open Form Dialog</Button>
				</div>

				<!-- Basic Dialog -->
				<Dialog bind:open={basicDialogOpen}>
					<DialogClose onclick={() => (basicDialogOpen = false)} />
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>A simple dialog with basic content.</DialogDescription>
					</DialogHeader>
					<DialogContent>
						<p>
							This is a basic dialog example. Dialogs are useful for displaying content that requires
							user attention or interaction.
						</p>
					</DialogContent>
					<DialogFooter>
						<Button variant="outline" onclick={() => (basicDialogOpen = false)}>Cancel</Button>
						<Button onclick={() => (basicDialogOpen = false)}>Confirm</Button>
					</DialogFooter>
				</Dialog>

				<!-- Form Dialog -->
				<Dialog bind:open={formDialogOpen}>
					<DialogClose onclick={() => (formDialogOpen = false)} />
					<DialogHeader>
						<DialogTitle>Edit Profile</DialogTitle>
						<DialogDescription>Make changes to your profile information.</DialogDescription>
					</DialogHeader>
					<DialogContent>
						<div class="grid gap-4">
							<FormField id="dialog-name" label="Name">
								<Input id="dialog-name" placeholder="Enter your name" />
							</FormField>
							<FormField id="dialog-email" label="Email">
								<Input id="dialog-email" type="email" placeholder="Enter your email" />
							</FormField>
						</div>
					</DialogContent>
					<DialogFooter>
						<Button variant="outline" onclick={() => (formDialogOpen = false)}>Cancel</Button>
						<Button onclick={() => {
							toasts.success('Profile updated', 'Your profile has been updated successfully.');
							formDialogOpen = false;
						}}>Save Changes</Button>
					</DialogFooter>
				</Dialog>
			</div>

			<!-- Toast Notifications -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Toast Notifications</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
					<Button
						variant="default"
						onclick={() => toasts.success('Success!', 'Operation completed successfully.')}
					>
						<Check class="mr-2 h-4 w-4" /> Show Success Toast
					</Button>
					<Button
						variant="destructive"
						onclick={() => toasts.error('Error!', 'Something went wrong.')}
					>
						<X class="mr-2 h-4 w-4" /> Show Error Toast
					</Button>
					<Button
						variant="secondary"
						onclick={() => toasts.info('Information', 'This is some useful information.')}
					>
						<Info class="mr-2 h-4 w-4" /> Show Info Toast
					</Button>
					<Button
						variant="outline"
						onclick={() => toasts.warning('Warning', 'Proceed with caution.')}
					>
						<AlertTriangle class="mr-2 h-4 w-4" /> Show Warning Toast
					</Button>
				</div>
			</div>
		</section>
	</div>
</div>
