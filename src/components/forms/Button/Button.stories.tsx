import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
// Assuming ButtonProps is defined in Button.tsx but not exported
type ButtonStoryArgs = React.ComponentProps<typeof Button>;

// Icons for story examples
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);
const IconSettings = () => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style of the button.',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button.',
    },
    children: {
      control: 'text',
      description: 'Button label text or node.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables button interaction.',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables interaction.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the button span the full width of its container.',
    },
    icon: {
      control: false, // Control icon presence via specific stories
      description: 'Optional icon element.',
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to the children.',
      if: { arg: 'icon' }, // Only show if icon exists (won't work perfectly without explicit icon arg)
    },
    onClick: { 
      action: 'clicked',
      description: 'Click event handler.'
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Button

A standard button component for triggering actions. Supports multiple visual styles, sizes, icons, loading, and disabled states.

### Use Cases
- **Primary Actions**: Use primary variant for the main call-to-action in a view
- **Secondary Actions**: Use secondary variant for supporting actions
- **Dangerous Actions**: Use danger variant for destructive actions (delete, remove)
- **Subtle Actions**: Use ghost variant for less prominent actions
- **Navigation**: Use outline variant for navigation-style buttons

### Anatomy
\`\`\`
<Button>
  [Icon] (optional)
  [Label]
  [Icon] (optional)
</Button>
\`\`\`

### Interaction Behavior
- **Hover**: Visual feedback with color/shadow changes
- **Focus**: Visible focus ring for keyboard navigation
- **Active**: Pressed state styling
- **Disabled**: Reduced opacity and no interaction
- **Loading**: Spinner animation and disabled state

### Accessibility Checklist
- [x] Uses semantic \`<button>\` element
- [x] Includes visible focus states
- [x] Supports keyboard navigation
- [x] Provides loading state feedback
- [x] Handles disabled state properly
- [x] Includes ARIA attributes when needed
- [x] Maintains sufficient color contrast
- [x] Supports screen readers

### Theming
The button supports the following theme variables:
- \`--color-primary\`: Primary button background
- \`--color-primary-hover\`: Primary button hover state
- \`--color-secondary\`: Secondary button background
- \`--color-text\`: Button text color
- \`--color-border\`: Outline button border color

### Do's and Don'ts
✅ **Do:**
- Use clear, action-oriented labels
- Maintain consistent button hierarchy
- Use appropriate variants for different actions
- Include loading states for async actions
- Ensure sufficient contrast ratios

❌ **Don't:**
- Use buttons for navigation (use links instead)
- Overload buttons with too much text
- Mix different button styles without clear hierarchy
- Use disabled buttons as the only way to prevent actions
- Hide important actions behind ghost buttons

### Examples
See the stories below for different button configurations and states.
        `,
      },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonStoryArgs> = (args) => <Button {...args} />;

// Base Examples
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Outline Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger Button',
};

// Sizes
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large Button',
};

// With Icons
export const IconLeft = Template.bind({});
IconLeft.args = {
  children: 'Settings',
  icon: <IconSettings />,
  iconPosition: 'left',
};

export const IconRight = Template.bind({});
IconRight.args = {
  children: 'User Profile',
  icon: <IconUser />,
  iconPosition: 'right',
  variant: 'secondary',
};

// States
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Saving...', // Typically text changes during load
  loading: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full Width Button',
  fullWidth: true,
}; 