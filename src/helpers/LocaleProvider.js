import React from 'react';
import { IntlProvider } from 'react-intl';
import { translations } from '../locales';

const language = (
    (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
    navigator.language || // All browsers
    navigator.userLanguage
).substring(0, 2); // IE <= 10
const userLocale = ['de', 'en'].includes(language) ? language : 'en';
const messages = translations[userLocale];

function LocaleProvider({ children }) {
    return (
        <IntlProvider locale={userLocale} messages={messages}>
            {children}
        </IntlProvider>
    );
}

export default LocaleProvider;
