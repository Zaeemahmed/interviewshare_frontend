import React, { useContext } from 'react';
import { SizeContext } from '../../../../../context/SizeContext';
import QualityAssuranceMobile from './QualityAssuranceMobile';
import QualityAssuranceDesktop from './QualityAssuranceDesktop';

export default function QualityAssurance() {
    const isDesktop = useContext(SizeContext);

    return (
        <>
            {!isDesktop ? (
                <QualityAssuranceMobile />
            ) : (
                <QualityAssuranceDesktop />
            )}
        </>
    );
}
