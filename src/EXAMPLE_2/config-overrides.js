/* global require, module */
const path = require('path');

const {
    override,
    useBabelRc,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    addBundleVisualizer,
} = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

// Fixes PDF.js Warning
// https://github.com/arackaf/customize-cra/issues/159
// const enableRequireEnsure = () => config => {
//     config.output.globalObject = 'this';
//     config.module.rules[0].parser.requireEnsure = true;
//     return config;
// };

module.exports = override(
    config => {
        // enable vue-style absolute import paths, e.g. `import '@/components/Component.js'`
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },

    useBabelRc(), // uses the `.babelrc` file to be congruent with other tools consuming the file (e.g. i18n)

    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    fixBabelImports('lodash', {
        libraryDirectory: '',
        camel2DashComponentName: false,
    }),

    // change antd less variables
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#5ad192' },
    }),

    addDecoratorsLegacy(),

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE === 'true' && addBundleVisualizer(),

    addReactRefresh({ disableRefreshCheck: true })

    // enableRequireEnsure()
);
