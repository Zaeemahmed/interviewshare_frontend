import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function ButtonX({ onClick }) {
    return (
        <Button
            icon="close-circle"
            onClick={onClick}
            color="#595959"
            css="font-size: 22px; border: 0"
        />
    );
}

ButtonX.propTypes = {
    onClick: PropTypes.func,
};

export default ButtonX;
