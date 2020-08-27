import React from 'react';
import { Typography } from '@material-ui/core';

export default function UserOccupation() {
    return (
        <Typography
            variant="h6"
            style={{
                fontFamily: 'Roboto',
                color: '#777D7D',
                letterSpacing: '0.02em',
                fontSize: '1.1rem',
            }}
        >
            UX/UI Designer
        </Typography>
    );
}
