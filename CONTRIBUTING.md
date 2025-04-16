# Contributing to Uzence Design System

Thank you for your interest in contributing to the Uzence Design System! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Component Guidelines](#component-guidelines)
- [Documentation Guidelines](#documentation-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start Storybook:
   ```bash
   npm run storybook
   ```

## 🔧 Development Process

### Branch Naming Convention

- Feature: `feature/component-name`
- Bug fix: `fix/issue-description`
- Documentation: `docs/topic`
- Release: `release/v1.0.0`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 🎨 Component Guidelines

### Creating New Components

1. Create a new directory in the appropriate category:
   ```
   src/components/[category]/[ComponentName]/
   ```

2. Required files:
   - `ComponentName.tsx`: Component implementation
   - `ComponentName.stories.tsx`: Storybook stories
   - `ComponentName.test.tsx`: Component tests
   - `index.ts`: Component export
   - `README.md`: Component documentation

3. Component requirements:
   - TypeScript interfaces for props
   - Accessibility support
   - Responsive design
   - Dark mode support
   - Unit tests
   - Storybook documentation

### Component Structure

```tsx
import React from 'react';

interface ComponentProps {
  // Props definition
}

export const Component: React.FC<ComponentProps> = ({
  // Props destructuring
}) => {
  // Component implementation
  return (
    // JSX
  );
};
```

## 📚 Documentation Guidelines

### Storybook Documentation

1. Create a `.stories.tsx` file for each component
2. Include:
   - Component description
   - Props documentation
   - Usage examples
   - Accessibility notes
   - Best practices

Example:
```tsx
export default {
  title: 'Category/ComponentName',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: `
          # Component Name
          
          Component description and usage guidelines.
        `,
      },
    },
  },
};
```

### MDX Documentation

1. Create an MDX file for section overviews
2. Include:
   - Section description
   - Component list
   - Common patterns
   - Best practices
   - Examples

## 🧪 Testing Guidelines

### Unit Tests

1. Use Jest and React Testing Library
2. Test:
   - Component rendering
   - Props handling
   - User interactions
   - Accessibility
   - Edge cases

Example:
```tsx
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Accessibility Tests

1. Use Jest-axe
2. Test:
   - ARIA attributes
   - Keyboard navigation
   - Screen reader compatibility

## 🔄 Pull Request Process

1. Create a feature branch
2. Make your changes
3. Run tests:
   ```bash
   npm test
   ```
4. Update documentation
5. Create a pull request
6. Request review from maintainers

### PR Checklist

- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Code follows style guidelines
- [ ] Accessibility requirements met
- [ ] Changes documented in CHANGELOG.md

## 📝 Additional Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Testing Library Documentation](https://testing-library.com/docs/)
- [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) 