import React from 'react';
import { Controller } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { default as MuiSelect } from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

const Select = props => {
    return (
        <FormControl fullWidth={props.fullWidth}>
            <InputLabel htmlFor={props.id || props.name}>
                {props.label}
            </InputLabel>
            <MuiSelect name={props.name} {...props}>
                {props.options.map(option => (
                    <MenuItem
                        key={Object.values(option)[0]}
                        value={Object.values(option)[0]}
                    >
                        {Object.values(option)[1]}
                    </MenuItem>
                ))}
            </MuiSelect>
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
