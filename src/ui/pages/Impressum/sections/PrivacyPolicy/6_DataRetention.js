import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function DataRetention() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>{t('6. Data Retention')}</H2>
            <P>
                {t(`We will permanently delete your database files, contact lists, accounts list, etc. at least 30 days after we have successfully converted your data. We will give you access to your data during that time and you will be responsible for acquiring your data. Login Credentials, API keys, business processes, and other Personally Identifiable and Proprietary Information will be stored on our service provider’s systems until you request this data to be deleted. However, we will deny your request to delete data retained and used as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements as follows: ${(
                    <br />
                )}
Billing information is retained for a period of 7 years. Information on legal transactions between you and Maximilian Franz Peter Garmatsch is retained for a period of 7 years`)}
            </P>
        </div>
    );
}
