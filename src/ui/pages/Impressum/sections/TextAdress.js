import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../../components/Base/Base';

export default function TextAdress() {
    const { t } = useTranslation();

    return (
        <Text fontSize={{ xxl: '18px' }} color="white" marginBottom="1.5rem">
            {t('Maximilian Garmatsch')}
            <br />
            {t('Bornheimer Landstrasse 37')}
            <br />
            {t('60316 Frankfurt am Main"')}
            <br />
            {t('mail@maximiliangarmatsch.com')}
            <br />
        </Text>
    );
}
