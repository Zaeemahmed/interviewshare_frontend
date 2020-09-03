import React from 'react';
import StopIcon from '@material-ui/icons/Stop';
import Circle from './Circle';

const Stop = ({ handleClick }) => {
    return (
        <Circle bgColor="#D6E4F5">
            <StopIcon style={{ color: '#2074D5' }} onClick={handleClick} />
        </Circle>
    );
};

export default Stop;
