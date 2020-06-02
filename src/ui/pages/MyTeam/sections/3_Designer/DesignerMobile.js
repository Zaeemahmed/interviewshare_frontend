import React, { useContext } from 'react';
import { SectionContext } from '../../../../../context/SectionContext';
import SectionTemplateMobile from '../../components/SectionTemplateMobile';
import { data } from './DesignerData';

export default function DesignerMobile() {
    const setSelectedSection = useContext(SectionContext);
    return (
        <SectionTemplateMobile
            id={data.id}
            aligment="right"
            firstLine="left"
            icon={data.iconMobile}
            headline={data.headline}
            quote={data.quote}
            tools={data.tools}
            changeSection={() => {
                setSelectedSection(3);
            }}
        />
    );
}
