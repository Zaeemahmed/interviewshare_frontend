import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'styled-components';

function IconDownArrow({ style }) {
    return <StyledIcon style={{ ...style }} type="down" />;
}

const StyledIcon = styled(Icon)`
    vertical-align: middle;
    margin-left: 5px;
`;

IconDownArrow.propTypes = {
    style: PropTypes.object,
};

export default IconDownArrow;
