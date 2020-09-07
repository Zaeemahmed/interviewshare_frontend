import React from 'react';
import { Box, Flex } from '../../../components/Base/Base';
import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import theme from '../../../../config/theme';

export default function FormCreditCard() {
    const { errors, handleSubmit, register } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <Box>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ color: theme.colors.red }}
            >
                <Flex flexDirection="column">
                    <label style={{ color: theme.colors.labelGray }}>
                        Card Number
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
                </Flex>
                <Flex flexDirection="column">
                    <label style={{ color: theme.colors.labelGray }}>
                        Expiration date (MM/YY)
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
                        name="expiration"
                        ref={register({
                            pattern: {
                                value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                                message: 'Invalid,please try again  ',
                            },
                        })}
                    />
                    {errors.expiration && errors.expiration.message}
                </Flex>

                <Flex flexDirection="column">
                    <label style={{ color: theme.colors.labelGray }}>
                        Security number (CVV/CVC)
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
                </Flex>

                <Flex flexDirection="column">
                    <label style={{ color: theme.colors.labelGray }}>
                        Name on the card
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
                        name="namecard"
                        ref={register({
                            pattern: {
                                //value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                                //message: 'Invalid,please try again  ',
                            },
                        })}
                    />
                    {errors.namecard && errors.namecard.message}
                </Flex>

                <Flex flexDirection="column">
                    <label style={{ color: theme.colors.labelGray }}>
                        Adress
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
                        name="adress"
                        ref={register({
                            pattern: {
                                //value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                                //message: 'Invalid,please try again  ',
                            },
                        })}
                    />
                    {errors.adress && errors.adress.message}
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
                    Sign In
                </button>
            </form>
        </Box>
    );
}
