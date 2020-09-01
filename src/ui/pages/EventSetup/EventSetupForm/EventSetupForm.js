import React from 'react';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import TextInput from '../../../components/Formik/TextInput';
import DatePicker from '../../../components/Formik/DatePicker';
import { Box, Flex } from '../../../components/Base/Base';
import { Grid } from '../../../components/Base/Grid';

const EventSetupForm = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(5, 'Name with atleast 5 character'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email address'),
        date: Yup.date().optional(),
        message: Yup.string()
            .required('message is required')
            .min(10, 'Enter a message with atleast 10 characters'),
    });

    const { register, handleSubmit, errors } = useForm({
        mode: 'all',
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = data => console.log(data);
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box width="95%" marginLeft="1rem">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            label="Name"
                            name="name"
                            placeholder="Enter your name here"
                            multiline={false}
                            register={register}
                            error={errors.name}
                        />
                        <TextInput
                            label="Email"
                            name="email"
                            placeholder="example@gmail.com"
                            multiline={false}
                            register={register}
                            error={errors.email}
                        />
                        <DatePicker
                            label="Schedule meeting (optional)"
                            name="date"
                            register={register}
                            error={errors.date}
                        />
                        <TextInput
                            label="Message"
                            name="message"
                            placeholder="Enter Your message here"
                            multiline={true}
                            rows={4}
                            register={register}
                            error={errors.message}
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
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default EventSetupForm;
