import React from 'react';
import { Field } from 'formik';
import { DateTimePicker as FormikDateTimePicker } from 'formik-material-ui-pickers';

const DateTimePicker = ({ ...props }) => {
    return (
        <Field component={FormikDateTimePicker} margin="normal" {...props} />
    );
};

export default DateTimePicker;
