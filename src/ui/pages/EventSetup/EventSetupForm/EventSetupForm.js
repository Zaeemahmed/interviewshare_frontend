import React from 'react';
import * as Yup from 'yup';
import { Grid, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';
import TextInput from '../../../components/Formik/TextInput';
import DatePicker from '../../../components/Formik/DatePicker';
import { Box, Flex } from '../../../components/Base/Base';

const EventSetupForm = () => {
    const initialValues = {
        name: '',
        email: '',
        date: new Date(),
        message: '',
    };
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(5, 'Name with atleast 5 character')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        date: Yup.date()
            .required()
            .nullable(),
        message: Yup.string()
            .min(10, 'Enter a message with atleast 10 characters')
            .required('message is required'),
    });
    return (
        <Box mt="1rem">
            <Grid container>
                <Grid item xs={12} container>
                    <Box width="95%" marginLeft="1rem">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ values, errors }) => (
                                <Form style={{ width: '100%' }}>
                                    <TextInput
                                        label="Name"
                                        name="name"
                                        placeholder="Enter your name here"
                                        multiline={false}
                                    />
                                    <TextInput
                                        label="Email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        multiline={false}
                                    />
                                    <DatePicker
                                        label="Schedule meeting (optional)"
                                        name="date"
                                    />
                                    <TextInput
                                        label="Message"
                                        name="message"
                                        placeholder="Enter Your message here"
                                        multiline={true}
                                        rows={4}
                                    />
                                    <Flex mt="2.5rem" justifyContent="center">
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            style={{
                                                width: '100%',
                                                borderRadius: '29px',
                                                background: '#2074D5',
                                                color: '#fff',
                                            }}
                                        >
                                            Contact Now
                                        </Button>
                                    </Flex>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EventSetupForm;
