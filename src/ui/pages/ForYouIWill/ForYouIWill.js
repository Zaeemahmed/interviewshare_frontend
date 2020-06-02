import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { SizeContext } from '../../../context/SizeContext';
import MobileStepsTemplate from '../../templates/MobileStepsTemplate';
import DesktopStepsTemplate from '../../templates/DesktopStepsTemplate';
import ForYouIWillBody from './ForYouIWillBody';

export default function ForYouIWill() {
    const isDesktop = useContext(SizeContext);
    const templateProperty = {
        title: <FormattedMessage defaultMessage="For you, I will..." />,
        ButtonText: <FormattedMessage defaultMessage="Last step" />,
        to: '/letsgetstarted',
    };
    return (
        <>
            {isDesktop ? (
                <DesktopStepsTemplate {...templateProperty}>
                    <ForYouIWillBody />
                </DesktopStepsTemplate>
            ) : (
                <MobileStepsTemplate {...templateProperty}>
                    <ForYouIWillBody />
                </MobileStepsTemplate>
            )}
        </>
    );
}
