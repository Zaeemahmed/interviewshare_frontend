import React from 'react';
import { FormattedMessage } from 'react-intl';
import IconProductManagerMobile from '../../Icons/Mobile/IconProductManagerMobile';
import IconProductManagerDesktop from '../../Icons/Desktop/IconProductManagerDesktop';

export const data = {
    id: 'ProductManager',
    iconMobile: <IconProductManagerMobile />,
    iconDesktop: <IconProductManagerDesktop />,
    headline: (
        <>
            <span>
                <FormattedMessage defaultMessage="Product Manager" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Team Lead" />
            </span>
        </>
    ),
    quote: (
        <FormattedMessage defaultMessage="“We put our effort into creating an intuitive experience for your users.”" />
    ),
    tools: (
        <>
            <span>
                <FormattedMessage defaultMessage="Jira" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Project management" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Google Suite" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Figma" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Github" />
            </span>
        </>
    ),
};
