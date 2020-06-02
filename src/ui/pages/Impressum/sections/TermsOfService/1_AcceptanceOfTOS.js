import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function AcceptanceOfTOS() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="1. Acceptance of Terms of Service" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="Please read these “Terms of Service” carefully before using
                <span>https://maximiliangarmatsch.com</span> operated by
                Maximilian Franz Peter Garmatsch. Your use of the Service is
                conditioned on your acceptance of and compliance with these
                Terms of Service. These Terms of Service apply to all visitors,
                users and others who use the Service. By using the Service you
                agree to be bound by these Terms of Service. If you disagree
                with any part of the Terms of Service then you may not use the
                Service."
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
