import React from 'react';
import TemplateDesktop from '../ui/templates/TemplateDesktop';

export default function DeviceProvider({ children }) {
    return (
        <>
            <TemplateDesktop>{children}</TemplateDesktop>
        </>
    );
}
