import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  core: {
    disableTelemetry: true,
  },
  // FYI: disabling this option makes storybook autodoc getting random amount
  // of props from component type: only specified or all props that could be more than 100.
  typescript: {
    reactDocgen: 'react-docgen',
    skipCompiler: true,
    check: false,
  },
};

export default config;
