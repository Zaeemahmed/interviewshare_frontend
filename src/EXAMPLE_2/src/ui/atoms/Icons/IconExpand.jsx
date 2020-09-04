import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';

function IconExpand({ isActive }) {
    return isActive ? (
        <span>
            <CollapseIcon type="minus-square" />
        </span>
    ) : (
        <span>
            <CollapseIcon type="plus-square" />
        </span>
    );
}

const CollapseIcon = styled(Icon)`
    font-size: 16px;
    color: rgba(197, 197, 197, 0.65);
`;

IconExpand.propTypes = {
    isActive: PropTypes.bool,
};

export default IconExpand;
