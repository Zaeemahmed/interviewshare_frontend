import React from 'react';
import { Box } from '../../../components/Base/Base';
import { useForm } from 'react-hook-form';

export default function FormCreditCard() {
    const { errors, handleSubmit, register } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)} style={{ color: 'red' }}>
                <Box display="flex" flexDirection="column">
                    <label style={{ color: '#777D7D' }}>Card Number</label>
                    <input
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: '#F5F5F5',
                            borderColor: '#F5F5F5',
                            outline: 'none',
                        }}
                        minLength="12"
                        type="number"
                        name="creditnum"
                        ref={register({
                            required: 'Required',
                            pattern: {
                                value: /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/,
                                message: 'invalid credit card num',
                            },
                        })}
                    />
                    {errors.creditnum && errors.creditnum.message}
                </Box>
                <Box display="flex" flexDirection="column">
                    <label style={{ color: '#777D7D' }}>
                        Expiration date (MM/YY)
                    </label>
                    <input
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: '#F5F5F5',
                            borderColor: '#F5F5F5',
                            outline: 'none',
                        }}
                        name="expiration"
                        ref={register({
                            pattern: {
                                value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                                message: 'Invalid,please try again  ',
                            },
                        })}
                    />
                    {errors.expiration && errors.expiration.message}
                </Box>

                <Box display="flex" flexDirection="column">
                    <label style={{ color: '#777D7D' }}>
                        Security number (CVV/CVC)
                    </label>
                    <input
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: '#F5F5F5',
                            borderColor: '#F5F5F5',
                            outline: 'none',
                        }}
                        minLength="4"
                        type="number"
                        name="security"
                        ref={register({
                            pattern: {
                                //value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                                //message: 'Invalid,please try again  ',
                            },
                        })}
                    />
                    {errors.security && errors.security.message}
                </Box>

                <Box display="flex" flexDirection="column">
                    <label style={{ color: '#777D7D' }}>Name on the card</label>
                    <input
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: '#F5F5F5',
                            borderColor: '#F5F5F5',
                            outline: 'none',
                        }}
                        name="namecard"
                        ref={register({
                            pattern: {
                                //value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                                //message: 'Invalid,please try again  ',
                            },
                        })}
                    />
                    {errors.namecard && errors.namecard.message}
                </Box>

                <Box display="flex" flexDirection="column">
                    <label style={{ color: '#777D7D' }}>Adress</label>
                    <input
                        required={true}
                        style={{
                            borderRadius: '8px',
                            padding: '14px',
                            background: '#F5F5F5',
                            borderColor: '#F5F5F5',
                            outline: 'none',
                        }}
                        name="adress"
                        ref={register({
                            pattern: {
                                //value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                                //message: 'Invalid,please try again  ',
                            },
                        })}
                    />
                    {errors.adress && errors.adress.message}
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
