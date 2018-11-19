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
    "prettier/prettier": "error",
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true
      }
    ],
    'max-len': [
      'warn',
      {
        'code': 120,
        'ignoreComments': true
      }
    ],
    'quotes': [
      'error',
      'double',
      'avoid-escape'
    ],
    'prefer-promise-reject-errors': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-named-as-default': 'warn',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': [
      'warn',
      'always',
      {
        'ignoreClassFields': true
      }
    ]
  }
}