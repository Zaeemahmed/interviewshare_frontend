import React from 'react';
import { FormattedMessage } from 'react-intl';
import IconSoftwareEngineeringMobile from '../../Icons/Mobile/IconSoftwareEngineeringMobile';
import IconSoftwareEngineeringDesktop from '../../Icons/Desktop/IconSoftwareEngineeringDesktop';

export const data = {
    id: 'Designer',
    iconMobile: <IconSoftwareEngineeringMobile />,
    iconDesktop: <IconSoftwareEngineeringDesktop />,
    headline: (
        <span>
            <FormattedMessage defaultMessage="Software Engineering" />
        </span>
    ),
    quote: (
        <FormattedMessage defaultMessage="“We use modern technology to bring your ideas to life, store data securely and ensure the availability of the server around the clock.”" />
    ),
    tools: (
        <>
            <span>
                <FormattedMessage defaultMessage="React.JS" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Node.JS / Firebase" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Flutter / Cordova" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="SQL / NoSQL" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Git" />
            </span>
            <br />
        </>
    ),
};
