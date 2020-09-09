import React from 'react';
import { TextField } from '@material-ui/core';
import { Text } from '../Base/Base';
import FormControl from './FormControl';

const TextInput = ({
    label,
    multiline,
    rows,
    register,
    error,
    ...rest
}) => {
    return (
        <FormControl>
            <Text fontFamily="Roboto" letterSpacing="0.02rem" color="#777D7D">
                {label}
            </Text>
            <TextField
                variant="outlined"
                size="small"
                style={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: '10px',
                }}
                fullWidth
                multiline={multiline}
                rows={rows ? rows : 1}
                error={error ? true : false}
                inputRef={register}
                helperText={error ? error.message: ''}
                {...rest}
            />
        </FormControl>
    );
};

export default TextInput;
