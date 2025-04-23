# Contributing to hash/ui

Thank you for considering contributing to hash/ui! This document outlines the process for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing](#testing)

## Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork**
   ```
   git clone https://github.com/YOUR_USERNAME/ui.git
   cd ui
   ```
3. **Install dependencies**
   ```
   npm install
   ```
4. **Create a new branch** for your feature or bugfix
   ```
   git checkout -b feature/your-feature-name
   ```
5. **Make your changes** and commit them following the [commit message guidelines](#commit-message-guidelines)

## Development Workflow

1. **Start the development server**
   ```
   npm run dev
   ```
2. **Make your changes** to components, styles, or documentation
3. **Test your changes** locally to ensure they work as expected
   ```
   npm run test
   ```
4. **Build the project** to ensure it compiles successfully
   ```
   npm run build
   ```

## Pull Request Process

1. **Update documentation** if needed for the changes you're submitting
2. **Ensure all tests pass** before submitting your pull request
3. **Update the CHANGELOG.md** with details of your changes
4. **Submit your pull request** against the `main` branch
5. **Request a review** from one of the core team members
6. **Address any feedback** promptly to get your PR merged

## Coding Standards

We use ESLint and Prettier to enforce a consistent coding style:

- **TypeScript** is used for all component development
- **Run linting** before submitting your PR
  ```
  npm run lint
  ```
- **Run formatting** to ensure consistent style
  ```
  npm run format
  ```
- **Follow SvelteKit best practices** for component structure

### Component Structure Guidelines

- One component per file
- Component names should be PascalCase
- Component files should match the component name
- Reusable components should be placed in the `lib/components` directory
- Page components should be placed in the `routes` directory

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```
feat(button): add disabled state styling
fix(input): resolve focus state accessibility issues
docs(readme): update installation instructions
```

## Testing

We use Vitest and Testing Library for testing components:

1. **Write tests** for new components or features
2. **Run tests** before submitting a PR
   ```
   npm run test
   ```
3. **Aim for high test coverage** for all components

### Testing Guidelines

- Test component rendering
- Test component interactions
- Test accessibility
- Test edge cases and error states

Thank you for contributing to hash/ui!
