import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function AccessAndControl() {
    return (
        <div>
            <H2>
                <FormattedMessage
                    defaultMessage="4. Your Access to and Control {linebreak} Over Information"
                    values={{
                        linebreak: <br />,
                    }}
                />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address given on our website :See what data we have about you, if any.{linebreak}
Change/correct any data we have about you.Have us delete any data we have about you, except data related to our Data Retention policy stated in section 6.Express any concern you have about our use of your data.
"
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
