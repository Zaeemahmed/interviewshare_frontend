import React from 'react';
import { Box } from '../../../components/Base/Base';
export default function SliderItem({ children, imageSrc, title,price }) {
    return (
        <Box
            as="div"
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box
                as="img"
                src={imageSrc}
                width="80%"
                height="200px"
                borderRadius="10px"
                boxShadow="0 10px 10px"
            ></Box>
            <Box as="h1" color="white">
                {title}
            </Box>
            <Box as="h2" color="white">
                {price}$
            </Box>
            <Box as="p" color="red" padding="0px" width="80%">
                {children}
            </Box>

            <Box
                as="button"
                padding="10px 90px"
                fontSize="20px"
                borderRadius="10px"
                backgroundColor="dodgerblue"
            >
                Share
            </Box>
        </Box>
    );
}
