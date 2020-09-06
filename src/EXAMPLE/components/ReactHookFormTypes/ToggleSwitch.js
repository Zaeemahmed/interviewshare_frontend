import React, { Children } from 'react';
import { FormControlLabel, FormGroup } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { Controller } from 'react-hook-form';
import InfoIconButton from '../Base/InfoIconButton';

const ToggleSwitchComponent = ({ ...props }) => {
    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch type="checkbox" {...props}>
                        {Children}
                    </Switch>
                }
                label={props.label}
            />
            {props.hintmessage && <InfoIconButton html={props.hintmessage} />}
        </FormGroup>
    );
};

const ToggleSwitch = ({ ...props }) => {
    return (
        <Controller
            as={ToggleSwitchComponent}
            defaultValue={false}
            error={props.errors[props.name] ? true : undefined}
            helpertext={
                props.errors[props.name] && props.errors[props.name].message
            }
            {...props}
        />
    );
};

export default ToggleSwitch;
