import React from 'react';
import { Box, Text } from '../../components/Base/Base';
import { FormatValuesContext } from '../../../context/FormatValuesContext';
import CheckpointYears from './sections/CheckpointYears';
import CheckpointLines from './sections/CheckpointLines';
import CheckpointStartups from './sections/CheckpointStartups';
import CheckpointExperts from './sections/CheckpointExperts';
import CheckpointDevelopers from './sections/CheckpointDevelopers';
import CheckpointProjects from './sections/CheckpointProjects';

const formatValues = {
    header: chunks => (
        <Text
            fontSize={{ _: '20px', sm: '20px', md: '26px' }}
            fontWeight="bold"
            lineHeight={{ _: '18px', sm: '18px', md: '26px' }}
        >
            {chunks} <br />
        </Text>
    ),
    subheader: chunks => (
        <Text
            fontSize={{ _: '14px', sm: '16px', md: '18px' }}
            fontWeight="bold"
            lineHeight={{ _: '16px', sm: '16px', md: '24px' }}
        >
            {chunks} <br />
        </Text>
    ),
    rest: chunks => (
        <Text fontSize={{ _: '8px', sm: '10px', md: '12px' }} fontWeight="300">
            {chunks} <br />
        </Text>
    ),
};

export default function AchievementsBody() {
    return (
        <FormatValuesContext.Provider value={formatValues}>
            <Box
                position="absolute"
                left={{ _: '10px', lg: '0%' }}
                top={{ _: '15px', lg: '9%' }}
            >
                <CheckpointYears />
            </Box>
            <Box
                position="absolute"
                right={{ _: '20px', lg: '4%' }}
                top={{ _: '15px', lg: '7%' }}
            >
                <CheckpointLines />
            </Box>
            <Box
                position="absolute"
                left="50%"
                top={{ _: '100px', lg: '24%' }}
                css={`
                    transform: translateX(-50%);
                `}
            >
                <CheckpointStartups />
            </Box>
            <Box
                position="absolute"
                left={{ _: '-5px', lg: '-5%' }}
                bottom={{ _: '210px', lg: '32%' }}
            >
                <CheckpointExperts />
            </Box>
            <Box
                position="absolute"
                left={{ _: '30%', lg: '34%' }}
                bottom={{ _: '150px', lg: '20%' }}
            >
                <CheckpointDevelopers />
            </Box>
            <Box
                position="absolute"
                right={{ _: '10px', lg: '0%' }}
                bottom={{ _: '180px', lg: '33%' }}
            >
                <CheckpointProjects />
            </Box>
        </FormatValuesContext.Provider>
    );
}
