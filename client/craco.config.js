const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@body-background': '#181818',
              '@primary-color': '#663399', // primary color for all components
              '@link-color': '#663399', // link color
              '@font-size-base': '14px', // major text font size
              '@font-family': 'Roboto Condensed, sans-serif',
              '@menu-dark-item-active-bg': 'transparent',
              '@border-radius-base': '3px', // major border radius
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};