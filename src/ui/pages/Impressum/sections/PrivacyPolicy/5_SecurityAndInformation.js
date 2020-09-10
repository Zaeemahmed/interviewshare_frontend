import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../components/Base';

export default function SecurityAndInformation() {
    const { t } = useTranslation();

    return (
        <div>
            <H2>{t(`5. Security & Information ${(<br />)} Protection`)}</H2>
            <P>
                {t(`The security of your Personally Identifiable and Proprietary Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. When you submit sensitive information via the website, we take precautions to protect your information both online and offline.${(
                    <br />
                )}
Wherever we collect sensitive information (such as credit card data or database files), that information is encrypted and transmitted to us through our third party service providers in a secure way. You can verify this by looking for a closed lock icon at the top or bottom of your web browser, or looking for “https” at the beginning of the address of the web page.${(
                    <br />
                )}
Only employees, partners, or contractors who need the information to perform a specific job (for example, software engineering or customer service) are granted access to Personally Identifiable and Proprietary Information. The Personally Identifiable and Proprietary Information are kept in a secure environment with our third party service providers and in our secure hardware devices. While we use encryption to protect sensitive information transmitted online, we also protect your information offline.${(
                    <br />
                )}
We strive to use commercially acceptable means to protect your Personal and Proprietary Information, although we cannot guarantee its absolute security.{linebreak}
If we learn of a security breach, we will inform you of the occurrence of the breach in accordance with applicable law.{linebreak}
Learn more about Security Overview.`)}
            </P>
        </div>
    );
}
