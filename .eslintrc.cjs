module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'bb8dd',
  ],
  overrides: [
  ],
  parserOptions: {
    createDefaultProgram: true,
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    '@typescript-eslint/no-shadow': 0,
    'no-plusplus': 0,
  },
};
