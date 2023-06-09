module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': ['./src/components'],
          '@screens': ['./src/screens'],
          '@hooks': ['./src/hooks'],
          '@lib': ['./src/lib'],
          '@navigation': ['./src/navigation'],
          '@recoil': ['./src/recoil'],
        },
      },
    ],
  ],
};
