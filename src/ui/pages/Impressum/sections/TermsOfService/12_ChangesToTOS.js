import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function ChangesToTOS() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="12. Changes to Terms of Service" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="Maximilian Franz Peter Garmatsch Terms of Service may change from time to time and all updates will be posted on this page <a>https://maximiliangarmatsch.com/impressum</a>. We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material we will try to provide at least days’ notice via email prior to any new terms taking effect.
What constitutes a material change will be determined at our sole discretion. Your continued use of the Service establishes your agreement to such changes to these Terms of Service. Your only restoration, if you do not agree to these Terms of Service, is to stop use of the Service.
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
