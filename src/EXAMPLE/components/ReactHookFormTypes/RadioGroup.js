import React from 'react';
import {
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    RadioGroup as MuiRadioGroup,
} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

const RadioGroup = ({ useLabelAsValue = true, ...props }) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.label}</FormLabel>
            <MuiRadioGroup name={props.name} control={props.control}>
                {props.options.map(option => (
                    <FormControlLabel
                        key={option.value}
                        value={useLabelAsValue ? option.label : option.value}
                        label={option.label}
                        control={<Radio />}
                        inputRef={props.register}
                    />
                ))}
            </MuiRadioGroup>
            <FormHelperText>
                {props.errors[props.name] && props.errors[props.name].message}
            </FormHelperText>
        </FormControl>
    );
};

export default RadioGroup;
