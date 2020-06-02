import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function PaymentInformation() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="1. Payment Information" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="Your credit card details processed and stored with our merchant and payment gateway service providers comply with the PCI DSS (<span>Payment Card Industry Data Security Standards</span>).
"
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
