# Uzence Design System

A comprehensive design system built with React, TypeScript, and TailwindCSS. This system provides a collection of reusable components, color tokens, and design patterns for building consistent and accessible user interfaces.

## 🚀 Features

- **Color System**: Token-based color system with light/dark theme support
- **Components**: Reusable React components with TypeScript support
- **Accessibility**: WCAG 2.1 compliant components
- **Documentation**: Comprehensive Storybook documentation
- **Responsive**: Mobile-first, responsive components

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/uzence-design-system.git

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── data-display/     # Data display components
│   │   ├── Tag/
│   │   └── Tooltip/
│   ├── forms/           # Form components
│   │   ├── Button/
│   │   └── Input/
│   ├── foundation/      # Foundation elements
│   │   └── colors/      # Color system
│   └── navigation/      # Navigation components
│       ├── Breadcrumbs/
│       └── Tabs/
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## 🎨 Color System

The design system uses a token-based color system with CSS variables. See the [Color System Documentation](https://your-storybook-url/foundation/colors) for details.

## 📚 Documentation

Documentation is available in Storybook, organized by component categories:

- **Forms**: Button, Input
- **Data Display**: Tag, Tooltip
- **Navigation**: Tabs, Breadcrumbs
- **Foundation**: Colors

## 🛠️ Development

### Adding a New Component

1. Create a new directory in the appropriate category
2. Create component files:
   - `ComponentName.tsx`: Component implementation
   - `ComponentName.stories.tsx`: Storybook stories
   - `ComponentName.test.tsx`: Component tests
3. Add documentation in MDX format
4. Update the relevant section documentation

### Running Tests

```bash
npm test
```

### Building

```bash
npm run build
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Storybook Documentation](https://your-storybook-url)
- [GitHub Repository](https://github.com/yourusername/uzence-design-system)
- [Changelog](CHANGELOG.md)

## 🤝 Support

For support, please open an issue in the GitHub repository or contact the maintainers.
