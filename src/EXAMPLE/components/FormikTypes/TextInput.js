import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

const TextInput = ({ ...props }) => {
    return <Field component={TextField} margin="normal" {...props} />;
};

export default TextInput;
