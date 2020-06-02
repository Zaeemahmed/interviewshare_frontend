import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { SizeContext } from '../../../context/SizeContext';
import DesktopStepsTemplate from '../../templates/DesktopStepsTemplate';
import MobileStepsTemplate from '../../templates/MobileStepsTemplate';
import LetsGetStartedBody from './LetsGetStartedBody';

export default function LetsGetStarted() {
    const isDesktop = useContext(SizeContext);
    const templateProperty = {
        title: <FormattedMessage defaultMessage="Let's get started." />,
        ButtonText: (
            <FormattedMessage defaultMessage="Schedule a meeting now" />
        ),
        to: '/intro',
        lastStep: true,
    };
    return (
        <>
            {isDesktop ? (
                <DesktopStepsTemplate {...templateProperty}>
                    <LetsGetStartedBody />
                </DesktopStepsTemplate>
            ) : (
                <MobileStepsTemplate {...templateProperty}>
                    <LetsGetStartedBody />
                </MobileStepsTemplate>
            )}
        </>
    );
}
