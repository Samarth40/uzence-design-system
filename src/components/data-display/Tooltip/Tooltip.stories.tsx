// Placeholder for Tooltip Storybook documentation
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from '../../forms/Button/Button'; // Import Button for example
// Assuming TooltipProps is defined within Tooltip.tsx but not exported
type TooltipStoryArgs = React.ComponentProps<typeof Tooltip>;

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      control: 'text',
      description: 'Content to display inside the tooltip popup.',
    },
    placement: {
      control: { type: 'select' },
      options: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end',
      ],
      description: 'Position of the tooltip relative to the trigger element.',
    },
    offsetValue: {
      control: { type: 'number' },
      description: 'Distance offset between the tooltip and the trigger element.',
    },
    children: {
      control: false, // Disable control for children as it's the trigger
      description: 'The trigger element that the tooltip is attached to.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Tooltip

A popup that displays information related to an element when it receives keyboard focus or the mouse hovers over it.
Uses \`@floating-ui/react\` for positioning and interactions.

### Use Cases
- **Information Hints**: Additional context for UI elements
- **Feature Discovery**: Highlighting new or advanced features
- **Accessibility**: Providing text alternatives for icons
- **Form Validation**: Showing validation messages
- **Data Visualization**: Explaining chart elements or data points

### Anatomy
\`\`\`
<Tooltip>
  [Trigger Element]
  [Tooltip Content]
</Tooltip>
\`\`\`

### Interaction Behavior
- **Hover**: Tooltip appears on hover
- **Focus**: Tooltip appears on focus
- **Positioning**: Automatically positions to avoid viewport edges
- **Dismissal**: Tooltip disappears on hover/focus out
- **Keyboard**: Accessible via keyboard navigation
- **Mobile**: Touch-friendly interactions

### Accessibility Checklist
- [x] Uses \`role="tooltip"\`
- [x] Associates tooltip with trigger element
- [x] Supports keyboard navigation
- [x] Provides focus management
- [x] Maintains sufficient color contrast
- [x] Supports screen readers
- [x] Handles touch interactions
- [x] Provides clear focus states

### Theming
The tooltip supports the following theme variables:
- \`--color-background\`: Tooltip background color
- \`--color-text\`: Tooltip text color
- \`--color-border\`: Tooltip border color
- \`--shadow-tooltip\`: Tooltip shadow style
- \`--z-index-tooltip\`: Tooltip z-index

### Do's and Don'ts
✅ **Do:**
- Keep tooltip content concise
- Use clear, simple language
- Position tooltips close to their triggers
- Ensure tooltips are readable
- Use tooltips for supplementary information
- Consider mobile touch interactions

❌ **Don't:**
- Put critical information in tooltips
- Use tooltips for error messages
- Make tooltips too large
- Use tooltips for navigation
- Hide important content in tooltips
- Overload with too much information

### Examples
See the stories below for different tooltip configurations and placements.
        `,
      },
    },
    // Add layout centering for better visualization in Storybook canvas
    layout: 'centered',
  },
} as Meta<typeof Tooltip>;

const Template: StoryFn<TooltipStoryArgs> = (args) => (
  // Add some padding around the button in the template for better visibility
  <div className="p-8">
    <Tooltip {...args}>
      {/* Default trigger is a button, ensure args pass through */} 
      {/* Note: Storybook might not perfectly replicate children prop changes here */}
      <Button>Hover or Focus Me</Button>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: 'This is the default tooltip.',
  placement: 'top',
};

export const OnBottom = Template.bind({});
OnBottom.args = {
  content: 'Tooltip positioned on the bottom.',
  placement: 'bottom',
};

export const OnLeft = Template.bind({});
OnLeft.args = {
  content: 'Tooltip on the left.',
  placement: 'left',
};

export const OnRight = Template.bind({});
OnRight.args = {
  content: 'Tooltip on the right.',
  placement: 'right',
};

export const WithHTMLContent = Template.bind({});
WithHTMLContent.args = {
  content: (
    <div className="text-center">
      <strong className="block">Rich Content</strong>
      <em className="text-xs">Can include HTML</em>
    </div>
  ),
  placement: 'bottom',
}; 