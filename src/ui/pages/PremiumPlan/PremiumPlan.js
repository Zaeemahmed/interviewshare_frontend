import React, { useState } from 'react';
import { Box } from '../../components/Base/Base';
import HeaderPremiumPlan from './components/HeaderPremiumPlan';
import FormCreditCard from './components/FormCreditCard';

export default function PremiumPlan() {
    const [payment, setPayment] = useState('');

    return (
        <Box height="140vh" width="100%" backgroundColor="white">
            <HeaderPremiumPlan />
            <Box
                as="h1"
                fontSize="24px"
                color="black"
                padding="10px"
                textTransform="uppercase"
            >
                Premium Plan
            </Box>
            <Box
                width="100%"
                display="flex"
                padding="10px"
                justifyContent="space-between"
            >
                <Box
                    width="45%"
                    display="flex"
                    backgroundColor={
                        payment === 'credit' ? ' #D6E4F5' : '#EFF0F0'
                    }
                    borderRadius="8px"
                    padding="4px"
                >
                    <Box width="70%">
                        <Box color="black">Credit Card</Box>
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
                </Box>
                <Box
                    width="45%"
                    display="flex"
                    backgroundColor={
                        payment === 'paypal' ? ' #D6E4F5' : '#EFF0F0'
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
            </Box>
            {payment === 'credit' && <FormCreditCard />}
        </Box>
    );
}
