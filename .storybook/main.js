module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  refs: {
    '@chakra-ui/react': {
      disable: true
    }
  },
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: false,
        docs: false
      }
    },
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@chakra-ui/storybook-addon'
  ],
  core: {
    builder: 'webpack5'
  }
};
