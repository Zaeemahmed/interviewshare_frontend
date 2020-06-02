import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function Rescheduling() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="6. Rescheduling" />
            </H2>
            <P>
                <FormattedMessage defaultMessage="We require a 24 hour notice for rescheduling or cancelling appointments. If you do not contact us to cancel or reschedule before the 24 hour period, a cancellation fee of €50 will be charged." />
            </P>
        </div>
    );
}
