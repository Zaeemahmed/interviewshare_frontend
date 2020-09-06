import React from 'react';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import TextInput from '../../../components/Formik/TextInput';
import DatePicker from '../../../components/Formik/DatePicker';
import { Box, Flex } from '../../../components/Base/Base';
import { Grid } from '../../../components/Base/Grid';
import { validationSchema } from './ValidationSchema';

const EventSetupForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'all',//onChange, onBlur, onSubmit, onTouched 
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = data => console.log(data);
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box width="100%">
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
