import React, { useContext } from 'react';
import { SizeContext } from '../../../../../context/SizeContext';
import FinalMobile from './FinalMobile';
import FinalDesktop from './FinalDesktop';

export default function Final() {
    const isDesktop = useContext(SizeContext);

    return <>{!isDesktop ? <FinalMobile /> : <FinalDesktop />}</>;
}
