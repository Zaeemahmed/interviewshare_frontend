import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function NetworkAccess() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="2. Network Access" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="Maximilian Garmatsch’s associates are located throughout the world and connect to the internet through our service provider’s VPN (<span>virtual private network</span>) service, which is SSL (<span>secure sockets layer</span>) secured with 256-bit encryption.
"
                    values={{
                        span: chunks => (
                            <Text as="span" color="white">
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
