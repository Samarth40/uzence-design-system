import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';
import type { TagProps } from './Tag';
// import { SunIcon } from '@heroicons/react/24/outline'; // Example icon import

// Mock Icon component for demonstration
const MockIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" />
  </svg>
);

const meta: Meta<typeof Tag> = {
  title: 'Components/Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a small piece of information, status, or category.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'The visual style of the tag.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tag.',
    },
    children: {
      control: 'text',
      description: 'The content displayed inside the tag.',
    },
    icon: {
      control: 'boolean',
      description: 'Optional icon element displayed before the text. Toggle to see example.',
      mapping: {
        false: undefined,
        true: <MockIcon />,
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the tag can be dismissed.',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback function triggered when the dismiss button is clicked.',
      if: { arg: 'dismissible' }, // Only show if dismissible is true
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply.',
    },
  },
  args: { // Default args for controls
    variant: 'neutral',
    size: 'md',
    children: 'Tag Label',
    dismissible: false,
    icon: undefined, // Use undefined instead of false for icon
  },
  tags: ['autodocs'], // Enable autodocs
};

export default meta;
type Story = StoryObj<typeof Tag>;

// Base Story
export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
};

// Variants Story
export const Variants: Story = {
  render: (args: TagProps) => (
    <div className="flex flex-wrap gap-2 items-center">
      <Tag {...args} variant="primary">Primary</Tag>
      <Tag {...args} variant="secondary">Secondary</Tag>
      <Tag {...args} variant="success">Success</Tag>
      <Tag {...args} variant="info">Info</Tag>
      <Tag {...args} variant="warning">Warning</Tag>
      <Tag {...args} variant="error">Error</Tag>
      <Tag {...args} variant="neutral">Neutral</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcasing all available color variants.',
      },
    },
  },
};

// Sizes Story
export const Sizes: Story = {
  render: (args: TagProps) => (
    <div className="flex items-center gap-2">
      <Tag {...args} size="sm">Small</Tag>
      <Tag {...args} size="md">Medium</Tag>
      <Tag {...args} size="lg">Large</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcasing different tag sizes.',
      },
    },
  },
};

// With Icon Story
export const WithIcon: Story = {
  args: {
    children: 'Tag with Icon',
    icon: <MockIcon />,
    variant: 'info',
  },
};

// Dismissible Story
export const Dismissible: Story = {
  args: {
    children: 'Dismissible Tag',
    dismissible: true,
    variant: 'warning',
    // onDismiss will be logged in the Storybook Actions tab
  },
};

// Dismissible With Icon Story
export const DismissibleWithIcon: Story = {
  args: {
    children: 'Dismissible',
    dismissible: true,
    icon: <MockIcon />,
    variant: 'error',
    // onDismiss will be logged in the Storybook Actions tab
  },
}; 