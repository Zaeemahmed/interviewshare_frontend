/* eslint-disable */

/*
Config file from create-react-app
https://serverless-stack.com/chapters/environments-in-create-react-app.html
 */

const shared = {
    sentryDsn: 'https://ca31bc5b7e6945dc81344b11c371c586@sentry.io/1728223',
    oAuthClientId: 'crVRwoZascBxF8BNqz4q8eiyBxl6QTEItTrA0jez',
    oAuthAuthorizationUri:
        'https://backend.dashport.io/id-service/oauth/authorize/',
    oAuthLogoutUri: 'https://backend.dashport.io/auth/logout/',
};

const dev = {};

const prod = {};

const specific = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default { ...shared, ...specific };
