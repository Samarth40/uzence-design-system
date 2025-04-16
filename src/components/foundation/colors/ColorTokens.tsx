import React from 'react';

interface ColorToken {
  name: string;
  value: string;
  description: string;
}

const colorTokens: ColorToken[] = [
  { name: '--color-primary', value: '#0066cc', description: 'Main brand color' },
  { name: '--color-secondary', value: '#6c757d', description: 'Supporting brand color' },
  { name: '--color-tertiary', value: '#6610f2', description: 'Accent color' },
  { name: '--color-success', value: '#28a745', description: 'Positive actions/results' },
  { name: '--color-info', value: '#17a2b8', description: 'Informational messages' },
  { name: '--color-warning', value: '#ffc107', description: 'Cautionary messages' },
  { name: '--color-error', value: '#dc3545', description: 'Error states/messages' },
];

export const ColorTokens: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {colorTokens.map((token) => (
        <div
          key={token.name}
          className="p-4 border rounded-lg shadow-sm"
        >
          <div
            className="w-full h-16 rounded-md mb-2"
            style={{ backgroundColor: token.value }}
          />
          <div className="space-y-1">
            <p className="font-mono text-sm">{token.name}</p>
            <p className="text-sm text-gray-600">{token.value}</p>
            <p className="text-sm">{token.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}; 