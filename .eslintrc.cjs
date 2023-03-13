/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',

    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',

    '@vue/eslint-config-standard',
    '@vue/eslint-config-typescript',
    '@vue/typescript/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'never',
      math: 'never'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-button-has-type': ['error', {
      button: true,
      submit: true,
      reset: true
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    'vue/max-attributes-per-line': ['error', { multiline: { max: 1 } }],
    'vue/max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
      ignoreHTMLAttributeValues: true,
      ignorePattern: 'import\\s.+\\sfrom\\s.+;$'
    }],

    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    // 'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
    'no-shadow': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': 'off',
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: ['return', 'if', 'try', 'for'] },
      { blankLine: 'always', prev: ['if', 'case', 'default'], next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],

    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true
      }
    }],
    '@typescript-eslint/comma-dangle': ['error', 'never']
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
