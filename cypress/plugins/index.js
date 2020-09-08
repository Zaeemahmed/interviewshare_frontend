module.export = (on, config) => {
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('cypress-react-unit-test/plugins/react-scripts')(on, config);

    return config;
};
