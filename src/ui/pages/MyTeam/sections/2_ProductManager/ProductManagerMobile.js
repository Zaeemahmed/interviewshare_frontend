import React, { useContext } from 'react';
import { SectionContext } from '../../../../../context/SectionContext';
import SectionTemplateMobile from '../../components/SectionTemplateMobile';
import { data } from './ProductManagerData';

export default function ProductManagerMobile() {
    const setSelectedSection = useContext(SectionContext);
    return (
        <SectionTemplateMobile
            id={data.id}
            aligment="left"
            firstLine="center"
            icon={data.iconMobile}
            headline={data.headline}
            quote={data.quote}
            tools={data.tools}
            changeSection={() => {
                setSelectedSection(2);
            }}
        />
    );
}
