import React from 'react';
import { Box, Flex } from '../../../../../components/Base/Base';

const SliderItem = ({ src }) => {
    return (
        <Flex
            width="100%"
            height="100%"
            flexDirection="column"
            alignItems="center"
        >
            <Box
                as="img"
                src={src}
                width="100%"
                height="360px"
                borderRadius="10px"
                boxShadow="0 10px 10px"
            ></Box>
        </Flex>
    );
};

export default SliderItem;
