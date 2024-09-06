module.exports = {
  parser: '@typescript-eslint/parser', // Use the parser for TypeScript
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // Customize your rules if necessary
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  env: {
    browser: true,
    es2021: true,
  },
};
