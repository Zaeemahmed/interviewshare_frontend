import React from 'react';
import { Box } from '../../components/Base/Base';
import { useForm } from 'react-hook-form';

export default function LoginUser() {
    const { errors, handleSubmit, register } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <Box backgroundColor="white" height="100vh">
            <Box as="h1" color="black" fontSize="40px">
                Sign In
            </Box>

            <form onSubmit={handleSubmit(onSubmit)} style={{ color: 'red' }}>
                <Box display="flex" flexDirection="column">
                    <label style={{ color: '#777D7D' }}>Email</label>
                    <input
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: '#F5F5F5',
                            borderColor: '#F5F5F5',
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
                <Box display="flex" flexDirection="column">
                    <label style={{ color: '#777D7D' }}>Password</label>
                    <input
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: '#F5F5F5',
                            borderColor: '#F5F5F5',
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
                </Box>

                <button
                    style={{
                        marginTop: '60px',
                        background: '#2074D5',
                        borderRadius: '31px',
                        color: 'white',
                        padding: '10px 40px',
                        outline: 'none',
                        border: 'none',
                        fontSize: '20px',
                        width: '100%',
                    }}
                    type="submit"
                >
                    Sign In
                </button>
            </form>
        </Box>
    );
}
