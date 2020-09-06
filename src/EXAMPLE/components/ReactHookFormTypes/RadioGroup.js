import React from 'react';
import { Controller } from 'react-hook-form';
import {
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    RadioGroup as MuiRadioGroup,
} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

const RadioGroupComponent = ({ useLabelAsValue = true, ...props }) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.label}</FormLabel>
            <MuiRadioGroup {...props}>
                {props.options.map(option => (
                    <FormControlLabel
                        key={option.value}
                        value={useLabelAsValue ? option.label : option.value}
                        label={option.label}
                        control={<Radio />}
                    />
                ))}
            </MuiRadioGroup>
            <FormHelperText>{props.error}</FormHelperText>
        </FormControl>
    );
};

const RadioGroup = ({ ...props }) => {
    return (
        <Controller
            as={RadioGroupComponent}
            defaultValue=""
            error={props.errors[props.name] ? true : undefined}
            {...props}
        />
    );
};

export default RadioGroup;
