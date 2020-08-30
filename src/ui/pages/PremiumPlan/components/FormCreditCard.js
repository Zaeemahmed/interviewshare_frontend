import React from 'react';
import { Box } from '../../../components/Base/Base';
import { Formik } from 'formik';

export default function FormCreditCard() {
    return (
        <Box>
            <Formik>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <Box padding="10px" display="flex" flexDirection="column">
                        <label style={{ color: '#777D7D' }}>Card Number</label>
                        <input
                            type="number"
                            name="cardnumber"
                            placeholder="1234 5678 9213"
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                                height: '20px',
                            }}
                        />
                        <label style={{ color: '#777D7D' }}>
                            Expiration date (MM/YY)
                        </label>
                        <input
                            type="text"
                            name="expiration"
                            placeholder="08/20"
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                                height: '20px',
                            }}
                        />
                        <label style={{ color: '#777D7D' }}>
                            Security number (CVV/CVC)
                        </label>
                        <input
                            type="number"
                            name="securitynumber"
                            placeholder="1234"
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                                height: '20px',
                            }}
                        />
                        <label style={{ color: '#777D7D' }}>
                            Name on the card
                        </label>
                        <input
                            type="text"
                            name="cardname"
                            placeholder="Edes Sulce"
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                                height: '20px',
                            }}
                        />
                        <label style={{ color: '#777D7D' }}>Adress</label>
                        <input
                            type="text"
                            name="adress"
                            placeholder="Tirana,Albania"
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                                height: '20px',
                            }}
                        />
                    </Box>
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        padding="10px"
                    >
                        <button
                            style={{
                                background: '#2074D5',
                                borderRadius: '31px',
                                color: 'white',
                                padding: '10px 10px',
                                outline: 'none',
                                border: 'none',
                                fontSize: '20px',
                                width: '80%',
                            }}
                        >
                            $ 24,99 Buy
                        </button>
                    </Box>
                </form>
            </Formik>
        </Box>
    );
}
