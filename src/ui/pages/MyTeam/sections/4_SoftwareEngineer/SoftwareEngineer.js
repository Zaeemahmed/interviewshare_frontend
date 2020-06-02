import React, { useContext } from 'react';
import { SizeContext } from '../../../../../context/SizeContext';
import SoftwareEngineerMobile from './SoftwareEngineerMobile';
import SoftwareEngineerDesktop from './SoftwareEngineerDesktop';

export default function SoftwareEngineer() {
    const isDesktop = useContext(SizeContext);

    return (
        <>
            {!isDesktop ? (
                <SoftwareEngineerMobile />
            ) : (
                <SoftwareEngineerDesktop />
            )}
        </>
    );
}
