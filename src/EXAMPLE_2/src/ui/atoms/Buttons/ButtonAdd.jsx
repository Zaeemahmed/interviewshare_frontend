import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';

function ButtonAdd({ onClick, style }) {
    return (
        <Button size="small" type="primary" onClick={onClick} style={style}>
            <FormattedMessage defaultMessage="Add" />
        </Button>
    );
}

ButtonAdd.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object,
};

export default ButtonAdd;
