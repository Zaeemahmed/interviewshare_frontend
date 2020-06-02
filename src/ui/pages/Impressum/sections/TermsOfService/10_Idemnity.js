import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function Idemnity() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="10. Indemnity" />
            </H2>
            <P>
                <FormattedMessage defaultMessage="You shall indemnify and hold harmless Maximilian Franz Peter Garmatsch and its directors, officers, employees, agents, stockholders, affiliates, subcontractors and customers from and against all allegations, claims, actions, suits, demands, damages, liabilities, obligations, losses, settlements, judgments, costs and expenses (including without limitation attorneys’ fees and costs) which arise out of, relate to or result from any act or omission of (i) Your use of the Service, Software or third party related products and services and (ii) Your violation of Terms of Service." />
            </P>
        </div>
    );
}
