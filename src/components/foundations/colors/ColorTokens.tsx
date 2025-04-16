// Placeholder for Color Tokens demonstration
import React from 'react';

// Define the structure of our color tokens for documentation
const colorGroups = {
  Primary: [
    { name: 'Primary', variable: '--color-primary' },
    { name: 'Primary Hover', variable: '--color-primary-hover' },
    { name: 'Primary Focus', variable: '--color-primary-focus' },
    { name: 'Text on Primary', variable: '--color-text-on-primary', textColorVariable: '--color-text-default' }, // Show text on swatch
  ],
  Secondary: [
    { name: 'Secondary', variable: '--color-secondary' },
    { name: 'Secondary Hover', variable: '--color-secondary-hover' },
    { name: 'Secondary Focus', variable: '--color-secondary-focus' },
    { name: 'Text on Secondary', variable: '--color-text-on-secondary', textColorVariable: '--color-text-default' },
  ],
  Neutral: [
    { name: 'Gray 50', variable: '--color-neutral-gray-50' },
    { name: 'Gray 100', variable: '--color-neutral-gray-100' },
    { name: 'Gray 200', variable: '--color-neutral-gray-200' },
    { name: 'Gray 300', variable: '--color-neutral-gray-300' },
    { name: 'Gray 400', variable: '--color-neutral-gray-400' },
    { name: 'Gray 500', variable: '--color-neutral-gray-500' },
    { name: 'Gray 600', variable: '--color-neutral-gray-600' },
    { name: 'Gray 700', variable: '--color-neutral-gray-700' },
    { name: 'Gray 800', variable: '--color-neutral-gray-800' },
    { name: 'Gray 900', variable: '--color-neutral-gray-900' },
    { name: 'White', variable: '--color-neutral-white' },
    { name: 'Black', variable: '--color-neutral-black' },
  ],
  Backgrounds: [
    { name: 'Background Default', variable: '--color-background-default' },
    { name: 'Background Subtle', variable: '--color-background-subtle' },
    { name: 'Surface Default', variable: '--color-surface-default' },
    { name: 'Surface Hover', variable: '--color-surface-hover' },
    { name: 'Surface Active', variable: '--color-surface-active' },
    { name: 'Surface Raised', variable: '--color-surface-raised' },
  ],
  Borders: [
    { name: 'Border Default', variable: '--color-border-default' },
    { name: 'Border Hover', variable: '--color-border-hover' },
    { name: 'Border Subtle', variable: '--color-border-subtle' },
  ],
  Text: [
    { name: 'Text Default', variable: '--color-text-default', textColorVariable: '--color-background-default' },
    { name: 'Text Muted', variable: '--color-text-muted', textColorVariable: '--color-background-default' },
    { name: 'Text Disabled', variable: '--color-text-disabled', textColorVariable: '--color-background-default' },
    { name: 'Text on Primary', variable: '--color-text-on-primary', textColorVariable: '--color-primary' },
    { name: 'Text on Secondary', variable: '--color-text-on-secondary', textColorVariable: '--color-secondary' },
  ],
  SemanticSuccess: [
    { name: 'Success BG', variable: '--color-success-bg' },
    { name: 'Success Text', variable: '--color-success-text', textColorVariable: '--color-success-bg' },
    { name: 'Success Border', variable: '--color-success-border' },
    { name: 'Success Icon', variable: '--color-success-icon' },
  ],
  SemanticInfo: [
    { name: 'Info BG', variable: '--color-info-bg' },
    { name: 'Info Text', variable: '--color-info-text', textColorVariable: '--color-info-bg' },
    { name: 'Info Border', variable: '--color-info-border' },
    { name: 'Info Icon', variable: '--color-info-icon' },
  ],
  SemanticWarning: [
    { name: 'Warning BG', variable: '--color-warning-bg' },
    { name: 'Warning Text', variable: '--color-warning-text', textColorVariable: '--color-warning-bg' },
    { name: 'Warning Border', variable: '--color-warning-border' },
    { name: 'Warning Icon', variable: '--color-warning-icon' },
  ],
  SemanticError: [
    { name: 'Error BG', variable: '--color-error-bg' },
    { name: 'Error Text', variable: '--color-error-text', textColorVariable: '--color-error-bg' },
    { name: 'Error Border', variable: '--color-error-border' },
    { name: 'Error Icon', variable: '--color-error-icon' },
  ],
};

const ColorSwatch: React.FC<{ color: typeof colorGroups.Primary[0] }> = ({ color }) => {
  const bgColorStyle = { backgroundColor: `var(${color.variable})` };
  const textColorStyle = color.textColorVariable ? { color: `var(${color.textColorVariable})` } : {};

  return (
    <div className="flex items-center space-x-3 mb-2">
      <div 
        className="w-10 h-10 rounded border border-gray-300 dark:border-gray-600 flex items-center justify-center text-xs font-mono"
        style={{...bgColorStyle, ...textColorStyle}}
      >
        {color.textColorVariable ? 'Aa' : ''} 
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm">{color.name}</div>
        <div className="text-xs font-mono text-gray-500 dark:text-gray-400">{color.variable}</div>
      </div>
    </div>
  );
};

const ColorTokens: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'light' }) => {
  // Note: This component displays colors based on the CURRENT theme applied to the page.
  // Storybook controls can switch themes, but showing both simultaneously here is complex.
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="p-4 bg-[--color-background-default] text-[--color-text-default]">
        {Object.entries(colorGroups).map(([groupName, colors]) => (
          <div key={groupName} className="mb-8">
            <h3 className="text-lg font-semibold mb-3 capitalize border-b pb-1 border-[--color-border-default]">
              {groupName.replace(/([A-Z])/g, ' $1').replace(/^ /, '').replace(/Semantic /, 'Semantic: ')} Colors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
              {colors.map((color) => (
                <ColorSwatch key={color.variable} color={color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorTokens; 