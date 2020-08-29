import React from 'react';
import { Field } from 'formik';
import { DatePicker as FormikDatePicker } from 'formik-material-ui-pickers';

const DatePicker = ({ ...props }) => {
    return <Field component={FormikDatePicker} margin="normal" {...props} />;
};

export default DatePicker;
