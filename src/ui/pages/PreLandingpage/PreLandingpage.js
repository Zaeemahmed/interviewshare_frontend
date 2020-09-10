import React from 'react';
import LayoutWithOutHeader from '../../templates/LayoutWithOutHeader';
import Top from './sections/Top/Top';
import Shop from './sections/Shop/Shop';
import SupportUs from './sections/SupportUs/SupportUs';

export default function PreLandingpage() {
    return (
        <LayoutWithOutHeader>
            <Top />
            <Shop />
            <SupportUs/>
        </LayoutWithOutHeader>
    );
}
