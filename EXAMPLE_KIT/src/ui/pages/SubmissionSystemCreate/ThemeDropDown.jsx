import React from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../../components/ReactHookFormTypes/DropDown';

export default function ThemeDropDown(props) {
    const { t } = useTranslation();

    const themeOptions = [
        { id: 1, value: 'Theme1', label: 'Theme1' },
        { id: 2, value: 'Theme2', label: 'Theme2' },
    ];

    return (
        <DropDown
            name="theme"
            id="theme"
            placeholder={t('ThemePlaceholder')}
            label={t('ThemeLabel')}
            options={themeOptions}
            {...props}
        />
    );
}
