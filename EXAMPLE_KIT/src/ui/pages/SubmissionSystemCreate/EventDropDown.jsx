import React from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../../components/ReactHookFormTypes/DropDown';

export default function EventDropDown(props) {
    const { t } = useTranslation();

    const eventOptions = [
        { id: 1, value: 'Event1', label: 'Event1' },
        { id: 2, value: 'Event2', label: 'Event2' },
    ];

    return (
        <DropDown
            name="event"
            id="event"
            placeholder={t('EventPlaceholder')}
            label={t('Event')}
            options={eventOptions}
            {...props}
        />
    );
}
