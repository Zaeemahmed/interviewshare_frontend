import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function ChangesToPrivacyPolicy() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="9. Changes to Privacy Policy" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="Maximilian Franz Peter Garmatschs privacy policy may change from time to time and all updates will be posted on this page <a>https://coderconsulting.de/impressum</a>. We reserve the right, at our sole discretion, to modify or replace this Privacy Policy at any time. If a revision is material we will try to provide at least days’ notice via email prior to any new privacy policies taking effect. What constitutes a material change will be determined at our sole discretion. Your continued use of the Service establishes your agreement to such changes to the Privacy Policy. Your only restoration, if you do not agree to the terms of this Privacy Policy, is to stop use of the Service.{linebreak}
If you have questions about our <span>Security Overview</span> or Privacy Policy, please contact us via email <span>mail@maximiliangarmatsch.com</span>"
                    values={{
                        span: chunks => (
                            <Text as="span" color="white">
                                {chunks}
                            </Text>
                        ),
                        a: chunks => (
                            <Text
                                as={Link}
                                color="white"
                                css={`
                                    text-decoration: none;
                                    color: #fff !important;
                                `}
                                to="/impressum"
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
        </div>
    );
}
