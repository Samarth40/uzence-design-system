// Placeholder for Tag Storybook documentation
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Tag from './Tag';
// Assuming TagProps is defined in Tag.tsx but not exported
// Infer type for args
type TagStoryArgs = React.ComponentProps<typeof Tag>;

// Icon for story examples
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export default {
  title: 'Data Display/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'Visual style of the tag',
    },
    children: {
      control: 'text',
      description: 'Content displayed inside the tag',
    },
    icon: {
      control: 'boolean', // Simple toggle for story, pass actual icon in args
      description: 'Optional icon displayed before the content',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the tag can be dismissed (shows close button)',
    },
    onDismiss: {
      action: 'dismissed', // Log action in Storybook addons panel
      description: 'Callback function when dismiss button is clicked',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Tag / Badge / Pill

A versatile component to display status, categories, labels, or short information snippets.
Supports different visual variants, optional icons, and dismissible behavior.
        `,
      },
    },
  },
} as Meta<typeof Tag>;

const Template: StoryFn<TagStoryArgs> = (args) => (
  <Tag 
    {...args} 
    // Conditionally render icon based on boolean control
    icon={args.icon ? <IconUser /> : undefined} 
  />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Tag',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Tag',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'Info',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  children: 'Error',
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
  children: 'Neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'info',
  children: 'User Info',
  icon: true, // Use boolean control to trigger icon rendering in Template
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  variant: 'warning',
  children: 'Needs Review',
  dismissible: true,
};

export const DismissibleWithIcon = Template.bind({});
DismissibleWithIcon.args = {
  variant: 'error',
  children: 'Action Required',
  icon: true,
  dismissible: true,
}; 