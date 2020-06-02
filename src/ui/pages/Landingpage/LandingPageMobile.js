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
                <Box
                    zIndex={2}
                    p="0"
                    textAlign="center"
                    position="absolute"
                    bottom="15px"
                    minHeigth="600px"
                    maxWidth="calc(100% - 40px);"
                    width="100%"
                    left="50%"
                    css={`
                        transform: translateX(-50%);
                    `}
                >
                    <TextWelcome />
                    <Box height="50px" width="100%" mt="25px">
                        <IconButtonBig to="/achievements">
                            <FormattedMessage defaultMessage="Learn more" />
                        </IconButtonBig>
                    </Box>
                </Box>
            </BackgroundLayerMobile>
        </DeviceProvider>
    );
}
