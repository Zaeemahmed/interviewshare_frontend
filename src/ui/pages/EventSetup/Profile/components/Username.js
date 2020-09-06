import React from 'react';
import { Typography } from '@material-ui/core';

export default function Username() {
    return (
        <Typography
            variant="p"
            style={{
                fontFamily: 'PT Serif',
                fontWeight: 'bold',
                letterSpacing: '0.08em',
                fontSize: '24px',
                color: '#E0B152',
            }}
        >
            James Smith
        </Typography>
    );
}
