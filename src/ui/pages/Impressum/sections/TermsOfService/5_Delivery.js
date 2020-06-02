import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function Delivery() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="5. Delivery" />
            </H2>
            <P>
                <FormattedMessage defaultMessage="Maximilian Franz Peter Garmatsch strives for a same day response to your “Support” Service requests. However, due to support request volume and client emergencies, a 1 (one) to 2 (two) business day response time may be necessary." />
            </P>
            <P>
                <FormattedMessage defaultMessage="For Service not including Support, Maximilian Franz Peter Garmatsch strives to book appointments and complete projects within four (4) weeks of payment of Service. However, due to volume of client projects, a four (4) to six (6) week timeline may be necessary." />
            </P>
        </div>
    );
}
