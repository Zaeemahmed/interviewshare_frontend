import React, { useContext } from 'react';
import { SizeContext } from '../../../../../context/SizeContext';
import DesignerMobile from './DesignerMobile';
import DesignerDesktop from './DesignerDesktop';

export default function Designer() {
    const isDesktop = useContext(SizeContext);

    return <>{!isDesktop ? <DesignerMobile /> : <DesignerDesktop />}</>;
}
