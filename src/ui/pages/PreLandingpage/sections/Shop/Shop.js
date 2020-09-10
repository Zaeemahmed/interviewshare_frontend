import React from 'react';
import { Flex, Box } from '../../../../components/Base/Base';
import ShopText from './components/ShopText';
import SliderItems from './components/SliderItems';

const Shop = () => {
    return (
        <Flex
            alignItems="center"
            flexDirection="column"
            textAlign="center"
            height="100vh"
        >
            <ShopText />
            <Box as="div" width="100%" height="100%">
                <SliderItems />
            </Box>
        </Flex>
    );
};

export default Shop;
