import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../../../components/Base/Base';

export default function TextPartnerRole() {
    return (
        <Text color="green">
            <FormattedMessage defaultMessage="Developer since 2001" />
            <br />
            <FormattedMessage defaultMessage="Professional since 2009" />
            <br />
            <FormattedMessage defaultMessage="Team Lead since 2018" />
            <br />
        </Text>
    );
}
