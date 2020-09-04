import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Input } from 'antd';
import './InputDate.css';

function InputDate({ value, setValue }) {
    return (
        <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={<FormattedMessage defaultMessage="DD/MM/YYYY" />}
            type="date"
            max="9999-12-31"
            min="2019-01-01"
        />
    );
}

InputDate.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
};

export default InputDate;
