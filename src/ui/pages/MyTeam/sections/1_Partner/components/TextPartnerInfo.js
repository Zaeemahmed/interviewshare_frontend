import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../../../components/Base/Base';

export default function TextPartnerInfo() {
    return (
        <Text color="green">
            <Text color="white">
                <FormattedMessage defaultMessage="Your Partner" />
                <br />
            </Text>
            <FormattedMessage defaultMessage="Maximilian Garmatsch, B.Sc" />
            <br />
            <FormattedMessage defaultMessage="Senior Web Engineer" />
            <br />
            <FormattedMessage defaultMessage="Product Manager" />
            <br />
        </Text>
    );
}
