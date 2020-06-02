import React from 'react';
import { FormattedMessage } from 'react-intl';
import IconQualityAssuranceMobile from '../../Icons/Mobile/IconQualityAssuranceMobile';
import IconQualityAssuranceDesktop from '../../Icons/Desktop/IconQualityAssuranceDesktop';

export const data = {
    id: 'QualityAssurance',
    iconMobile: <IconQualityAssuranceMobile />,
    iconDesktop: <IconQualityAssuranceDesktop />,
    headline: (
        <span>
            <FormattedMessage defaultMessage="Quality Assurance" />
        </span>
    ),
    quote: (
        <FormattedMessage defaultMessage="“We test your application to perfection!”" />
    ),
    tools: (
        <>
            <span>
                <FormattedMessage defaultMessage="Cypress.JS" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Selenium" />
            </span>
            <br />
            <span>
                <FormattedMessage defaultMessage="Browserstack.com" />
            </span>
        </>
    ),
};
