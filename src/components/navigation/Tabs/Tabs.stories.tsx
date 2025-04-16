import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tabs from './Tabs';
// Re-import or define types if needed
// Assuming TabsProps and TabItem are defined in Tabs.tsx but not exported
// We might need to export them or redefine for Storybook
type TabsStoryArgs = React.ComponentProps<typeof Tabs>;

// Mock Icons for story examples
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

// Sample Tab Items Data
const defaultTabItems = [
  { 
    id: 'profile', 
    label: 'Profile', 
    content: <div className="p-4">Profile content goes here.</div> 
  },
  { 
    id: 'settings', 
    label: 'Settings', 
    icon: <IconSettings />, 
    content: <div className="p-4">Settings content appears here.</div> 
  },
  { 
    id: 'disabled', 
    label: 'Disabled', 
    content: 'Never see this', 
    disabled: true 
  },
];

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of tab items (id, label, content, icon?, disabled?).',
    },
    defaultTab: {
      control: 'text',
      description: 'ID of the initially selected tab.',
    },
  },
   parameters: {
    docs: {
      description: {
        component: `
## Tabs

Organizes content into multiple sections, allowing users to switch between them.
Supports icons, disabled states, and uses ARIA roles for accessibility.

### Use Cases
- **Content Organization**: Grouping related content
- **Form Sections**: Multi-step forms or settings
- **Data Views**: Different views of the same data
- **Feature Toggles**: Switching between features
- **Documentation**: Organizing documentation sections

### Anatomy
\`\`\`
<Tabs>
  [Tab List]
    [Tab Item]
      [Icon] (optional)
      [Label]
    [Tab Panel]
      [Content]
</Tabs>
\`\`\`

### Interaction Behavior
- **Click**: Switch between tabs
- **Keyboard**: Arrow keys for navigation
- **Focus**: Visible focus states
- **Disabled**: Non-interactive tabs
- **Active**: Visual indication of current tab
- **Content**: Smooth content transitions

### Accessibility Checklist
- [x] Uses \`role="tablist"\` and \`role="tab"\`
- [x] Implements keyboard navigation
- [x] Provides focus management
- [x] Uses \`aria-selected\` for active tab
- [x] Associates tabs with panels
- [x] Maintains sufficient color contrast
- [x] Supports screen readers
- [x] Handles disabled states properly

### Theming
The tabs support the following theme variables:
- \`--color-tab-active\`: Active tab background
- \`--color-tab-hover\`: Tab hover state
- \`--color-tab-text\`: Tab text color
- \`--color-tab-border\`: Tab border color
- \`--color-tab-disabled\`: Disabled tab styling

### Do's and Don'ts
✅ **Do:**
- Keep tab labels short and clear
- Use consistent tab styling
- Maintain logical tab order
- Provide clear active states
- Use icons to enhance meaning
- Consider mobile responsiveness

❌ **Don't:**
- Use too many tabs
- Nest tabs within tabs
- Hide important content in tabs
- Use unclear tab labels
- Mix different tab styles
- Forget keyboard navigation

### Examples
See the stories below for different tab configurations and states.
        `,
      },
    },
  },
} as Meta<typeof Tabs>;

const Template: StoryFn<TabsStoryArgs> = (args) => (
  // Wrap in a container to give it bounds
  <div className="bg-[--color-surface-default] border border-[--color-border-default] rounded-lg overflow-hidden max-w-md">
     <Tabs {...args} />
  </div>
 );

export const Default = Template.bind({});
Default.args = {
  items: defaultTabItems,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: defaultTabItems.map(item => ({ ...item, icon: item.id === 'settings' ? <IconSettings /> : <IconUser /> }))
  // Ensure all items have icons for this story if desired
};

export const DefaultSelected = Template.bind({});
DefaultSelected.args = {
  items: defaultTabItems,
  defaultTab: 'settings', // Start with the second tab selected
}; 