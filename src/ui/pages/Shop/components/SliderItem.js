import React from 'react';
import { Box, Text } from '../../../components/Base/Base';
import { Button } from '../../../components/Base/Button';
export default function SliderItem({ children, imageSrc, title, price }) {
    return (
        <Box
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
            <Text as="h1" color="white">
                {title}
            </Text>
            <Text as="h2" color="white">
                {price}$
            </Text>
            <Text as="p" color="red" padding="0px" width="80%">
                {children}
            </Text>

            <Button
                padding="10px 90px"
                fontSize="20px"
                backgroundColor="dodgerblue"
            >
                Share
            </Button>
        </Box>
    );
}
