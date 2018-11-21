[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# Eslint config for logistics
### Config contents
The config includes: 

 - [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
 - [prettier integrated with eslint](https://prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
 - Our custom rules

### How to use
You need to install the config itself. 
Then use the provided command to install all the peerDeps.
1. `npm i -D @dh/eslint-config-logistics`
1. `yarn add -D @dh/eslint-config-logistics`
2. `npx install-peerdeps --dev eslint-config-airbnb`
3. Put `"extends": ["eslint-config-logistics"]` in your `.eslintrc`
