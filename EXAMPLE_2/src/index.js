import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { handleOAuthLogin, isOAuthSuccessPage } from '@/api/oAuth';
import config from '@/config/config';
import App from './App';

if (process.env.REACT_APP_STAGE === 'production') {
    Sentry.init({ dsn: config.sentryDsn });
}

if (isOAuthSuccessPage()) {
    handleOAuthLogin();
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}
