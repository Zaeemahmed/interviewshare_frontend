import React from 'react';
import SectionTemplateDesktop from '../../components/SectionTemplateDesktop';
import { data } from './DeploymentData';

export default function DeploymentDesktop() {
    return (
        <SectionTemplateDesktop
            id={data.id}
            position="right"
            icon={data.iconDesktop}
            headline={data.headline}
            quote={data.quote}
            tools={data.tools}
        />
    );
}
