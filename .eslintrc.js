module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'airbnb-base',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'es5',
          printWidth: 100,
          tabWidth: 2,
        },
      ],
    },
  }
  