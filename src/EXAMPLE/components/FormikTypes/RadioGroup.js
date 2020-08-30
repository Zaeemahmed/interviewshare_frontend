import React from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';
import { Field } from 'formik';
import { RadioGroup as FormikRadioGroup } from 'formik-material-ui';
import FormHelperText from '@material-ui/core/FormHelperText';

const RadioGroup = ({ options, errors, useLabelAsValue = true, ...props }) => {
    return (
        <Field component={FormikRadioGroup} {...props}>
            {options.map(option => (
                <FormControlLabel
                    key={option.value}
                    value={useLabelAsValue ? option.label : option.value}
                    label={option.label}
                    control={<Radio />}
                />
            ))}
            <FormHelperText>{errors[props.name]}</FormHelperText>
        </Field>
    );
};

export default RadioGroup;
