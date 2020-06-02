import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Text } from '../../../components/Base/Base';
import { H1, P } from '../components/Base';
import InformationCollection from './PrivacyPolicy/1_InformationCollection';
import Children from './PrivacyPolicy/2_Children';
import CommunicationWithYou from './PrivacyPolicy/3_CommunicationWithYou';
import AccessAndControl from './PrivacyPolicy/4_AccessAndControl';
import SecurityAndInformation from './PrivacyPolicy/5_SecurityAndInformation';
import DataRetention from './PrivacyPolicy/6_DataRetention';
import LinksToOtherWebsites from './PrivacyPolicy/7_LinksToOtherWebsites';
import TermsOfService from './PrivacyPolicy/8_TermsOfService';
import ChangesToPrivacyPolicy from './PrivacyPolicy/9_ChangesOfPrivacyPolicy';

export default function TextPrivacyPolicy() {
    return (
        <div>
            <H1>
                <FormattedMessage defaultMessage="Privacy Policy" />
            </H1>
            <P>
                <FormattedMessage
                    defaultMessage="This privacy policy discloses the privacy practices for <a>https://maximiliangarmatsch.com</a>  owned and operated by Maximilian Franz Peter Garmatsch. This privacy policy applies solely to information collected by <a>https://maximiliangarmatsch.com</a>. It will notify you of the following:{linebreak}
                                    What Personally Identifiable and Proprietary Information is collected from you through the web site, how it is used and with whom it may be shared. What choices are available to you regarding the use of your data. The security procedures in place to protect the misuse of your information.How you can correct any inaccuracies in the information.
                                    "
                    values={{
                        a: chunks => (
                            <Text
                                as={Link}
                                color="white"
                                css={`
                                    text-decoration: none;
                                    color: #fff !important;
                                `}
                                to="/"
                            >
                                {chunks}
                            </Text>
                        ),
                        linebreak: (
                            <>
                                <br />
                                <br />
                            </>
                        ),
                    }}
                />
            </P>
            <InformationCollection />
            <Children />
            <CommunicationWithYou />
            <AccessAndControl />
            <SecurityAndInformation />
            <DataRetention />
            <LinksToOtherWebsites />
            <TermsOfService />
            <ChangesToPrivacyPolicy />
        </div>
    );
}
