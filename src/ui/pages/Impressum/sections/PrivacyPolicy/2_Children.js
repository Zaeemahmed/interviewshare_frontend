import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function Children() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="2. Children" />
            </H2>
            <P>
                <FormattedMessage defaultMessage="We are committed to protecting the privacy of children. In furtherance of this commitment, we restrict the use of our Website and Services to persons eighteen (18) years of age or older. We do not knowingly or intentionally collect personal information from children under the age of thirteen (13). If you are under the age of 18, please do not submit any Personally Identifiable Information through the Site. We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce our Privacy Policy by instructing their children never to provide Personally Identifiable Information on the Site without their permission." />
            </P>
        </div>
    );
}
