import React, { useContext } from 'react';
import TemplateDesktop from './TemplateDesktop';
import TemplateMobile from './TemplateMobile';
import { SizeContext } from '../../context/SizeContext';

export default function Layout({ children, mobileFooter }) {
    const isDesktop = useContext(SizeContext);

    return (
        <>
            {isDesktop ? (
                <TemplateDesktop>{children}</TemplateDesktop>
            ) : (
                <TemplateMobile mobileFooter={mobileFooter}>
                    {children}
                </TemplateMobile>
            )}
        </>
    );
}
