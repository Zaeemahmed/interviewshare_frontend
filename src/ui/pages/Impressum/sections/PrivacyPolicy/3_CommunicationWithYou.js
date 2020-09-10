import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function CommunicationWithYou() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>{t('3. Communication With You')}</H2>
            <P>
                {t(
                    'Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to our terms of service and policies.'
                )}
            </P>
        </div>
    );
}
