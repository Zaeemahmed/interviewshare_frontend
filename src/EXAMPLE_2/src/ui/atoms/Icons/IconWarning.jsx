import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

function IconWarning({ style }) {
    const iconStyle = {
        fontSize: '18px',
        ...style,
    };

    return (
        <Icon
            style={iconStyle}
            type="warning"
            theme="twoTone"
            twoToneColor="#f88c2c"
        />
    );
}

IconWarning.propTypes = {
    style: PropTypes.object,
};

export default IconWarning;
