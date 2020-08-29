import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Grid, Button } from '@material-ui/core';
import TextInput from '../../components/Formik/TextInput';
import { Flex, Box } from '../../components/Base/Base';

const SearchForm = () => {
    const initialValues = {
        companyName: '',
        address: '',
        countryAndCity: '',
        vatNumber: '',
    };
    const validationSchema = Yup.object({
        companyName: Yup.string()
            .min(3, 'company name with atleast 3 character')
            .required('company name is required'),
        address: Yup.string()
            .min(5, 'address with atleast 10 character is required')
            .required('address is required'),
        vatNumber: Yup.string().min(
            10,
            'VAT number with atleast 10 character is required'
        ),
        countryAndCity: Yup.string().required('country and city are required'),
    });
    return (
        <Grid container>
            <Grid item xs={12} container>
                <Box marginLeft="3rem" width="85%">
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
                                    label="Company name"
                                    name="companyName"
                                    placeholder="Insert company name here"
                                    multiline={false}
                                />
                                <TextInput
                                    label="Address"
                                    name="address"
                                    placeholder="Insert company address here"
                                    multiline={false}
                                />
                                <TextInput
                                    label="Country and city"
                                    name="countryAndCity"
                                    placeholder="Insert country and city here"
                                    multiline={false}
                                />
                                <TextInput
                                    label="VAT (optional)"
                                    name="vatNumber"
                                    placeholder="Insert VAT number here"
                                    multiline={false}
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
                                        CREATE ACCOUNT
                                    </Button>
                                </Flex>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SearchForm;
