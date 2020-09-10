import React from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../../components/ReactHookFormTypes/DropDown';

export default function SystemTypeDropDown(props) {
    const { t } = useTranslation();

    const systemTypeOptions = [
        { id: 1, value: 'System1', label: 'System1' },
        { id: 2, value: 'System2', label: 'System2' },
    ];

    return (
        <DropDown
            name="systemType"
            id="systemType"
            placeholder={t('SystemTypePlaceholder')}
            label={t('SystemType')}
            options={systemTypeOptions}
            {...props}
        />
    );
}
