module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module-resolver',
    {
      root: '.',
      alias: {
        '@components': './src/components',
        '@hooks': './src/hooks',
        '@screens': './src/screens',
        '@routes': './src/routes',
      },
    },
  ],
};
