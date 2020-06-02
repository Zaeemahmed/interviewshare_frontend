import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { SizeContext } from '../../../context/SizeContext';
import { Box } from '../../components/Base/Base';
import DesktopStepsTemplate from '../../templates/DesktopStepsTemplate';
import MobileStepsTemplate from '../../templates/MobileStepsTemplate';
import AchievementsBody from './AchievementsBody';

export default function Achievements() {
    const isDesktop = useContext(SizeContext);
    const templateProperty = {
        title: <FormattedMessage defaultMessage="My Achievements" />,
        ButtonText: <FormattedMessage defaultMessage="Learn even more" />,
        to: '/foryouiwill',
    };
    return (
        <>
            {isDesktop ? (
                <DesktopStepsTemplate {...templateProperty}>
                    <Box
                        position="relative"
                        maxWidth="420px"
                        width="100%"
                        height="100%"
                        maxHeight="80%"
                        left="50%"
                        css={`
                            transform: translateX(-50%);
                        `}
                    >
                        <AchievementsBody />
                    </Box>
                </DesktopStepsTemplate>
            ) : (
                <MobileStepsTemplate {...templateProperty}>
                    <Box
                        position="relative"
                        maxWidth="400px"
                        width="100%"
                        height="90%"
                        maxHeight={{ _: '500px', sm: '500px', md: '550px' }}
                        left="50%"
                        top={{ _: '40%', sm: '40%', md: '50%' }}
                        css={`
                            transform: translate(-50%, -50%);
                        `}
                    >
                        <AchievementsBody />
                    </Box>
                </MobileStepsTemplate>
            )}
        </>
    );
}
