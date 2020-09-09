import React, { useContext } from 'react';
import TemplateDesktopWithoutHeader from './TemplateDesktopWithoutHeader';
import TemplateMobileWithoutHeader from './TemplateMobileWithoutHeader';
import { SizeContext } from '../../context/SizeContext';

export default function Layout({ children, mobileFooter }) {
    const isDesktop = useContext(SizeContext);

    return (
        <>
            {isDesktop ? (
                <TemplateDesktopWithoutHeader mobileFooter={mobileFooter}>
                    {children}
                </TemplateDesktopWithoutHeader>
            ) : (
                <TemplateMobileWithoutHeader mobileFooter={mobileFooter}>
                    {children}
                </TemplateMobileWithoutHeader>
            )}
        </>
    );
}
