import React from 'react';
import IconCheckpoint from '../Icons/IconCheckpoint';
import { Box, Text } from '../../../components/Base/Base';
import Line from './Line';

export default function SectionTemplateDesktop({
    id,
    position,
    icon,
    headline,
    quote,
    tools,
}) {
    return (
        <Box height="70vh" position="relative" id={id}>
            <Line size="3px" position="vertical" length="70vh" left="50%" />
            <Line
                absolute={true}
                size="3px"
                position="horizontal"
                length="30vw"
                left={position === 'right' ? '50%' : 'auto'}
                right={position === 'left' ? '50%' : 'auto'}
                top="30%"
                transform="translateY(-30%)"
            />
            <IconCheckpoint
                absolute={true}
                color="green"
                size="176px"
                left={position === 'right' ? 'calc(50% + 30vw)' : 'auto'}
                right={position === 'left' ? 'calc(50% + 30vw)' : 'auto'}
                top="calc(30% - 88px)"
            >
                {icon}
            </IconCheckpoint>
            <Box
                position="absolute"
                left={position === 'right' ? '55%' : 'auto'}
                right={position === 'left' ? '50%' : 'auto'}
                top="calc(30% + 60px)"
                lineHeight="1.3rem"
                width="calc(30vw + 140px)"
            >
                <Text
                    as="p"
                    color="green"
                    fontSize="48px"
                    lineHeight="46px"
                    mb="1rem"
                >
                    {headline}
                </Text>
                <Text>{quote}</Text>
                <br />
                <br />
                <Text color="green">
                    Tools: <br />
                </Text>
                <Text>{tools}</Text>
            </Box>
        </Box>
    );
}
