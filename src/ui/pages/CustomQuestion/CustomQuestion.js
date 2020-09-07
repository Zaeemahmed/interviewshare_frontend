import React from 'react';
import { Box } from '../../components/Base/Base';
import HeaderCustomQuestion from './components/HeaderCustomQuestion';
import FormCustomQuestion from './components/FormCustomQuestion';

export default function CustomQuestion() {
    return (
        <Box
            backgroundColor="white"
            height="100%"
            width="100%"
            position="absolute"
        >
            <HeaderCustomQuestion />
            <Box
                as="h1"
                textTransform="uppercase"
                fontSize="24px"
                color="black"
                padding="10px"
            >
                Create Custom Question
            </Box>
            <FormCustomQuestion />
        </Box>
    );
}
