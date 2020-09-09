import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Overlay({ onClick }) {
    const escFunction = useCallback(
        event => {
            if (event.keyCode === 27) {
                onClick();
            }
        },
        [onClick]
    );

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);

        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [escFunction]);

    return <Div onClick={onClick} />;
}

const Div = styled.div`
    background-color: #aeaeae;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0px;
    left: 0px;
    opacity: 0.5; /* in FireFox */
    filter: alpha(opacity=50); /* in IE */
`;

Overlay.propTypes = {
    onClick: PropTypes.func,
};

export default Overlay;
