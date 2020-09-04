import React from 'react';
import { PropTypes } from 'prop-types';

function TextGrey({ children }) {
    return <span style={{ color: '#979797' }}>{children}</span>;
}

TextGrey.propTypes = {
    children: PropTypes.any,
};

export default TextGrey;
