import React from 'react';
import { Box, Text, Flex } from '../../../components/Base/Base';

const Tip = ({ tip }) => {
    return (
        <Flex alignItems="center" mt="10px">
            <Box
                backgroundColor="#E0B152"
                width="6px"
                height="6px"
                mr="15px"
                borderRadius="50%"
            ></Box>
            <Text
                fontFamily="Roboto"
                color="#777D7D"
                fontSize="14px"
                lineHeight="20px"
            >
                {tip}
            </Text>
        </Flex>
    );
};

export default Tip;
