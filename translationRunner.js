const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
    messagesDirectory: 'translations/messages/',
    translationsDirectory: 'src/locales/',
    languages: ['en', 'de'],
});
