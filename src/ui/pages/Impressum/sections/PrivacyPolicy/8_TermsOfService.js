import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function TermsOfService() {
    return (
        <div>
            <H2>
                <FormattedMessage
                    defaultMessage="1. Information Collection,{linebreak} Use, and Sharing"
                    values={{
                        linebreak: <br />,
                    }}
                />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="When you use Maximilian Franz Peter Garmatsch Service, you are subject and bound to the <span>Terms of Service.</span>"
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
