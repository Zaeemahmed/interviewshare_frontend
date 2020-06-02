import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function Purchases() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="3. Purchases" />
            </H2>
            <P>
                <FormattedMessage defaultMessage="If you wish to purchase the Service, you may be asked to supply certain information relevant to your Purchase, including, but not limited to, your name, business name, address, email address, telephone number, API (application programming interface) keys, usernames and passwords, credit card details, database files, graphics, proprietary business processes and any other Personally Identifiable and Proprietary Information needed to fulfill the Service. Any changes made to your initial request before delivery of the Service may result in additional charges. After delivery of the Service any changes or additions to the information provided above will result in additional charges. If any third party applications or services are needed to use the Service and you request our assistance with installation, configuration or troubleshooting of these tools, these services will be estimated at that time." />
            </P>
        </div>
    );
}
