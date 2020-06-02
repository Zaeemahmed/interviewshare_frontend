/* eslint-disable */
const { override, useBabelRc } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

module.exports = override(
    addReactRefresh({ disableRefreshCheck: true }),
    useBabelRc(), // uses the `.babelrc` file to be congruent with other tools consuming the file (e.g. i18n)
);
