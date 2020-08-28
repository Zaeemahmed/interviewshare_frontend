import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Text } from '../Base/Base';
import FormControl from './FormControl';

const TextInput = ({ label, name, placeholder, multiline, rows }) => {
    return (
        <FormControl>
            <Text fontFamily="Roboto" letterSpacing="0.02rem" color="#777D7D">
                {label}
            </Text>
            <Field
                name={name}
                component={TextField}
                variant="outlined"
                size="small"
                style={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: '10px',
                }}
                fullWidth={true}
                multiline={multiline}
                rows={rows ? rows : 1}
                placeholder={placeholder}
            />
        </FormControl>
    );
};

export default TextInput;