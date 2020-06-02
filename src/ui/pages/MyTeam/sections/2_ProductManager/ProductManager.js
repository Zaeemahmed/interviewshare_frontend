import React, { useContext } from 'react';
import { SizeContext } from '../../../../../context/SizeContext';
import ProductManagerMobile from './ProductManagerMobile';
import ProductManagerDesktop from './ProductManagerDesktop';

export default function ProductManager() {
    const isDesktop = useContext(SizeContext);

    return (
        <>{!isDesktop ? <ProductManagerMobile /> : <ProductManagerDesktop />}</>
    );
}
