import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {
      "strictMode": false
    }
  },
  "docs": {
    "autodocs": "tag",
    "defaultName": "Documentation"
  },
  "staticDirs": ["../public", "../dist"],
  "core": {
    "builder": "@storybook/builder-vite",
    "disableTelemetry": true
  },
  "typescript": {
    "check": true,
    "reactDocgen": 'react-docgen-typescript',
  },
  "viteFinal": async (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        sourcemap: false,
        minify: "terser",
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      },
      server: {
        ...config.server,
        fs: {
          strict: false,
          allow: ['..']
        }
      }
    };
  }
};

export default config;