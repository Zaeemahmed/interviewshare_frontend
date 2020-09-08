import React from 'react';
import Circle from './Circle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Play = ({ onClick }) => {
    return (
        <Circle bgColor="#D6E4F5">
            <PlayArrowIcon
                style={{ color: '#2074D5', cursor: 'pointer' }}
                onClick={onClick}
            />
        </Circle>
    );
};

export default Play;
