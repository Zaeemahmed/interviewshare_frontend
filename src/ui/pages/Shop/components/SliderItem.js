import React from 'react';
import { Box, Text, Flex } from '../../../components/Base/Base';
export default function SliderItem({ children, imageSrc, title, price }) {
    return (
        <Flex
            width="100%"
            height="100%"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box
                as="img"
                src={imageSrc}
                width="100%"
                height="200px"
                borderRadius="10px"
                boxShadow="0 10px 10px"
            ></Box>
            <Text as="h1" color="#3C3E3F" width="100%">
                {title}
            </Text>
            <Text as="h2" color="#777D7D" alignSelf="flex-start">
                {price}$
            </Text>
            <Text as="p" color="#777D7D" padding="0px" width="100%">
                {children}
            </Text>

            <Flex width="100%">
                <Box
                    as="button"
                    fontSize="20px"
                    color="#2074D5"
                    borderWidth="0"
                    borderRadius="31px"
                    backgroundColor="#F5F5F5"
                    width="30%"
                    padding="10px 0"
                >
                    HIDE
                </Box>
                <Box
                    as="button"
                    fontSize="20px"
                    backgroundColor="#2074D5"
                    borderWidth="0"
                    borderRadius="31px"
                    color="#F5F5F5"
                    width="70%"
                    padding="10px 0"
                >
                    GO TO AMAZON
                </Box>
            </Flex>
        </Flex>
    );
}
