import React from 'react';
import SectionTemplateDesktop from '../../components/SectionTemplateDesktop';
import { data } from './ProductManagerData';

export default function ProductManagerDesktop() {
    return (
        <SectionTemplateDesktop
            id={data.id}
            position="left"
            icon={data.iconDesktop}
            headline={data.headline}
            quote={data.quote}
            tools={data.tools}
        />
    );
}
