// Placeholder for Color Tokens Storybook documentation
import { Meta, StoryFn } from '@storybook/react';
import ColorTokens from './ColorTokens';

export default {
  title: 'Foundations/Colors',
  component: ColorTokens,
  parameters: {
    docs: {
      description: {
        component: `
## Color System Documentation

Displays the foundational color palette used throughout the design system.
Colors are defined as CSS variables and support **light and dark themes**.

### Naming Convention
Tokens follow the pattern: \`--color-<category>-<name_or_value>\`
- **Category:** primary, secondary, neutral, success, info, warning, error, text, background, surface, border
- **Name/Value:** Often a descriptive name (e.g., default, hover, subtle) or a scale value (e.g., gray-100).

### Usage
Apply colors in components using Tailwind CSS utility classes with the CSS variable:
\`\`\`jsx
<div className="bg-[--color-primary] text-[--color-text-on-primary]">...</div>
<p className="text-[--color-text-muted]">...</p>
<div className="border border-[--color-border-default]">...</div>
\`\`\`

### Accessibility (WCAG)
- **Contrast:** Always verify text has sufficient contrast against its background when using these tokens. A minimum ratio of **4.5:1** is required for normal text (AA standard).
- **Semantic Colors:** Use semantic colors (Success, Info, Warning, Error) purposefully to convey meaning, but don't rely on color alone (provide icons or text).
- **Dark Mode:** The same tokens are used, but their values change in dark mode. Ensure contrast remains compliant in both themes.
        `,
      },
    },
  },
} as Meta<typeof ColorTokens>;

// Template remains simple as the component handles the display logic
const Template: StoryFn<typeof ColorTokens> = (args) => <ColorTokens {...args} />;

export const Palette = Template.bind({});
// No specific args needed for Palette story, as it shows all tokens
Palette.args = {};

// Example story showing how to use a specific color (Optional)
/*
export const UsageExample = () => (
  <div className="p-4 space-y-2">
    <div className="bg-[--color-primary] text-[--color-text-on-primary] p-2 rounded">
      Primary Background with Text On Primary
    </div>
    <p className="text-[--color-text-muted]">This is muted text.</p>
    <div className="border border-[--color-border-default] p-2">
      Default Border
    </div>
  </div>
);
*/ 