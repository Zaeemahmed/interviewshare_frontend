import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function DataRetention() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="6. Data Retention" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="We will permanently delete your database files, contact lists, accounts list, etc. at least 30 days after we have successfully converted your data. We will give you access to your data during that time and you will be responsible for acquiring your data. Login Credentials, API keys, business processes, and other Personally Identifiable and Proprietary Information will be stored on our service provider’s systems until you request this data to be deleted. However, we will deny your request to delete data retained and used as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements as follows:{linebreak}
Billing information is retained for a period of 7 years. Information on legal transactions between you and Maximilian Franz Peter Garmatsch is retained for a period of 7 years"
                    values={{
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
