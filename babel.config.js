module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          screens: './src/screens',
          context: './src/context',
          utils: './src/utils',
          routes: './src/routes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
