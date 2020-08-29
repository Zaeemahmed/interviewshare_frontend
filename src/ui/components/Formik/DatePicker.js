import 'date-fns';
import React from 'react';
import { Field } from 'formik';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Text } from '../Base/Base';
import FormControl from './FormControl';

const DatePickerField = ({ field, form }) => {
    const currentError = form.errors[field.name];
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                format="dd/MM/yyyy"
                disablePast
                clearable
                name={field.name}
                value={field.value}
                inputVariant="outlined"
                size="small"
                fullWidth={true}
                style={{
                    backgroundColor: '#F5F5F5',
                    width: '100%',
                    borderRadius: '10px',
                }}
                helperText={currentError}
                error={Boolean(currentError)}
                onError={error => {
                    if (error !== currentError) {
                        form.setFieldError(field.name, error);
                    }
                }}
                onChange={date => {
                    form.setFieldValue(field.name, date, false);
                }}
            />
        </MuiPickersUtilsProvider>
    );
};

const DatePicker = ({ name, label }) => {
    return (
        <FormControl>
            <Text fontFamily="Roboto" letterSpacing="0.02rem" color="#777D7D">
                {label}
            </Text>
            <Field name={name} component={DatePickerField} />
        </FormControl>
    );
};
export default DatePicker;
