import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../../../components/Base/Base';

export default function TextMeetTheRoles({ bottom }) {
    return (
        <Text
            as="p"
            textAlign="center"
            position="absolute"
            left="50%"
            css={`
                transform: translateX(-50%);
            `}
            bottom={bottom}
        >
            <FormattedMessage defaultMessage="Meet the roles in our team!" />
        </Text>
    );
}
