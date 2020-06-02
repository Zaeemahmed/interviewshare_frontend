import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function UserAccountAccess() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="3. User Account Access" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="Maximilian Franz Peter Garmatsch may need to collect your user login credentials, in order to provide the “Service”. When we collect your login credentials, we use a third party password management service called <span>LastPass</span> to manage this sensitive data. Your login credentials stored in our password management service uses the leading encryption algorithms: 256 bit AES (<span>Advanced Encryption Standard</span>) encryption with PBKDF2 (<span>Password-Based Key Derivation Function 2</span>) SHA-256 (<span>Secure Hash Algorithm 2</span>) and salted hashes to protect your data in the cloud. When we access the password management service, we use FIDO U2F (<span>Fast IDentity Online Universal 2nd Factor</span>) keys with strong passwords while logged in on an authorized device connected to our VPN service.{linebreak}
Maximilian Franz Peter Garmatsh’s internal PINs, passwords and multi-factor account authentication methods are updated at least once every 180 days. All our passwords are unique, long, complex, and randomly auto-generated."
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
