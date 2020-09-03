import React from 'react';
import MicIcon from '@material-ui/icons/Mic';
import Circle from './Circle';

const Mic = ({ handleClick }) => {
    return (
        <Circle bgColor="#2074D5">
            <MicIcon style={{ color: '#ffF' }} onClick={handleClick} />
        </Circle>
    );
};

export default Mic;
