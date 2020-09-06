import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from '../locales';

const language = (
    (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
    navigator.language || // All browsers
    navigator.userLanguage
).substring(0, 2); // IE <= 10
const userLocale = ['de', 'en'].includes(language) ? language : 'en';
const messages = translations[userLocale];

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: messages,
            },
        },
        lng: userLocale,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
    });

function LocaleProvider({ children }) {
    //TODO: get dynamic label translations via GraphQL Query

    return children;
}

export default LocaleProvider;
