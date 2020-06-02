import React, { useContext } from 'react';
import TemplateDesktop from '../ui/templates/TemplateDesktop';
import TemplateMobile from '../ui/templates/TemplateMobile';
import { SizeContext } from '../context/SizeContext';

export default function DeviceProvider({ children }) {
    const isDesktop = useContext(SizeContext);
    return (
        <>
            {isDesktop ? (
                <TemplateDesktop>{children}</TemplateDesktop>
            ) : (
                <TemplateMobile>{children}</TemplateMobile>
            )}
        </>
    );
}
