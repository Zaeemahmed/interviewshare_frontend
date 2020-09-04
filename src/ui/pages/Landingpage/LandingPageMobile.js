import React from 'react';
import TemplateMobile from '../../templates/TemplateMobile';
import { Box } from '../../components/Base/Base';
import IconButtonBig from './components/IconButtonBig';

export default function LandingPageMobile() {
    return (
        <TemplateMobile>
            <Box as="div" display="flex">
                <IconButtonBig></IconButtonBig>
            </Box>

            <Box as="div" marginTop="190px" marginLeft="30px">
                <Box as="h1" color="#31C4BF">
                    Welcome
                </Box>

                <Box as="p" fontSize="15px">
                    Let's start recording your last phone interview
                </Box>
            </Box>
        </TemplateMobile>
    );
}
