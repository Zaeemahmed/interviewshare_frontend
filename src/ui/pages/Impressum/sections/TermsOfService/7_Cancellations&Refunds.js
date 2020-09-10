import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function CancellationsAndRefunds() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>{t('7. Cancellations & Refunds')}</H2>
            <P>
                {t(
                    'Subscriptions can be cancelled at any time. Maximilian Franz Peter Garmatsch reserves the right to refuse requests for refund. Maximilian Franz Peter Garmatsch will assess refund or credit requests based on their merits. If your return is approved, we will initiate a full or partial refund to your credit card (or original method of payment). You will receive the full or partial credit within a certain amount of days, depending on your card issuer’s policies.'
                )}
            </P>
        </div>
    );
}
