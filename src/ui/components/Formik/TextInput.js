import React from 'react';
import { TextField } from '@material-ui/core';
import { Text } from '../Base/Base';
import FormControl from './FormControl';

const TextInput = ({
    label,
    name,
    placeholder,
    multiline,
    rows,
    register,
    error,
}) => {
    return (
        <FormControl>
            <Text fontFamily="Roboto" letterSpacing="0.02rem" color="#777D7D" fontSize="16px">
                {label}
            </Text>
            <TextField
                name={name}
                variant="outlined"
                size="small"
                style={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: '10px',
                }}
                fullWidth
                multiline={multiline}
                rows={rows ? rows : 1}
                placeholder={placeholder}
                error={error ? true : false}
                inputRef={register}
                helperText={error ? error.message: ''}
            />
        </FormControl>
    );
};

export default TextInput;
