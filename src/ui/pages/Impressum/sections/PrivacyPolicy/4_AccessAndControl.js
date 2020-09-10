import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function AccessAndControl() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>
                {t(
                    `4. Your Access to and Control ${(<br />)} Over Information`
                )}
            </H2>
            <P>
                {t(`You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address given on our website :See what data we have about you, if any.${(
                    <br />
                )}
Change/correct any data we have about you.Have us delete any data we have about you, except data related to our Data Retention policy stated in section 6.Express any concern you have about our use of your data.`)}
            </P>
        </div>
    );
}
