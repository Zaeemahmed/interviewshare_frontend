import React from 'react';
import { Box } from '../../components/Base/Base';
import { Formik } from 'formik';

export default function RegisterUser() {
    return (
        <Box
            height="100%"
            position="relative"
            backgroundColor="white"
            padding="10px"
        >
            <Box as="h1" color="black" fontSize="40px">
                Sign Up
            </Box>
            <Box as="p" color="black" fontSize="14px">
                You privacy is important. You can delete anytime. Add this
                Interview Recording to your CV, to make it faster for your
                future colleagues to get to know you. This service is free!
            </Box>
            <Formik
                initialValues={{ email: '', password: '', job: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'space-between',
                        }}
                        onSubmit={handleSubmit}
                    >
                        <label style={{ color: '#777D7D' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Insert your email here"
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                            }}
                        />
                        {errors.email && touched.email && errors.email}
                        <label style={{ color: '#777D7D' }}>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Insert your password here"
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                            }}
                        />
                        {errors.password && touched.password && errors.password}
                        <label style={{ color: '#777D7D' }}>Job Title</label>
                        <input
                            type="text"
                            name="job"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.job}
                            placeholder="Enter job title"
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                            }}
                        />
                        {errors.job && touched.job && errors.job}
                        <Box
                            display="flex"
                            width="100%"
                            alignItems="center"
                            justifyContent="center"
                            background="#EFF0F0"
                            borderRadius="8px"
                            marginTop="10px"
                        >
                            <Box
                                as="input"
                                type="checkbox"
                                width="50%"
                                height="20px"
                            ></Box>
                            <Box as="p" width="50%" color="black">
                                I agree to Terms of Service and Privacy Policy
                            </Box>
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
                            }}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Create Account
                        </button>
                    </form>
                )}
            </Formik>
        </Box>
    );
}
