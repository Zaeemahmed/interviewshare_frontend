import React from 'react';
import { FormattedMessage } from 'react-intl';
import IconServerAdminMobile from '../../Icons/Mobile/IconServerAdminMobile';
import IconServerAdminDesktop from '../../Icons/Desktop/IconServerAdminDesktop';

export const data = {
    id: 'Deployment',
    iconMobile: <IconServerAdminMobile />,
    iconDesktop: <IconServerAdminDesktop />,
    headline: (
        <span>
            <FormattedMessage defaultMessage="Server Admin" />
        </span>
    ),
    quote: (
        <FormattedMessage defaultMessage="“We manage the physical Server on which your Data is stored and I deploy to the Apple Appstore and Google Play Store”" />
    ),
    tools: (
        <>
            <span>
                <FormattedMessage defaultMessage="Ubuntu" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Docker" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="GitHub" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="XCode" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Android Studio" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Bash" />
            </span>
        </>
    ),
};
