import React from 'react';
import Circle from './Circle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Play = ({ handleClick }) => {
    return (
        <Circle bgColor="#D6E4F5">
            <PlayArrowIcon style={{ color: '#2074D5' }} onClick={handleClick} />
        </Circle>
    );
};

export default Play;
