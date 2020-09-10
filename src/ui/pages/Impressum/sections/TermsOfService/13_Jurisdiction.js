import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function Jurisdiction() {
    const { t } = useTranslation();
    const span = chunks => (
        <Text as="span" color="white">
            {chunks}
        </Text>
    );
    return (
        <div>
            <H2>{t('13. Jurisdiction')}</H2>
            <P>
                {t(`THE TERMS OF SERVICE SHALL BE GOVERNED BY THE LAWS OF FEDERAL REPUBLIC OF GERMANY WITHOUT REGARD FOR CHOICE OF LAW PROVISIONS. THE DISTRICT COURT OF FRANKFURT AM MAIN HAS EXCLUSIVE JURISDICTION TO SETTLE ANY DISPUTE ARISING OUT OF OR IN CONNECTION WITH “TERMS OF SERVICE”
${(<br />)}
    If you have questions about our Terms of Service, please contact us via email ${(
        <span>mail@maximiliangarmatsch.com.</span>
    )}`)}
            </P>
        </div>
    );
}
