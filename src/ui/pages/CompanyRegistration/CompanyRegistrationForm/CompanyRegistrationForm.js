import React from 'react';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { Grid, Button } from '@material-ui/core';
import TextInput from '../../../components/Formik/TextInput';
import { Flex, Box } from '../../../components/Base/Base';
import { validationSchema } from './ValidationSchema';

const CompanyRegistrationForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'all', //onChange, onBlur, onSubmit, onTouched 
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = data => console.log(data);
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box marginLeft="1rem" width="95%">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            label="Company name"
                            name="companyName"
                            placeholder="Insert company name here"
                            multiline={false}
                            register={register}
                            error={errors.companyName}
                        />
                        <TextInput
                            label="Address"
                            name="address"
                            placeholder="Insert company address here"
                            multiline={false}
                            register={register}
                            error={errors.address}
                        />
                        <TextInput
                            label="Country and city"
                            name="countryAndCity"
                            placeholder="Insert country and city here"
                            multiline={false}
                            register={register}
                            error={errors.countryAndCity}
                        />
                        <TextInput
                            label="VAT (optional)"
                            name="vatNumber"
                            placeholder="Insert VAT number here"
                            multiline={false}
                            register={register}
                            error={errors.vatNumber}
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
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default CompanyRegistrationForm;
