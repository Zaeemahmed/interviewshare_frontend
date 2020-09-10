import React from 'react';
import { Controller } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { default as MuiSelect } from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

const Select = props => {
    return (
        <FormControl fullWidth={props.fullWidth}>
            <InputLabel htmlFor={props.id || props.name}>
                {props.label}
            </InputLabel>
            <MuiSelect name={props.name} {...props}>
                {props.options.map((option, index) => {
                    return (
                        <MenuItem
                            key={props.name + '' + index}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    );
                })}
            </MuiSelect>
            <FormHelperText>
                {props.errors[props.name] && props.errors[props.name].message}
            </FormHelperText>
        </FormControl>
    );
};

const DropDown = ({ ...props }) => {
    return (
        <Controller
            as={Select}
            placeholder="Please select"
            fullWidth
            defaultValue=""
            {...props}
        />
    );
};

export default DropDown;
