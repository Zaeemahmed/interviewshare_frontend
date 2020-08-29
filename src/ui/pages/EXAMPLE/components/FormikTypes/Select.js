import React from 'react';
import { Field } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Select } from 'formik-material-ui';
import { MenuItem } from '@material-ui/core';

const SelectType = ({ options, ...props }) => {
    return (
        <FormControl fullWidth={props.fullWidth}>
            <InputLabel htmlFor={props.id || props.name}>
                {props.label}
            </InputLabel>
            <Field component={Select} {...props}>
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Field>
        </FormControl>
    );
};

export default SelectType;
