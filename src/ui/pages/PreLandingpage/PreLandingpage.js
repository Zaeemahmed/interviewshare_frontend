import React from 'react';
import LayoutWithOutHeader from '../../templates/LayoutWithOutHeader';
import { Box, Text, Flex } from '../../components/Base/Base';
import NotificationForm from './components/NotificationForm';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';

export default function PreLandingpage() {
    return (
        <LayoutWithOutHeader>
            <Flex alignItems="center" flexDirection="column" textAlign="center">
                <Box mb="20px">
                    <img src={logo} />
                </Box>
                <Text
                    fontSize="24px"
                    fontFamily="PT Serif"
                    fontWeight="bold"
                    fontStyle="normal"
                    color="#3C3E3F"
                    letterSpacing="0.08em"
                    width="90%"
                >
                    Careers start with phone interviews
                </Text>
                <Box
                    color="#3C3E3F"
                    textAlign="center"
                    fontFamily="Roboto"
                    lineHeight="14px"
                    fontSize="14px"
                    letterSpacing="0.02em"
                >
                    <Text as="p">Our mission:</Text>
                    <Text as="p">Record Your phone interview for free.</Text>
                    <Text as="p">Get feedback.</Text>
                    <Text as="p">Be confident.</Text>
                    <Box m="40px">
                        <Text
                            color="#2074D5"
                            as={Link}
                            to="/mockups"
                            style={{ textDecoration: 'none' }}
                        >
                            Take an early view at our mockups
                        </Text>
                    </Box>
                    <NotificationForm />
                </Box>
            </Flex>
        </LayoutWithOutHeader>
    );
}
