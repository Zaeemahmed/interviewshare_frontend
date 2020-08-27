import React from "react";
import { Grid, Box, InputLabel, Button } from "@material-ui/core";
import Text from "./components/Text";
import DatePicker from "./components/datepicker";

const Form = () => {
  return (
    <Box mt="1rem">
      <Grid container spacing={3} justify="center">
        <Grid item xs={11} md={9} lg={8} container>
          <form style={{ width: "100%" }}>
            <Box mt="1.5rem">
              <InputLabel>Name</InputLabel>
              <Box mt="0.5rem">
                <Text placeholder="Enter your name here" fullWidth={true} />
              </Box>
            </Box>
            <Box mt="1.5rem">
              <InputLabel>Email</InputLabel>
              <Box mt="0.5rem">
                <Text placeholder="example@gmail.com" fullWidth={true} />
              </Box>
            </Box>
            <Box mt="1.5rem">
              <InputLabel>Schedule meeting (optional)</InputLabel>
              <Box mt="0.5rem" style={{ width: "100%" }}>
                <DatePicker />
              </Box>
            </Box>
            <Box mt="1.5rem">
              <InputLabel>Message</InputLabel>
              <Box mt="0.5rem" style={{ width: "100%" }}>
                <Text
                  placeholder="Enter Your message here"
                  multiline
                  rows={4}
                  variant="outlined"
                  style={{ background: "#F5F5F5" }}
                  fullWidth={true}
                />
              </Box>
            </Box>
            <Box mt="1.5rem">
              <Button
                variant="contained"
                component="span"
                style={{
                  width: "100%",
                  borderRadius: "29px",
                  background: "#2074D5",
                  color:"#fff"
                }}
              >
                Contact Now
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
