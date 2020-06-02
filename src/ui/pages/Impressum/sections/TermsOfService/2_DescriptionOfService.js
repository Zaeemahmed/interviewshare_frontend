import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function DescriptionOfService() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="2. Description of Service" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="The “Service” allows you access to trained software professionals and third party services and products to provide:{linebreak}
a) Software Consulting & Advice{linebreak}
b) Setup & Configuration of Software Implementation{linebreak}
c) Setup & Support of Custom Reports{linebreak}
d) Setup & Support of 3rd Party Software Integrations{linebreak}
e) Data Formatting & Data Migrations{linebreak}
f) Training{linebreak}
g) Software Development{linebreak}
h) UI / UX Design{linebreak}
Any new features added to or augmenting the Service are also subject to these Terms of Service.
All live communication with Maximilian Franz Peter Garmatsch is orchestrated via the online conferencing tool <span>Google Hangouts Meet</span>.
You are responsible for your internet connection, transfer of database files, transfer of Personally Identifiable and Proprietary Information and any other information relevant to your purchase, and system requirements (shown here) to use the Service."
                    values={{
                        span: chunks => (
                            <Text as="span" color="white">
                                {chunks}
                            </Text>
                        ),
                        linebreak: <br />,
                    }}
                />
            </P>
        </div>
    );
}
