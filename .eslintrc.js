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
  plugins: [
    ['import'],
    'json', // json 플러그인 추가
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
        endOfLine: 'lf',
      },
    ],
    'import/no-unresolved': 'error', // 이 줄을 추가하여 import/no-unresolved 규칙을 비활성화합니다.
    'no-console': 'off', // 콘솔 로그 허용
    'no-alert': 'off', // alert 허용
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
