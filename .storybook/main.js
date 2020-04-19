module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],

  webpackFinal: async (config) => {
    config.resolve.extensions.push(".vue");

    // Style
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ]
    });

    return config;
  },
};
