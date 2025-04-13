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
	import { toasts } from '$lib/stores/toast-store';
	import { Check, X, AlertCircle, Info, AlertTriangle } from 'lucide-svelte';
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

			<!-- Toast Notifications -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Toast Notifications</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
					<Button
						variant="default"
						on:click={() => toasts.success('Success!', 'Operation completed successfully.')}
					>
						<Check class="mr-2 h-4 w-4" /> Show Success Toast
					</Button>
					<Button
						variant="destructive"
						on:click={() => toasts.error('Error!', 'Something went wrong.')}
					>
						<X class="mr-2 h-4 w-4" /> Show Error Toast
					</Button>
					<Button
						variant="secondary"
						on:click={() => toasts.info('Information', 'This is some useful information.')}
					>
						<Info class="mr-2 h-4 w-4" /> Show Info Toast
					</Button>
					<Button
						variant="outline"
						on:click={() => toasts.warning('Warning', 'Proceed with caution.')}
					>
						<AlertTriangle class="mr-2 h-4 w-4" /> Show Warning Toast
					</Button>
				</div>
			</div>
		</section>
	</div>
</div>
