import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const ForwardArrow = props => {
    const { onClick, className } = props;
    return (
        <ArrowForwardIcon
            style={{
                color: '#2074D5',
                cursor: 'pointer',
                background: '#D6E4F5',
                borderRadius: '50%',
                textAlign: 'center',
                width: '22px',
                height: '22px',
                padding: '10px',
            }}
            onClick={onClick}
            className={className}
        />
    );
};

export const BackArrow = props => {
    const { onClick, className } = props;
    return (
        <ArrowBackIcon
            style={{
                color: '#2074D5',
                cursor: 'pointer',
                background: '#D6E4F5',
                borderRadius: '50%',
                textAlign: 'center',
                width: '22px',
                height: '22px',
                padding: '10px',
                zIndex:'1',
                left:'-13px'
            }}
            onClick={onClick}
            className={className}
        />
    );
};
