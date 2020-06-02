import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from '../Base/Base';
import NavLink from './NavLink';

export default function NavLinkHome({ style, arrowStyle }) {
    return (
        <Box
            position={{ md: 'absolute' }}
            top={{ md: '4.5rem', lg: '8.2rem', xxl: '9.5rem' }}
            mt={{ md: '5px' }}
            ml={{ md: '5px' }}
        >
            <NavLink to="/" fontSize={{ xxl: '22px' }} style={style}>
                <Box
                    as="span"
                    display="inline-block"
                    p={{ _: '3px', sm: '3px', xxl: '5px' }}
                    mb="2px"
                    css={`
                        border: solid #fff;
                        border-width: 0 2px 2px 0;
                        transform: rotate(135deg);
                        -webkit-transform: rotate(135deg);
                    `}
                    style={arrowStyle}
                />
                <FormattedMessage defaultMessage="Home" />
            </NavLink>
        </Box>
    );
}
