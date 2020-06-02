import React from 'react';
import { FormattedMessage } from 'react-intl';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box } from '../../components/Base/Base';
import BackgroundLayerDesktop from './components/BackgroundLayerDesktop';
import TextWelcome from './components/TextWelcome';
import IconButtonBig from './components/IconButtonBig';

export default function LandingPageDesktop() {
    return (
        <DeviceProvider>
            <BackgroundLayerDesktop>
                <Box
                    maxWidth={{ lg: '550px', xl: '650px', xxl: '800px' }}
                    position="absolute"
                    top="calc(50% + 45px)"
                    right={{ lg: '10%', xl: '10%', xxl: '10%' }}
                    css={`
                        transform: translateY(calc(-50%));
                    `}
                    zIndex="5"
                >
                    <TextWelcome />
                    <Box height="50px" width="70%" mt="25px">
                        <IconButtonBig to="/achievements">
                            <FormattedMessage defaultMessage="Learn more" />
                        </IconButtonBig>
                    </Box>
                </Box>
            </BackgroundLayerDesktop>
        </DeviceProvider>
    );
}
