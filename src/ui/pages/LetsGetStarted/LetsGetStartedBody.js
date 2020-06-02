import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from '../../components/Base/Base';
import CountSection from './components/CountSection';

const formatValues = {
    green: chunks => (
        <Text
            color="green"
            fontSize={{ _: '16px', lg: '24px' }}
            fontWeight="400"
        >
            {chunks} <br />
        </Text>
    ),
    linebreak: <br />,
    a: chunks => (
        <Text
            as="a"
            href="https://maximiliangarmatsch.com/intro"
            target="_blank"
            color="green"
        >
            {chunks} <br />
        </Text>
    ),
    calendly: chunks => (
        <Text
            as="a"
            href="https://calendly.com/maximilian-garmatsch"
            target="_blank"
            color="green"
        >
            {chunks} <br />
        </Text>
    ),
};
export default function LetsGetStartedBody() {
    return (
        <Box
            maxHeight={{ _: 'calc(100% - 210px)', md: 'auto' }}
            p="10px"
            pt="0"
            css={`
                @media screen and (max-width: 375px) {
                    overflow: scroll;
                }
            `}
        >
            <CountSection number="1">
                <FormattedMessage
                    defaultMessage="
                                    <green>Free introdution</green>
                                    1-on-1 meeting: {linebreak}
                                    <a>maximiliangarmatsch.com/intro</a>"
                    values={formatValues}
                />
            </CountSection>
            <CountSection number="2">
                <FormattedMessage
                    defaultMessage="
                                    <green>Pay-as-you-go consulting</green>
                                    <calendly>Super easy booking</calendly>
                                    with PayPal purchase protection."
                    values={formatValues}
                />
            </CountSection>
            <CountSection number="3">
                <FormattedMessage
                    defaultMessage="
                                    <green>Individual Projects</green>
                                    Designed to fit your budget. {linebreak}
                                    "
                    values={formatValues}
                />
            </CountSection>
        </Box>
    );
}
