import React, { useState } from 'react';
import { Box, Flex } from '../../components/Base/Base';
//import HeaderPremiumPlan from './components/HeaderPremiumPlan';
import FormCreditCard from './components/FormCreditCard';
import Layout from '../../templates/Layout';
import theme from '../../../config/theme';
export default function PremiumPlan() {
    const [payment, setPayment] = useState('');

    return (
        <Layout>
            <Box
                as="h1"
                fontSize="24px"
                color={theme.colors.black}
                padding="10px"
                textTransform="uppercase"
            >
                Premium Plan
            </Box>
            <Flex width="100%" padding="10px" justifyContent="space-between">
                <Flex
                    width="45%"
                    backgroundColor={
                        payment === 'credit'
                            ? theme.colors.btnLightBlue
                            : theme.colors.bgGrayLight
                    }
                    borderRadius="8px"
                    padding="4px"
                >
                    <Box width="70%">
                        <Box color={theme.colors.black}>Credit Card</Box>
                        <Box
                            as="img"
                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficonsdb.com%2Ficons%2Fdownload%2Fdark-gray%2Fvisa-512.png&f=1&nofb=1"
                            width="60px"
                            height="50px"
                        ></Box>
                    </Box>
                    <Box
                        width="30%"
                        height="30px"
                        as="input"
                        value="credit"
                        onClick={e => setPayment(e.target.value)}
                        type="checkbox"
                        checked={payment === 'credit' ? true : false}
                    ></Box>
                </Flex>
                <Box
                    width="45%"
                    display="flex"
                    backgroundColor={
                        payment === 'paypal'
                            ? theme.colors.btnLightBlue
                            : theme.colors.bgGrayLight
                    }
                    borderRadius="8px"
                    padding="4px"
                >
                    <Box width="70%">
                        <Box color="black">PayPal</Box>
                        <Box
                            as="img"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c7aFFJjrLv5eg9AemhtfOwHaHa%26pid%3DApi&f=1"
                            width="60px"
                            height="50px"
                        ></Box>
                    </Box>
                    <Box
                        width="30%"
                        height="30px"
                        as="input"
                        value="paypal"
                        onClick={e => setPayment(e.target.value)}
                        type="checkbox"
                        checked={payment === 'paypal' ? true : false}
                    ></Box>
                </Box>
            </Flex>
            {payment === 'credit' && <FormCreditCard />}
        </Layout>
    );
}
