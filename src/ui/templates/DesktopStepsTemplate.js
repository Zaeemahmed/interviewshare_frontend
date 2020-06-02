import React from 'react';
import BackgroundLayerDesktop from '../pages/Landingpage/components/BackgroundLayerDesktop';
import { Box } from '../components/Base/Base';
import DeviceProvider from '../../helpers/DeviceProvider';
import Title from './components/Title';
import StepButton from './components/StepButton';

export default function DesktopStepsTemplate({
    children,
    title,
    to,
    ButtonText,
    lastStep = false,
}) {
    return (
        <DeviceProvider>
            <BackgroundLayerDesktop>
                <Box
                    maxWidth={{ lg: '500px', xl: '460px', xxl: '560px' }}
                    width="100%"
                    height="90%"
                    minHeight="650px"
                    position="absolute"
                    top="50%"
                    right={{ lg: '10%', xl: '10%', xxl: '10%' }}
                    css={`
                        transform: translateY(calc(-50%));
                        box-shadow: 3px 3px 12px rgba(13, 233, 154, 0.31);
                    `}
                    zIndex="5"
                    bg="#191919"
                    borderRadius="54px"
                    border="1px solid rgba(27, 25, 25, 0.5)"
                    p="0 40px"
                >
                    <Title text={title} />

                    {children}

                    <StepButton to={to} text={ButtonText} lastStep={lastStep} />
                </Box>
            </BackgroundLayerDesktop>
        </DeviceProvider>
    );
}
