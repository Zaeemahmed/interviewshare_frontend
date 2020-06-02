import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function Subscriptions() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="4. Subscriptions" />
            </H2>
            <P>
                <FormattedMessage defaultMessage="Some parts of the Service are billed on a subscription basis. Your subscription will renew on the 1st of every month, and will be billed in advance on a recurring schedule on the 20th of every month." />
            </P>
        </div>
    );
}
