import React from 'react';
import PropTypes from 'prop-types';

const Cross = ({ color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.561 1.5L19.5 18.439"
        ></path>
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1.5 18.439L18.439 1.5"
        ></path>
    </svg>
);

Cross.propTypes = {
    color: PropTypes.string,
};

Cross.defaultProps = {
    color: '#000',
};

export default Cross;
