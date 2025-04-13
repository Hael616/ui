<script lang="ts">
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter
	} from '$lib/components/ui/card/index';
	import Button from '$lib/components/ui/button.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import FormField from '$lib/components/ui/form-field.svelte';
	import Form from '$lib/components/ui/form.svelte';
	import { toasts } from '$lib/stores/toast-store';

	type FormEvent = { detail: { data: Record<string, string> } };

	// Form state
	let formData = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	// Form errors with proper typing
	let errors: Record<string, string | null> = {
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		confirmPassword: null
	};

	// Form validation
	function validateForm(): boolean {
		let isValid = true;

		// Reset errors
		errors = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			confirmPassword: null
		};

		// First name validation
		if (!formData.firstName) {
			errors.firstName = 'First name is required';
			isValid = false;
		}

		// Last name validation
		if (!formData.lastName) {
			errors.lastName = 'Last name is required';
			isValid = false;
		}

		// Email validation
		if (!formData.email) {
			errors.email = 'Email is required';
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Email is invalid';
			isValid = false;
		}

		// Password validation
		if (!formData.password) {
			errors.password = 'Password is required';
			isValid = false;
		} else if (formData.password.length < 8) {
			errors.password = 'Password must be at least 8 characters';
			isValid = false;
		}

		// Confirm password validation
		if (!formData.confirmPassword) {
			errors.confirmPassword = 'Please confirm your password';
			isValid = false;
		} else if (formData.password !== formData.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
			isValid = false;
		}

		return isValid;
	}

	// Form submission
	function handleSubmit(event: FormEvent): void {
		const isValid = validateForm();

		if (isValid) {
			// In a real app, you'd submit the form to your backend here
			toasts.success('Registration successful!', 'Your account has been created.');

			// Reset the form
			formData = {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: ''
			};
		} else {
			toasts.error('Registration failed', 'Please check the form for errors.');
		}
	}
</script>

<div class="container mx-auto px-4 py-12 sm:px-6">
	<div class="mx-auto max-w-md">
		<Card>
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
				<CardDescription>Fill out the form below to create your account.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form on:submit={handleSubmit} class="space-y-4">
					<div class="grid grid-cols-2 gap-4">
						<FormField id="firstName" label="First name" error={errors.firstName} required>
							<Input
								id="firstName"
								name="firstName"
								bind:value={formData.firstName}
								error={errors.firstName}
								required
							/>
						</FormField>

						<FormField id="lastName" label="Last name" error={errors.lastName} required>
							<Input
								id="lastName"
								name="lastName"
								bind:value={formData.lastName}
								error={errors.lastName}
								required
							/>
						</FormField>
					</div>

					<FormField id="email" label="Email" error={errors.email} required>
						<Input
							id="email"
							name="email"
							type="email"
							bind:value={formData.email}
							error={errors.email}
							required
						/>
					</FormField>

					<FormField id="password" label="Password" error={errors.password} required>
						<Input
							id="password"
							name="password"
							type="password"
							bind:value={formData.password}
							error={errors.password}
							required
						/>
					</FormField>

					<FormField
						id="confirmPassword"
						label="Confirm password"
						error={errors.confirmPassword}
						required
					>
						<Input
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							bind:value={formData.confirmPassword}
							error={errors.confirmPassword}
							required
						/>
					</FormField>

					<div class="pt-2">
						<Button type="submit" class="w-full">Create account</Button>
					</div>
				</Form>
			</CardContent>
			<CardFooter class="flex justify-center">
				<p class="text-muted-foreground text-sm">
					Already have an account?
					<a href="#" class="text-primary underline-offset-4 hover:underline">Sign in</a>
				</p>
			</CardFooter>
		</Card>
	</div>
</div>
