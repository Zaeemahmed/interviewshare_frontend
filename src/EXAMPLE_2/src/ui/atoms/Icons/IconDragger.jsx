import React from 'react';
import PropTypes from 'prop-types';

function IconDragger(props) {
    return (
        <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.3594 4.99609C12.4367 4.99609 12.5 4.93281 12.5 4.85547V3.87109C12.5 3.79375 12.4367 3.73047 12.3594 3.73047H3.64062C3.56328 3.73047 3.5 3.79375 3.5 3.87109V4.85547C3.5 4.93281 3.56328 4.99609 3.64062 4.99609H12.3594ZM14.8906 7.45703H1.10938C1.03203 7.45703 0.96875 7.52031 0.96875 7.59766V8.58203C0.96875 8.65938 1.03203 8.72266 1.10938 8.72266H14.8906C14.968 8.72266 15.0312 8.65938 15.0312 8.58203V7.59766C15.0312 7.52031 14.968 7.45703 14.8906 7.45703ZM14.8906 0.00390625H1.10938C1.03203 0.00390625 0.96875 0.0671875 0.96875 0.144531V1.12891C0.96875 1.20625 1.03203 1.26953 1.10938 1.26953H14.8906C14.968 1.26953 15.0312 1.20625 15.0312 1.12891V0.144531C15.0312 0.0671875 14.968 0.00390625 14.8906 0.00390625Z"
                fill={props.color || '#C1C1C1'}
            />
        </svg>
    );
}

IconDragger.propTypes = {
    color: PropTypes.string,
};

export default IconDragger;