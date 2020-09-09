import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'styled-components';

function IconUpArrow({ style }) {
    return <StyledIcon style={{ ...style }} type="up" />;
}

const StyledIcon = styled(Icon)`
    vertical-align: middle;
    margin-left: 5px;
`;

IconUpArrow.propTypes = {
    style: PropTypes.object,
};

export default IconUpArrow;
