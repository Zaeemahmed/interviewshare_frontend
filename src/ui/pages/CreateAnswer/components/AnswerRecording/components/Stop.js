import React from 'react';
import StopIcon from '@material-ui/icons/Stop';
import Circle from './Circle';

const Stop = ({ onClick }) => {
    return (
        <Circle bgColor="#D6E4F5">
            <StopIcon
                style={{ color: '#2074D5', cursor: 'pointer' }}
                onClick={onClick}
            />
        </Circle>
    );
};

export default Stop;
