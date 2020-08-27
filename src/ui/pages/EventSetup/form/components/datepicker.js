import "date-fns";
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-12")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container>
        <KeyboardDatePicker
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          inputVariant="outlined"
          size="small"
          style={{backgroundColor:"#F5F5F5",width:"100%"}}  
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
