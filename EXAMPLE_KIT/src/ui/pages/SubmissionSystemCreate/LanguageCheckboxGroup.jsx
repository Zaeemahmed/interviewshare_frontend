import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckboxGroup from '../../components/ReactHookFormTypes/CheckboxGroup';

export default function LanguageCheckboxGroup({ ...props }) {
    const { t } = useTranslation();

    const languages = [
        { id: 1, value: 'EN', label: 'EN' },
        { id: 1, value: 'DE', label: 'DE' },
        { id: 1, value: 'FR', label: 'FR' },
        { id: 1, value: 'ES', label: 'ES' },
    ];

    const defaultValues = 'EN,DE';

    return (
        <CheckboxGroup
            row={true}
            name="language"
            label={t('Language')}
            options={languages}
            defaultValues={defaultValues}
            {...props}
        />
    );
}
