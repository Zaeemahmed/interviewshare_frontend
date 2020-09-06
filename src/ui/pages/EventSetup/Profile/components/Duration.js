import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function Duration() {
    return (
        <Box
            style={{
                background: '#DEF7F4',
                borderRadius: '6px',
            }}
        >
            <Typography
                style={{
                    fontFamily: 'Roboto',
                    color: '#057666',
                    fontSize: '14px'
                }}
                variant="p"
            >
                2 days
            </Typography>
        </Box>
    );
}
