# hash/ui

A modern, accessible, and customizable UI component library for SvelteKit projects. This library provides a collection of reusable UI components designed with best practices in mind.

![hash/ui Components](/static/og.png)

## Features

- **Modern Design**: Clean, minimalist design following current UI/UX trends
- **Responsive**: All components are mobile-first and responsive across devices
- **Accessible**: Built with accessibility in mind, following WAI-ARIA guidelines
- **Themeable**: Easy customization with CSS variables
- **TypeScript Support**: Full TypeScript support for better developer experience
- **Dark Mode**: Built-in dark mode support

## Components

The library includes the following components:

- **Button**: Multiple variants, sizes, and states
- **Input**: Form input with validation support
- **Card**: Flexible card layouts with header, content, and footer
- **Form**: Form components with validation
- **Toast**: Toast notification system

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/ibrahimraimi/ui.git
cd ui

# Install dependencies
pnpm install

# Start the development server
pnpm run dev
```

### Usage

After installing and starting the development server, you can:

1. Visit the home page to see an overview of the library
2. Explore the components showcase for live examples
3. Check out the form example for a complete implementation

## Component Usage

### Button Component

```svelte
<script>
  import Button from '$lib/components/ui/button.svelte';
</script>

<Button>Default Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="destructive">Destructive Button</Button>
<Button disabled>Disabled Button</Button>
<Button loading>Loading Button</Button>
```

### Input Component

```svelte
<script>
  import Input from '$lib/components/ui/input.svelte';
  import FormField from '$lib/components/ui/form-field.svelte';
</script>

<Input placeholder="Basic input" />

<FormField id="email" label="Email Address" required>
  <Input id="email" type="email" placeholder="Enter your email" />
</FormField>
```

### Card Component

```svelte
<script>
  import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '$lib/components/ui/card/index';
  import Button from '$lib/components/ui/button.svelte';
</script>

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Toast Notifications

```svelte
<script>
  import { toasts } from '$lib/stores/toast-store';
  import Button from '$lib/components/ui/button.svelte';
</script>

<Button on:click={() => toasts.success('Success!', 'Operation completed successfully')}>
  Show Success Toast
</Button>
```

## Customization

### Theme Customization

The component library uses CSS variables for theming. You can customize the theme by modifying the CSS variables in `src/app.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* other variables */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* other dark mode variables */
}
```

## Browser Support

The component library supports all modern browsers, including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
