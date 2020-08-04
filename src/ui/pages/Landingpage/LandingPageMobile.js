import React from 'react';
import { FormattedMessage } from 'react-intl';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box } from '../../components/Base/Base';
import TextWelcome from './components/TextWelcome';
import BackgroundLayerMobile from './components/BackgroundLayerMobile';
import IconButtonBig from './components/IconButtonBig';

export default function LandingPageMobile() {
    return (
        <DeviceProvider>
            <BackgroundLayerMobile>
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
            </BackgroundLayerMobile>
        </DeviceProvider>
    );
}
