import React, { useContext } from 'react';
import { SizeContext } from '../../../../../context/SizeContext';
import DeploymentMobile from './DeploymentMobile';
import DeploymentDesktop from './DeploymentDesktop';

export default function Deployment() {
    const isDesktop = useContext(SizeContext);

    return <>{!isDesktop ? <DeploymentMobile /> : <DeploymentDesktop />}</>;
}
