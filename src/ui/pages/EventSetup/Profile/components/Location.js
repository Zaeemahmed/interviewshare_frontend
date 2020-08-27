import React from 'react';
import { Box, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Location() {
    return (
        <Box style={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon
                style={{ color: '#A1A5A5', marginRight: '0.1rem' }}
            />
            <Typography
                style={{
                    fontFamily: 'Roboto',
                    color: '#A1A5A5',
                    fontSize: '0.9rem',
                    letterSpacing: '0.03rem',
                }}
                variant="h6"
            >
                Berlin, Germany
            </Typography>
        </Box>
    );
}
