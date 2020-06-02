import React, { useContext } from 'react';
import { SizeContext } from '../../../context/SizeContext';
import LandingPageMobile from './LandingPageMobile';
import LandingPageDesktop from './LandingPageDesktop';

export default function Landingpage() {
    const isDesktop = useContext(SizeContext);

    return <>{!isDesktop ? <LandingPageMobile /> : <LandingPageDesktop />}</>;
}
