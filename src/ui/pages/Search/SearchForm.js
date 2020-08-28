import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Grid, Button } from '@material-ui/core';
import TextInput from '../../components/Formik/TextInput';
import { Flex } from '../../components/Base/Base';
import DatePicker from '../../components/Formik/DatePicker';

const SearchForm = () => {
    const initialValues = {
        jobTitle: '',
        location: '',
        date: new Date(),
    };
    const validationSchema = Yup.object({
        jobTitle: Yup.string()
            .min(5, 'Job title with atleast 5 character')
            .required('Job title is required'),
        location: Yup.string()
            .min(5, 'Location with atleast 5 character is required')
            .required('Location is required'),
        date: Yup.date()
            .required()
            .nullable(),
    });
    return (
        <Grid container spacing={3} justify="center">
            <Grid item xs={10} md={9} lg={8} container>
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
                    {({ errors, values }) => (
                        <Form>
                            <TextInput
                                label="Job Title"
                                name="jobTitle"
                                placeholder="Enter Job Title"
                                multiline={false}
                            />
                            <TextInput
                                label="Location"
                                name="location"
                                placeholder="Enter Location"
                                multiline={false}
                            />

                            <DatePicker label="Availibility Date" name="date" />

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
            </Grid>
        </Grid>
    );
};

export default SearchForm;
