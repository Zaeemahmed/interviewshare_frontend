import 'date-fns';
import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Text } from '../Base/Base';
import FormControl from './FormControl';

const DatePickerField = ({ name, error, register }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                format="DD/MM/YYYY"
                autoOk
                disablePast
                clearable
                name={name}
                value={selectedDate}
                inputVariant="outlined"
                size="small"
                fullWidth={true}
                style={{
                    backgroundColor: '#F5F5F5',
                    width: '100%',
                    borderRadius: '10px',
                }}
                helperText={error ? error.message : ''}
                error={Boolean(error)}
                onChange={handleDateChange}
                inputRef={register}
            />
        </MuiPickersUtilsProvider>
    );
};

const DatePicker = ({label, ...rest}) => {
    return (
        <FormControl>
            <Text fontFamily="Roboto" letterSpacing="0.02rem" color="#777D7D">
                {label}
            </Text>
            <DatePickerField {...rest} />
        </FormControl>
    );
};
export default DatePicker;
