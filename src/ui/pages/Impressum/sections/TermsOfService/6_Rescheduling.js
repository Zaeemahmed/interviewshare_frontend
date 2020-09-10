import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function Rescheduling() {
    const { t } = useTranslation();
    return (
        <div>
            <H2>{t('6. Rescheduling')}</H2>
            <P>
                {t(
                    'We require a 24 hour notice for rescheduling or cancelling appointments. If you do not contact us to cancel or reschedule before the 24 hour period, a cancellation fee of €50 will be charged.'
                )}
            </P>
        </div>
    );
}
