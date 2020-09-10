import React from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../../components/ReactHookFormTypes/DropDown';

export default function LanguageDropDown(props) {
    const { t } = useTranslation();

    const languageOptions = [
        { id: 1, value: 'English', label: 'English' },
        { id: 2, value: 'German', label: 'German' },
    ];

    return (
        <DropDown
            name="language"
            id="language"
            placeholder={t('LanguagePlaceholder')}
            label={t('Language')}
            options={languageOptions}
            {...props}
        />
    );
}
