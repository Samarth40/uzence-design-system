// Placeholder for Input Storybook documentation
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input.tsx';
// Assuming InputProps is defined in Input.tsx but not exported
type InputStoryArgs = React.ComponentProps<typeof Input>;

// Icons for story examples
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);
const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the input.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the input.',
    },
    helperText: {
      control: 'text',
      description: 'Optional helper text displayed below the input.',
    },
    error: {
      control: 'text',
      description: 'Error message displayed below the input (takes precedence over helperText).',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field.',
    },
    type: {
      control: 'text', // Allows types like text, password, email, number, etc.
      description: 'Input type attribute.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables input interaction.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the input read-only.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the input span the full width of its container.',
    },
    leftIcon: {
      control: false,
      description: 'Icon displayed inside the input on the left.',
    },
    rightIcon: {
      control: false,
      description: 'Icon displayed inside the input on the right.',
    },
    // Standard input attributes can be controlled via `args` in specific stories
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Input

A standard text input field for forms. Supports labels, helper text, error states, icons, different sizes, and common input attributes.

### Use Cases
- **Text Entry**: Basic text input for names, descriptions, etc.
- **Form Fields**: Required fields in forms with validation
- **Search**: Search inputs with optional search icon
- **Email/Password**: Specialized input types with appropriate validation
- **Number Input**: Numeric values with optional constraints

### Anatomy
\`\`\`
<Input>
  [Label] (optional)
  [Left Icon] (optional)
  [Input Field]
  [Right Icon] (optional)
  [Helper Text] (optional)
  [Error Message] (optional)
</Input>
\`\`\`

### Interaction Behavior
- **Focus**: Visible focus ring and label highlight
- **Hover**: Subtle border color change
- **Error State**: Red border and error message display
- **Disabled**: Reduced opacity and no interaction
- **Read-only**: Grayed out but selectable text
- **Validation**: Real-time or on-blur validation support

### Accessibility Checklist
- [x] Uses semantic \`<input>\` element
- [x] Includes associated \`<label>\` element
- [x] Provides clear focus states
- [x] Supports keyboard navigation
- [x] Includes error messaging
- [x] Maintains sufficient color contrast
- [x] Supports screen readers
- [x] Provides clear validation feedback

### Theming
The input supports the following theme variables:
- \`--color-border\`: Input border color
- \`--color-border-focus\`: Focus state border color
- \`--color-border-error\`: Error state border color
- \`--color-text\`: Input text color
- \`--color-text-placeholder\`: Placeholder text color
- \`--color-background\`: Input background color
- \`--color-background-disabled\`: Disabled state background

### Do's and Don'ts
✅ **Do:**
- Always include a label or aria-label
- Provide clear error messages
- Use appropriate input types
- Include helper text for complex fields
- Maintain consistent sizing
- Use icons to enhance meaning

❌ **Don't:**
- Use placeholder text as a label
- Hide error messages
- Overload with too many icons
- Use unclear or technical labels
- Mix different input sizes
- Disable copy/paste without good reason

### Examples
See the stories below for different input configurations and states.
        `,
      },
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<InputStoryArgs> = (args: InputStoryArgs) => (
  // Limit width in Storybook for better presentation
  <div className="max-w-sm">
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter username...',
  helperText: 'This is some helpful text.',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter password',
  error: 'Password is required.',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: 'Search',
  placeholder: 'Search...',
  leftIcon: <IconSearch />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: 'Email',
  type: 'email',
  placeholder: 'your@email.com',
  rightIcon: <IconMail />,
};

export const Small = Template.bind({});
Small.args = {
  placeholder: 'Small input',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'Large input',
  size: 'lg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Cannot type here',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Read Only Value',
  value: 'This cannot be changed',
  readOnly: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  placeholder: 'Spans full width',
  fullWidth: true,
}; 