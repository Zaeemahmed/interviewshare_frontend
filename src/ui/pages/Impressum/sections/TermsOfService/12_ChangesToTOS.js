import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function ChangesToTOS() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>{t('12. Changes to Terms of Service')}</H2>
            <P>
                {t(
                    'Maximilian Franz Peter Garmatsch Terms of Service may change from time to time and all updates will be posted on this page https://maximiliangarmatsch.com/impressum. We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material we will try to provide at least days’ notice via email prior to any new terms taking effect.<br /><br /> What constitutes a material change will be determined at our sole discretion. Your continued use of the Service establishes your agreement to such changes to these Terms of Service. Your only restoration, if you do not agree to these Terms of Service, is to stop use of the Service.'
                )}
            </P>
        </div>
    );
}
