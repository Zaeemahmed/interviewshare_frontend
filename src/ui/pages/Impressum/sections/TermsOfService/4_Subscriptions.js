import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function Subscriptions() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>{t('4. Subscriptions')}</H2>
            <P>
                {t(
                    'Some parts of the Service are billed on a subscription basis. Your subscription will renew on the 1st of every month, and will be billed in advance on a recurring schedule on the 20th of every month.'
                )}
            </P>
        </div>
    );
}
