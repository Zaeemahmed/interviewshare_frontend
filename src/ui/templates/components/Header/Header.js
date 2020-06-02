import React from 'react';
import { Flex } from '../../../components/Base/Base';
import TextLogo from './TextLogo';
import HeaderMenu from './HeaderMenu';

export default function Header({ p }) {
    return (
        <Flex
            as="header"
            height="100%"
            maxWidth="100%"
            p={p}
            textAlign="center"
            alignItems="center"
            justifyContent="space-between"
            bg="darkgrey"
        >
            <TextLogo />
            <HeaderMenu />
        </Flex>
    );
}
