<script lang="ts">
	import { Check, X, Info, AlertTriangle } from 'lucide-svelte';
	import { Button, Card, FormField, Input, Toasts } from '$lib/components/ui';
</script>

<div class="container mx-auto px-4 py-12 sm:px-6">
	<div class="mx-auto max-w-3xl">
		<h1 class="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl">hash/ui Components</h1>

		<section class="grid gap-8">
			<!-- Buttons -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Buttons</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					<Button onpress={() => console.log('testing default')}>Default</Button>
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
					<FormField id="with-label" placeholder="Field with label" label="Input with label" />
					<FormField
						id="with-description"
						label="Input with description"
						description="This is a helpful description"
						placeholder="Field with description"
					/>
					<FormField
						id="required-field"
						placeholder="Required field"
						label="Required field"
						required
					/>
				</div>
			</div>

			<!-- Cards -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Cards</h2>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<Card.Card>
						<Card.CardHeader>
							<Card.CardTitle>Card Title</Card.CardTitle>
							<Card.CardDescription>Card description goes here</Card.CardDescription>
						</Card.CardHeader>
						<Card.CardContent>
							<p>This is the main content of the card. It can contain any elements.</p>
						</Card.CardContent>
						<Card.CardFooter>
							<Button variant="outline" size="sm">Cancel</Button>
							<Button size="sm" class="ml-2">Submit</Button>
						</Card.CardFooter>
					</Card.Card>

					<Card.Card>
						<Card.CardHeader>
							<Card.CardTitle>Notification Card</Card.CardTitle>
							<Card.CardDescription>With interactive elements</Card.CardDescription>
						</Card.CardHeader>
						<Card.CardContent>
							<p class="mb-4">
								Cards are perfect for displaying related content in a contained manner.
							</p>
							<div class="flex gap-2">
								<FormField id="card-input" label="Email" placeholder="Your email" />
							</div>
						</Card.CardContent>
						<Card.CardFooter>
							<Button>Subscribe</Button>
						</Card.CardFooter>
					</Card.Card>
				</div>
			</div>

			<!-- Toast Notifications -->
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Toast Notifications</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
					<Button
						variant="default"
						onclick={() => Toasts.success('Success!', 'Operation completed successfully.')}
					>
						<Check class="mr-2 h-4 w-4" /> Show Success Toast
					</Button>
					<Button
						variant="destructive"
						onclick={() => Toasts.error('Error!', 'Something went wrong.')}
					>
						<X class="mr-2 h-4 w-4" /> Show Error Toast
					</Button>
					<Button
						variant="secondary"
						onclick={() => Toasts.info('Information', 'This is some useful information.')}
					>
						<Info class="mr-2 h-4 w-4" /> Show Info Toast
					</Button>
					<Button
						variant="outline"
						onclick={() => Toasts.warning('Warning', 'Proceed with caution.')}
					>
						<AlertTriangle class="mr-2 h-4 w-4" /> Show Warning Toast
					</Button>
				</div>
			</div>
		</section>
	</div>
</div>
