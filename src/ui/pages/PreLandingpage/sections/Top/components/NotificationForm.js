import React from 'react';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { Grid } from '../../../../../components/Base/Grid';
import { Box, Flex } from '../../../../../components/Base/Base';
import TextInput from '../../../../../components/ReactFormHookTypes/TextInput';
import { validationSchema } from './ValidationSchema';

const NotificationForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onSubmit', //onChange, onBlur, onSubmit, onTouched
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = ({ email }, e) => {
        e.target.reset();
    };
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box width="100%">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            name="email"
                            placeholder="youremail@superexcited.123.com"
                            multiline={false}
                            register={register}
                            error={errors.email}
                        />
                        <Flex justifyContent="center">
                            <Button
                                variant="contained"
                                type="submit"
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                    background: '#2074D5',
                                    color: '#fff',
                                }}
                            >
                                Notify me when its ready!
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default NotificationForm;
