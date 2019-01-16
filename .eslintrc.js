module.exports = {
  'extends': [
    'airbnb',
    'prettier'
  ],
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  "plugins": [
    "prettier"
  ],
  'rules': {
    /**
      * Prettier plugin errors will result in eslint errors 
      * Further info: [https://prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier]
    */
    "prettier/prettier": "error",

    /**
       * Forbid deps not listed in package.json.
       * Further info: [https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md]
       * Change:  Allow import of devDeps.
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true
      }
    ],

    /**
       * Forbid long lines of code.
       * Further info: [https://eslint.org/docs/rules/max-len]
       * Change:  Warn, instead of error. Allow long comments.
     */
    'max-len': [
      'warn',
      {
        'code': 120,
        'ignoreComments': true
      }
    ],

    /**
      * Forbid promise reject with non-error returns.
      * Further info: [https://eslint.org/docs/rules/prefer-promise-reject-errors]
      * Change:  Warn, instead of error.
    */
    'prefer-promise-reject-errors': 'warn',

    /**
      * Require modules with a single export to use a default export.
      * Further info: [https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md]
      * Change:  Don't require modules with a single export to use a default export.
    */
    'import/prefer-default-export': 'off',

    /**
      * Forbid default exports.
      * Further info: [https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md]
      * Change:  Activate this rule.
    */
    'import/no-default-export': 'error',
  }
}