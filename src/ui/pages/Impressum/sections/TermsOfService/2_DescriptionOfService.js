import React from 'react';
import { H2, P } from '../../components/Base';
import { useTranslation } from 'react-i18next';
export default function DescriptionOfService() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>{t('2. Description of Service')}</H2>
            <P>{t('TermsOfService')}</P>
        </div>
    );
}
