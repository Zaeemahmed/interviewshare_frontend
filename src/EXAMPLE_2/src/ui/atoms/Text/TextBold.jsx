import React from 'react';
import { PropTypes } from 'prop-types';

function TextBold({ children }) {
    return <span style={{ fontWeight: 'bold' }}>{children}</span>;
}

TextBold.propTypes = {
    children: PropTypes.any,
};

export default TextBold;
