import React from 'react';
import { Box } from '../../components/Base/Base';
import { Formik } from 'formik';

export default function LoginUser() {
    return (
        <Box backgroundColor="white" height="100vh">
            <Box as="h1" color="black" fontSize="40px">
                Sign In
            </Box>

            <Formik
                initialValues={{ email: '', password: '' }}
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

                        <button
                            style={{
                                marginTop: '60px',
                                background: '#2074D5',
                                borderRadius: '31px',
                                color: 'white',
                                padding: '10px 10px',
                                outline: 'none',
                                border: 'none',
                                fontSize: '20px',
                            }}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Sign In
                        </button>
                    </form>
                )}
            </Formik>
        </Box>
    );
}
