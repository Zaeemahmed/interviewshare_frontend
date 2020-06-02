import React, { useContext } from 'react';
import { SizeContext } from '../../../../../context/SizeContext';
import PartnerMobile from './PartnerMobile';
import PartnerDesktop from './PartnerDesktop';

export default function Partner() {
    const isDesktop = useContext(SizeContext);

    return <>{!isDesktop ? <PartnerMobile /> : <PartnerDesktop />}</>;
}
