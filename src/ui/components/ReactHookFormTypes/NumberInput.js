import React from 'react';
import TextInput from './TextInput';

const NumberInput = ({ ...props }) => {
    return <TextInput type="number" {...props} />;
};

export default NumberInput;
