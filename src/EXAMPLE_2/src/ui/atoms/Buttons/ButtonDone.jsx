import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';

function ButtonDone({ onClick }) {
    return (
        <Button size="small" type="primary" onClick={onClick}>
            <FormattedMessage defaultMessage="Done" />
        </Button>
    );
}

ButtonDone.propTypes = {
    onClick: PropTypes.func,
};

export default ButtonDone;
