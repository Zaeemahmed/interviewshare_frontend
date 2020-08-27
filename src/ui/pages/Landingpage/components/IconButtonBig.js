import React from 'react';
import { Box } from '../../../components/Base/Base';
import {Link} from 'react-router-dom'

export default function IconButtonBig() {
    return (
        <>
            <Box
                as="a"
                target="_blank"
                href="https://www.buymeacoffee.com/edes21"
                padding="7px 15px 7px 10px "
                lineHeight="35px "
                height="35px"
                display="inline-flex "
                color="#ffffff "
                backgroundColor="#31C4BF"
                borderRadius="5px"
                border="1px solid transparent"
                fontSize="20px "
                letterSpacing="0.6px "
                boxShadow="0px 1px 2px rgba(190, 190, 190, 0.5) "
                margin="0 auto "
                fontFamily="'Arial', cursive"
                boxSizing="border-box "
                textDecoration="none"
                marginTop="20px"
                
            >
                <Box
                    as="img"
                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                    alt="Donate"
                    height="34px "
                    width="35px "
                    marginBottom="1px "
                    boxShadow="none "
                    border="none "
                    verticalAlign="middle"
                ></Box>

                <Box as="span" marginLeft="5px" fontSize="19px ">
                    Donate
                </Box>
            </Box>

            <Box
                as="a"
                target="_blank"
                href="https://www.paypal.me/ssulce"
                padding="7px 15px 7px 10px "
                lineHeight="35px "
                height="35px"
                display="inline-flex "
                color="#ffffff "
                backgroundColor="#31C4BF"
                borderRadius="5px"
                border="1px solid transparent"
                fontSize="20px "
                letterSpacing="0.6px "
                boxShadow="0px 1px 2px rgba(190, 190, 190, 0.5) "
                margin="0 auto "
                fontFamily="'Arial', cursive"
                boxSizing="border-box "
                textDecoration="none"
                marginTop="20px"
            >
                <Box
                    as="img"
                    src="https://image.flaticon.com/icons/png/512/246/246179.png"
                    alt="Pay"
                    height="34px "
                    width="35px "
                    marginBottom="1px "
                    boxShadow="none "
                    border="none "
                    verticalAlign="middle"
                ></Box>

                <Box as="span" marginLeft="5px" fontSize="19px ">
                    Pay
                </Box>
            </Box>
            <Box
            as={Link}
            to="/shop"
            height="35px"
            backgroundColor="#31C4BF"
            padding="7px 15px 7px 10px "
            fontSize="20px"
            marginTop="20px"
            borderRadius="10px"
            color="white"
            >
                Shop
            </Box>
        </>
    );
}
