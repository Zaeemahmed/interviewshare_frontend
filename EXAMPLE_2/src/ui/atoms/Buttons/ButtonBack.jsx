import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

function ButtonBack({ onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                cursor: 'pointer',
            }}
        >
            <Icon type="arrow-left" style={{ fontSize: '24px' }} />
        </div>
    );
}

ButtonBack.propTypes = {
    onClick: PropTypes.func,
};

export default ButtonBack;
