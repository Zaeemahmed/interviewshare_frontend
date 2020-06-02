import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function DomainAndWebsiteHosting() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="4. Domain & Website Hosting Services" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="Our domain and web hosting service providers maintain the following protocols and certifications: SSL (<span>Secure Sockets Layer</span>), SPF (<span>Sender Policy Framework</span>), DMARC (<span>Domain-based Message Authentication, Reporting and Conformance</span>), and DKIM (<span>DomainKeys Identified Mail</span>)."
                    values={{
                        span: chunks => (
                            <Text as="span" color="white">
                                {chunks}
                            </Text>
                        ),
                    }}
                />
            </P>
        </div>
    );
}
