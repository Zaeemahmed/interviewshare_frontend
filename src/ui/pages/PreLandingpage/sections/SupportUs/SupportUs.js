import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Flex, Box, Text } from '../../../../components/Base/Base';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

const SupportUs = () => {
    return (
        <Flex
            alignItems="center"
            flexDirection="column"
            textAlign="center"
            fontFamily="Roboto"
            height="100vh"
        >
            <Text
                color="#3C3E3F"
                fontSize="24px"
                fontWeight="bold"
                letterSpacing="0.05em"
                fontFamily="PT Serif"
            >
                Support Us
            </Text>
            <Box
                color="#3C3E3F"
                textAlign="center"
                mt="20px"
                lineHeight="20px"
                width="90%"
                fontSize="14px"
            >
                <Text as="p">
                    With your donation, we can continue to educate students in
                    technology and build simple products that world may or may
                    not need
                </Text>
                <Text as="p">Be the first to enter our</Text>
                <Text color="#2074D5">Donators Hall-of-Fame</Text>
                <Box mt="30px">
                    <LocalCafeIcon
                        style={{ color: '#fff', width: '80px', height: '80px' }}
                        stroke={'#2074D5'}
                        stroke-width={1.9}
                    />
                </Box>
                <Text
                    color="#3C3E3F"
                    fontSize="24px"
                    fontWeight="bold"
                    letterSpacing="0.05em"
                    fontFamily="PT Serif"
                >
                    Buy us a cofee
                </Text>
                <Text color="#2074D5" opacity="0.8" as="p">
                    Support us with a cup of cofee
                </Text>
                <Flex justifyContent="center" mt="40px">
                    <Button
                        variant="contained"
                        style={{
                            width: '100%',
                            borderRadius: '29px',
                            background: '#2074D5',
                            color: '#fff',
                        }}
                    >
                        Buy us a coffee
                    </Button>
                </Flex>
                <Text as="p">Or just donate via:</Text>
                <Box as={Link} to="/paypal" mt="-25px">
                    <Box
                        as="img"
                        src="https://pngimg.com/uploads/paypal/paypal_PNG12.png"
                        width="94px"
                        height="94px"
                        style={{ objectFit: 'contain' }}
                    />
                </Box>
            </Box>
        </Flex>
    );
};

export default SupportUs;
