import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';

export default function TextAdress() {
    return (
        <Text fontSize={{ xxl: '18px' }} color="white" marginBottom="1.5rem">
            <FormattedMessage defaultMessage="Maximilian Garmatsch" />
            <br />
            <FormattedMessage defaultMessage="Bornheimer Landstrasse 37" />
            <br />
            <FormattedMessage defaultMessage="60316 Frankfurt am Main" />
            <br />
            <FormattedMessage defaultMessage="mail@maximiliangarmatsch.com" />
            <br />
        </Text>
    );
}
