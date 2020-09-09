import React from 'react';
import { Controller } from 'react-hook-form';
import {
    MuiPickersUtilsProvider,
    DatePicker as MuiDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InfoIconButton from '../Base/InfoIconButton';

const DatePicker = ({ ...props }) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                as={MuiDatePicker}
                inputVariant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: props.hint && (
                        <InfoIconButton html={props.hint} />
                    ),
                }}
                error={props.errors[props.name] ? true : undefined}
                helpertext={
                    props.errors[props.name] && props.errors[props.name].message
                }
                defaultValue={null}
                {...props}
            />
        </MuiPickersUtilsProvider>
    );
};
export default DatePicker;
