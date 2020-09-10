import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function TermsOfService() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>
                {t(`1. Information Collection,${(<br />)} Use, and Sharing`)}
            </H2>
            <P>
                {t(
                    `When you use Maximilian Franz Peter Garmatsch Service, you are subject and bound to the <span>Terms of Service.`
                )}
            </P>
        </div>
    );
}
