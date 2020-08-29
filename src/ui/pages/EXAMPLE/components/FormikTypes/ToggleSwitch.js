import React, { Children } from 'react';
import { Field } from 'formik';
import { FormControlLabel, FormGroup } from '@material-ui/core';
import { Switch } from 'formik-material-ui';
import InfoIconButton from '../Base/InfoIconButton';

const ToggleSwitch = ({ ...props }) => {
    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Field
                        component={Switch}
                        margin="normal"
                        type="checkbox"
                        {...props}
                    >
                        {Children}
                    </Field>
                }
                label={props.label}
            />
            {props.hintmessage && <InfoIconButton html={props.hintmessage} />}
        </FormGroup>
    );
};

export default ToggleSwitch;
