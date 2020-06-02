import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function CommunicationWithYou() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="3. Communication With You" />
            </H2>
            <P>
                <FormattedMessage defaultMessage="Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to our terms of service and policies." />
            </P>
        </div>
    );
}
