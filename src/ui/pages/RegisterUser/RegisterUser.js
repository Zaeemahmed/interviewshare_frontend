import React from 'react';
import { Box, Flex } from '../../components/Base/Base';
import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import theme from '../../../config/theme';

export default function RegisterUser() {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = value => console.log(value);
    return (
        <Box
            height="100%"
            position="relative"
            backgroundColor={theme.colors.white}
            padding="10px"
        >
            <Box as="h1" color={theme.colors.black} fontSize="40px">
                Sign Up
            </Box>
            <Box as="p" color={theme.colors.black} fontSize="14px">
                You privacy is important. You can delete anytime. Add this
                Interview Recording to your CV, to make it faster for your
                future colleagues to get to know you. This service is free!
            </Box>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ color: theme.colors.red }}
            >
                <Box display="flex" flexDirection="column">
                    <label style={{ color: theme.colors.labelGray }}>
                        Email
                    </label>
                    <TextField
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: theme.colors.bgGrayLight,
                            borderColor: theme.colors.bgGrayLight,
                            outline: 'none',
                        }}
                        name="email"
                        ref={register({
                            required: 'Required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'invalid email address',
                            },
                        })}
                    />
                    {errors.email && errors.email.message}
                </Box>
                <Flex flexDirection="column">
                    <label style={{ color: theme.colors.labelGray }}>
                        Password
                    </label>
                    <TextField
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: theme.colors.bgGrayLight,
                            borderColor: theme.colors.bgGrayLight,
                            outline: 'none',
                        }}
                        minLength="10"
                        type="password"
                        name="password"
                        ref={register({
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                message:
                                    'Password should contatin  1 capital letter and 1 number and special char are not allowed eg @,:,"" ',
                            },
                        })}
                    />
                    {errors.password && errors.password.message}
                </Flex>
                <Flex flexDirection="column">
                    <label style={{ color: theme.colors.labelGray }}>
                        Job Title
                    </label>
                    <TextField
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: theme.colors.bgGrayLight,
                            borderColor: theme.colors.bgGrayLight,
                            outline: 'none',
                        }}
                        type="text"
                        name="job"
                        ref={register({ minLength: 2 })}
                    />
                    {errors.job && errors.job.message}
                </Flex>
                <Flex
                    display="flex"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    background={theme.colors.bgGrayLight}
                    borderRadius="8px"
                    marginTop="10px"
                >
                    <Box
                        as="input"
                        type="checkbox"
                        width="50%"
                        height="20px"
                    ></Box>
                    <Box as="p" width="50%" color={theme.colors.black}>
                        I agree to Terms of Service and Privacy Policy
                    </Box>
                </Flex>
                <button
                    style={{
                        marginTop: '60px',
                        background: theme.colors.btnBlue,
                        borderRadius: '31px',
                        color: theme.colors.white,
                        padding: '10px 40px',
                        outline: 'none',
                        border: 'none',
                        fontSize: '20px',
                        width: '100%',
                    }}
                    type="submit"
                >
                    Create Account
                </button>
            </form>
        </Box>
    );
}
