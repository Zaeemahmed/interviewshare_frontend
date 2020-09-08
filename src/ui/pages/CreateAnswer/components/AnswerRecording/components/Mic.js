import React from 'react';
import MicIcon from '@material-ui/icons/Mic';
import Circle from './Circle';

const Mic = ({ onClick }) => {
    return (
        <Circle bgColor="#2074D5">
            <MicIcon
                style={{ color: '#ffF', cursor: 'pointer' }}
                onClick={onClick}
            />
        </Circle>
    );
};

export default Mic;
