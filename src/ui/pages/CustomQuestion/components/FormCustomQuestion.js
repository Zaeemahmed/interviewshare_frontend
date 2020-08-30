import React from 'react';
import { Box } from '../../../components/Base/Base';
import { Formik } from 'formik';

export default function FormCustomQuestion() {
    return (
        <Box height="80%">
            <Formik>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Box padding="10px" display="flex" flexDirection="column">
                        <label style={{ color: '#777D7D' }}>
                            Custom Question
                        </label>
                        <input
                            type="text"
                            name="customquestion"
                            placeholder="Write your question here..."
                            style={{
                                borderRadius: '8px',
                                padding: '14px',
                                background: '#F5F5F5',
                                borderColor: '#F5F5F5',
                                outline: 'none',
                                height: '40px',
                            }}
                        />
                    </Box>
                    <Box
                        alignSelf="flex-end"
                        justifySelf="flex-end"
                        width="100%"
                        position="absolute"
                        bottom="0"
                    >
                        <button
                            style={{
                                marginTop: '60px',
                                color: '#2074D5',
                                background: '#fff',
                                borderRadius: '31px',
                                padding: '10px 10px',
                                outline: 'none',
                                border: 'none',
                                fontSize: '20px',
                                width: '50%',
                                border: '1px solid #2074D5',
                            }}
                        >
                            Cancel
                        </button>

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
                                width: '50%',
                            }}
                        >
                            Save
                        </button>
                    </Box>
                </form>
            </Formik>
        </Box>
    );
}
