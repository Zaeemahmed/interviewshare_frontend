import React from 'react';
import { FormattedMessage } from 'react-intl';
import IconUiUxDesignMobile from '../../Icons/Mobile/IconUiUxDesignMobile';
import IconUiUxDesignDesktop from '../../Icons/Desktop/IconUiUxDesignDesktop';

export const data = {
    id: 'Designer',
    iconMobile: <IconUiUxDesignMobile />,
    iconDesktop: <IconUiUxDesignDesktop />,
    headline: (
        <>
            <span>
                <FormattedMessage defaultMessage="User Interface" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="User Experience" />
            </span>
        </>
    ),
    quote: (
        <FormattedMessage defaultMessage="“We put our effort into creating an intuitive experience for your users.”" />
    ),
    tools: (
        <>
            <span>
                <FormattedMessage defaultMessage="Figma" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Adobe Photoshop" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Adobe Ilustrator" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Adobe InDesign" />
            </span>
        </>
    ),
};
