import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function Duration() {
    return (
        <Box
            style={{
                background: '#DEF7F4',
                borderRadius: '0.4rem',
            }}
        >
            <Typography
                style={{
                    fontFamily: 'Roboto',
                    color: '#057666',
                    fontSize: '0.8rem',
                }}
                variant="h6"
            >
                2 days
            </Typography>
        </Box>
    );
}
