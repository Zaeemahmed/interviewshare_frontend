import React, { useEffect, useState } from 'react';
import { Box } from '../../components/Base/Base';
import { SectionContext } from '../../../context/SectionContext';
import DeviceProvider from '../../../helpers/DeviceProvider';
import Partner from './sections/1_Partner/Partner';
import ProductManager from './sections/2_ProductManager/ProductManager';
import Designer from './sections/3_Designer/Designer';
import SoftwareEngineer from './sections/4_SoftwareEngineer/SoftwareEngineer';
import Deployment from './sections/5_Deployment/Deployment';
import Final from './sections/7_Final/Final';
import QualityAssurance from './sections/6_QualityAssurance/QualityAssurance';

export default function MyTeam() {
    const [selectedSection, setSelectedSection] = useState(0);

    const sections = [
        { id: 0, name: 'Partner' },
        { id: 1, name: 'ProductManager' },
        { id: 2, name: 'Designer' },
        { id: 3, name: 'SoftwareEngineer' },
        { id: 4, name: 'Deployment' },
        { id: 5, name: 'QualityAssurance' },
        { id: 6, name: 'Final' },
    ];

    useEffect(() => {
        if (selectedSection !== 0) {
            document
                .querySelector(`#${sections[selectedSection].name}`)
                .scrollIntoView({ block: 'end', behavior: 'smooth' });
        }
    }, [sections, selectedSection]);

    return (
        <DeviceProvider>
            <SectionContext.Provider value={setSelectedSection}>
                <Box>
                    <Partner />
                    <ProductManager />
                    <Designer />
                    <SoftwareEngineer />
                    <Deployment />
                    <QualityAssurance />
                    <Final />
                </Box>
            </SectionContext.Provider>
        </DeviceProvider>
    );
}
