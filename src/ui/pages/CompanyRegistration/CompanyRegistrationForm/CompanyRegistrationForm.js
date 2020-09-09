import React from 'react';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { Grid, Button } from '@material-ui/core';
import TextInput from '../../../components/ReactFormHookTypes/TextInput';
import { Flex, Box } from '../../../components/Base/Base';
import { validationSchema } from './ValidationSchema';
import {
    CompanyRegistration,
    cacheCompanies,
} from '../../../../apollo/Mutations/companyRegistration';

const CompanyRegistrationForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'all', //onChange, onBlur, onSubmit, onTouched
        resolver: yupResolver(validationSchema),
    });

    const [companyRegistration] = useMutation(CompanyRegistration, {
        update: cacheCompanies,
    });

    const onSubmit = ({ name, address, countryAndCity, vatNumber }, e) => {
        const id = '2';
        companyRegistration({
            variables: {
                id,
                name,
                address,
                countryAndCity,
                vatNumber,
            },
        });
        e.target.reset();
    };
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box width="100%">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            label="Company name"
                            name="name"
                            placeholder="Insert company name here"
                            multiline={false}
                            register={register}
                            error={errors.name}
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
