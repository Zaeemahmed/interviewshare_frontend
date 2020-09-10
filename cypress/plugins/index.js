module.exports = (on, config) => {
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('cypress-react-unit-test/plugins/react-scripts')(on, config);

    // provides date two days away from today
    on('task', {
        date(byHowMuch) {
            const today = new Date();

            today.setDate(today.getDate() - byHowMuch);

            const formatDate = `${today.getDate()}/${today.getMonth() +
                1}/${today.getFullYear()}`;

            return formatDate;
        },
    });

    return config;
};
