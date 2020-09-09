import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import InfoIconButton from '../Base/InfoIconButton';

const TextInput = ({ ...props }) => {
    return (
        <Controller
            as={TextField}
            variant="outlined"
            fullWidth
            InputProps={{
                endAdornment: props.hint && (
                    <InfoIconButton html={props.hint} />
                ),
            }}
            error={props.errors[props.name] ? true : undefined}
            helperText={
                props.errors[props.name] && props.errors[props.name].message
            }
            defaultValue={props.defaultValue || ''}
            {...props}
        />
    );
};

export default TextInput;
