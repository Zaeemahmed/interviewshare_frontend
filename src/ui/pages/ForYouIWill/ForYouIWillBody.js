import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from '../../components/Base/Base';
import SectionCheckpoint from './components/SectionCheckpoint';

const messageValues = {
    first: chunks => (
        <Text color="green" fontSize="23px" lineHeight="18px" fontWeight="400">
            {chunks}
        </Text>
    ),
    green: chunks => <Text color="green">{chunks}</Text>,
    linebreak: <br />,
    a: chunks => (
        <Text as="a" textDecoration="underline" href="#" color="green">
            {chunks}
        </Text>
    ),
};
export default function ForYouIWillBody() {
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
            <SectionCheckpoint>
                <FormattedMessage
                    defaultMessage="
                        <first>Understand</first> your needs
                        <green>in days.</green>
                        My budget and time estimations will allow confident decision making."
                    values={messageValues}
                />
            </SectionCheckpoint>
            <SectionCheckpoint>
                <FormattedMessage
                    defaultMessage="
                        <first>Create</first> a prototype
                        <green>in weeks.</green>
                        My first goal is a presentable foundation that we can build on. I’m an engineer first and an entrepreneur second.
                        {linebreak}
                        "
                    values={messageValues}
                />
            </SectionCheckpoint>
            <SectionCheckpoint>
                <FormattedMessage
                    defaultMessage="
                        <first>Manage</first> your project
                        <green>long-term</green>.
                        You want to continously add components or scale your product?
                        I will lead the digital team that will do it."
                    values={messageValues}
                />
            </SectionCheckpoint>
        </Box>
    );
}
