import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import translations from '@/locales';

const userLocale = window.location.search.replace('?locale=', '') || 'en';
const messages = translations[userLocale];

function LocaleProvider({ children }) {
    return (
        <IntlProvider locale={userLocale} messages={messages}>
            {children}
        </IntlProvider>
    );
}

LocaleProvider.propTypes = {
    children: PropTypes.node,
};

export default LocaleProvider;
