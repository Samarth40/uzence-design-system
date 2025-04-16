// Placeholder for Breadcrumbs Storybook documentation
import React from 'react';
import { StoryFn, Meta } from '@storybook/react'; // Import Storybook types

// Import the component AND its props type separately if not directly exported
import Breadcrumbs from './Breadcrumbs';
// Assuming BreadcrumbsProps is defined within Breadcrumbs.tsx but not exported
// We might need to export it from Breadcrumbs.tsx or redefine it here for Storybook
// For now, let's infer or use a basic type

// Mock Icons for stories
const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

const IconChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const defaultItems = [
  { label: 'Home', href: '#', icon: <IconHome /> },
  { label: 'Settings', href: '#', icon: <IconSettings /> },
  { label: 'Account', href: '#' },
  { label: 'Profile' },
];

// Define Meta configuration
export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: {
      control: 'text',
      description: 'Separator character or node between items.',
    },
    items: {
      control: 'object',
      description: 'Array of breadcrumb items (label, href?, icon?).',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Breadcrumbs

Shows the user's current location within a site hierarchy and allows navigation back to parent pages.

### Use Cases
- **Site Navigation**: Showing current page location
- **E-commerce**: Product category navigation
- **Documentation**: Section hierarchy
- **File Systems**: Directory structure
- **Multi-step Processes**: Progress indication

### Anatomy
\`\`\`
<Breadcrumbs>
  [Home Icon] (optional)
  [Separator]
  [Parent Link]
  [Separator]
  [Current Page]
</Breadcrumbs>
\`\`\`

### Interaction Behavior
- **Click**: Navigate to parent pages
- **Hover**: Link hover states
- **Focus**: Visible focus states
- **Current Page**: Non-clickable last item
- **Mobile**: Responsive layout
- **Truncation**: Long paths handling

### Accessibility Checklist
- [x] Uses \`<nav aria-label="Breadcrumb">\`
- [x] Implements proper link structure
- [x] Uses \`aria-current="page"\` for current page
- [x] Provides keyboard navigation
- [x] Maintains sufficient color contrast
- [x] Supports screen readers
- [x] Handles focus states
- [x] Uses semantic HTML

### Theming
The breadcrumbs support the following theme variables:
- \`--color-breadcrumb-text\`: Link text color
- \`--color-breadcrumb-hover\`: Link hover state
- \`--color-breadcrumb-current\`: Current page text
- \`--color-breadcrumb-separator\`: Separator color
- \`--color-breadcrumb-icon\`: Icon color

### Do's and Don'ts
✅ **Do:**
- Start with home/root
- Use clear, concise labels
- Maintain consistent styling
- Include current page
- Use appropriate separators
- Consider mobile layout

❌ **Don't:**
- Make breadcrumbs too long
- Use unclear labels
- Skip hierarchy levels
- Make current page clickable
- Use inconsistent styling
- Forget accessibility

### Examples
See the stories below for different breadcrumb configurations and styles.
        `,
      },
    },
  },
} as Meta<typeof Breadcrumbs>; 

// Define the Template using StoryFn with explicit args type
// If BreadcrumbsProps is not exported, we infer or use a simpler type
// For demonstration, assuming args match the props implicitly
type StoryArgs = React.ComponentProps<typeof Breadcrumbs>; 

const Template: StoryFn<StoryArgs> = (args: StoryArgs) => <Breadcrumbs {...args} />;

// Define stories by binding the template
export const Default = Template.bind({});
Default.args = {
  items: defaultItems,
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: defaultItems,
  separator: <IconChevronRight />,
};

export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  items: defaultItems.map(item => ({ label: item.label, href: item.href })),
};

export const ShortPath = Template.bind({});
ShortPath.args = {
  items: defaultItems.slice(0, 2),
  separator: ' / ',
}; 