import React from 'react';
import PropTypes from 'prop-types';

function IconCompass(props) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill={props.color}
                d="M9 0C4.02991 0 0 4.02991 0 9C0 13.9701 4.02991 18 9 18C13.9701 18 18 13.9701 18 9C18 4.02991 13.9701 0 9 0ZM9 16.4732C4.87366 16.4732 1.52679 13.1263 1.52679 9C1.52679 4.87366 4.87366 1.52679 9 1.52679C13.1263 1.52679 16.4732 4.87366 16.4732 9C16.4732 13.1263 13.1263 16.4732 9 16.4732ZM12.9857 4.65871C12.907 4.62796 12.8231 4.61302 12.7386 4.61475C12.6542 4.61647 12.5709 4.63482 12.4935 4.66875L7.04933 7.05134L4.66875 12.4955C4.59643 12.6603 4.59643 12.8471 4.66875 13.0118C4.73705 13.1685 4.86362 13.2911 5.02433 13.3533C5.10067 13.3835 5.17902 13.3975 5.25937 13.3975C5.34777 13.3975 5.43415 13.3795 5.51652 13.3433L10.9607 10.9607L13.3413 5.51652C13.376 5.43706 13.3944 5.35142 13.3952 5.26471C13.396 5.178 13.3793 5.09201 13.3461 5.01191C13.3129 4.93181 13.2639 4.85923 13.202 4.79854C13.14 4.73785 13.0665 4.69028 12.9857 4.65871V4.65871ZM10.3018 9.45L10.8281 9.97634L9.97634 10.8281L9.45 10.3018L6.34821 11.6598L7.70424 8.55804L7.19196 8.04375L8.04375 7.19196L8.55603 7.70424L11.6598 6.34821L10.3018 9.45ZM8.04375 7.19196L7.19196 8.04375L7.70424 8.55804L9.45 10.3018L9.97634 10.8281L10.8281 9.97634L10.3018 9.45L8.55804 7.70424L8.04375 7.19196Z"
            />
        </svg>
    );
}

IconCompass.propTypes = {
    color: PropTypes.string,
};

export default IconCompass;