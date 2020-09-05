import React from 'react';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { Grid, Button } from '@material-ui/core';
import TextInput from '../../../components/Formik/TextInput';
import { Flex, Box } from '../../../components/Base/Base';
import DatePicker from '../../../components/Formik/DatePicker';
import { validationSchema } from './ValidationSchema';

const UserSearchForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'all',
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = data => console.log(data);
    return (
        <Grid container mt="1rem">
            <Grid item xs={12}>
                <Box width="100%">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            label="Job Title"
                            name="jobTitle"
                            placeholder="Enter Job Title"
                            multiline={false}
                            register={register}
                            error={errors.jobTitle}
                        />
                        <TextInput
                            label="Location"
                            name="location"
                            placeholder="Enter Location"
                            multiline={false}
                            register={register}
                            error={errors.location}
                        />

                        <DatePicker
                            label="Availibility Date"
                            name="date"
                            register={register}
                            error={errors.date}
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

export default UserSearchForm;
