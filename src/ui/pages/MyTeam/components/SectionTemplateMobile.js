import React from 'react';
import { Box, Text } from '../../../components/Base/Base';
import IconCheckpoint from '../Icons/IconCheckpoint';
import IconSwipeMobile from '../Icons/Mobile/IconSwipeMobile';
import Line from './Line';

export default function SectionTemplateMobile({
    id,
    firstLine,
    aligment,
    icon,
    headline,
    quote,
    tools,
    changeSection,
}) {
    return (
        <Box height="calc(100vh - 75px)" position="relative" id={id}>
            <Line
                position="vertical"
                length="30px"
                left={
                    firstLine === 'center'
                        ? '50%'
                        : firstLine === 'left'
                        ? '20.5%'
                        : '79%'
                }
            />
            <Line
                absolute={true}
                position="horizontal"
                length={firstLine === 'center' ? '30vw' : '59vw'}
                left={aligment === 'left' ? '20.5%' : 'auto'}
                right={aligment === 'right' ? '20.5%' : 'auto'}
            />
            <Line
                absolute={true}
                position="vertical"
                length="calc(100vh - 75px - 30px)"
                left={aligment === 'left' ? '20.5%' : 'auto'}
                right={aligment === 'right' ? '20.5%' : 'auto'}
            />
            <IconCheckpoint
                color="green"
                size="50px"
                left={
                    aligment === 'left'
                        ? 'calc(20.5% - 25px)'
                        : 'calc(79% - 25px)'
                }
                top="5%"
            >
                {icon}
            </IconCheckpoint>
            <Box
                fontSize="14px"
                maxWidth="200px"
                position="relative"
                left={aligment === 'left' ? '30%' : '20%'}
                bottom="5%"
                lineHeight="1.3rem"
            >
                <Text
                    as="p"
                    color="green"
                    fontSize="18px"
                    lineHeight="21px"
                    mb="1rem"
                >
                    {headline}
                </Text>
                <Text>{quote}</Text>
                <br />
                <br />
                <Text>
                    <Text color="green">
                        Tools: <br />
                    </Text>
                    {tools}
                </Text>
            </Box>
            <Box
                as="button"
                bg="transparent"
                border="none"
                position="absolute"
                bottom="20px"
                left="50%"
                css={`
                    transform: translateX(-50%);
                `}
                onClick={changeSection}
            >
                <IconSwipeMobile />
            </Box>
        </Box>
    );
}
