[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# Eslint config for logistics
### Config contents
The config includes: 

 - [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
 - [prettier integrated with eslint](https://prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
 - react-hooks rules
 - Our custom rules

### How to use
You need to have `eslint`, `prettier` and `babel-eslint` installed.
Then use the provided command to install the config itself.
1. `npm i -D @logistics/eslint-config` or `yarn add -D @logistics/eslint-config`
2. Put `"extends": ["@logistics/eslint-config"]` or `"extends": ["@logistics"]` in your `.eslintrc`

**.eslintrc**

```json
{
  "extends": [
    "@logistics"
  ]
}
```

### Install peerDeps
You can use [install-peerdeps package](https://www.npmjs.com/package/install-peerdeps) to install all the necessary peerDeps.

`npx install-peerdeps @logistics/eslint-config --auth %YOUR_NPM_TOKEN% --registry https://nexus.usehurrier.com/repository/logistics-npm-group/`
