import React from 'react';
import {
    FormControlLabel,
    FormGroup,
    FormControl,
    FormLabel,
    FormHelperText,
} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import InfoIconButton from '../Base/InfoIconButton';

const ToggleSwitchComponent = ({
    name,
    value,
    register,
    defaultValue,
    hint,
}) => {
    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch type="checkbox" defaultChecked={!!defaultValue} />
                }
                name={name}
                inputRef={register}
                value={value}
                label={value}
            />
            {hint && <InfoIconButton html={hint} />}
        </FormGroup>
    );
};

const ToggleSwitch = ({ ...props }) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.label}</FormLabel>
            <FormGroup>
                <ToggleSwitchComponent
                    key={props.label}
                    value={props.label}
                    name={props.name}
                    defaultValue={null}
                    {...props}
                />
                <FormHelperText>
                    {props.errors[props.name] &&
                        props.errors[props.name].message}
                </FormHelperText>
            </FormGroup>
        </FormControl>
    );
};

export default ToggleSwitch;
