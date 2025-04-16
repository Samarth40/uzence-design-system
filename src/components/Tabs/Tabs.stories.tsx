import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import type { TabItem } from './Tabs';

// Mock Icon component for demonstration
const MockIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" />
  </svg>
);

const mockTabs: TabItem[] = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: <div>Content for Tab 1</div>,
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: <div>Content for Tab 2</div>,
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: <div>Content for Tab 3</div>,
  },
];

const mockTabsWithIcons: TabItem[] = [
  {
    id: 'tab1',
    label: 'Tab 1',
    icon: <MockIcon />,
    content: <div>Content for Tab 1</div>,
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    icon: <MockIcon />,
    content: <div>Content for Tab 2</div>,
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    icon: <MockIcon />,
    content: <div>Content for Tab 3</div>,
  },
];

const mockTabsWithDisabled: TabItem[] = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: <div>Content for Tab 1</div>,
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: <div>Content for Tab 2</div>,
    disabled: true,
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: <div>Content for Tab 3</div>,
  },
];

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A set of layered sections of content, known as tab panels, that are displayed one at a time.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of tab items',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tabs',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral'],
      description: 'The visual style of the tabs',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when active tab changes',
    },
    defaultActiveTabId: {
      control: 'text',
      description: 'Default active tab ID',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    items: mockTabs,
    size: 'md',
    variant: 'primary',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Base Story
export const Default: Story = {
  args: {
    items: mockTabs,
  },
};

// With Icons Story
export const WithIcons: Story = {
  args: {
    items: mockTabsWithIcons,
  },
};

// With Disabled Tab Story
export const WithDisabledTab: Story = {
  args: {
    items: mockTabsWithDisabled,
  },
};

// Different Sizes Story
export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2">Small</h3>
        <Tabs {...args} size="sm" />
      </div>
      <div>
        <h3 className="mb-2">Medium</h3>
        <Tabs {...args} size="md" />
      </div>
      <div>
        <h3 className="mb-2">Large</h3>
        <Tabs {...args} size="lg" />
      </div>
    </div>
  ),
};

// Different Variants Story
export const Variants: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2">Primary</h3>
        <Tabs {...args} variant="primary" />
      </div>
      <div>
        <h3 className="mb-2">Secondary</h3>
        <Tabs {...args} variant="secondary" />
      </div>
      <div>
        <h3 className="mb-2">Neutral</h3>
        <Tabs {...args} variant="neutral" />
      </div>
    </div>
  ),
}; 