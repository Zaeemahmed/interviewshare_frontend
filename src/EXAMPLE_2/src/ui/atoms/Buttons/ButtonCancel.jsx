import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';

function ButtonCancel(props) {
    return (
        <Button size="small" {...props}>
            <FormattedMessage defaultMessage="Cancel" />
        </Button>
    );
}

ButtonCancel.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object,
};

export default ButtonCancel;
