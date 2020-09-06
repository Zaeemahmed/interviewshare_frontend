import React from 'react';
import PropTypes from 'prop-types';

function IconOcean(props) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="-1 -2 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill={props.color || 'grey'}
                d="M8.25 0V0.75H6.75C6.55109 0.75002 6.36034 0.829044 6.21969 0.969692C6.07904 1.11034 6.00002 1.30109 6 1.5V2.25H4.5C4.30109 2.25002 4.11034 2.32904 3.96969 2.46969C3.82904 2.61034 3.75002 2.80109 3.75 3V5.91064L3.0835 6.09082L3.12305 6.08203C1.76998 6.3738 1.08211 7.9589 1.79443 9.14648L3 11.1562V12.7354C2.93786 12.7412 2.87748 12.75 2.8125 12.75C2.39018 12.75 2.02084 12.6187 1.79443 12.4541C1.56803 12.2895 1.5 12.1359 1.5 12H0C0 12.6929 0.392568 13.2888 0.912598 13.667C1.43263 14.0452 2.09557 14.25 2.8125 14.25C3.52943 14.25 4.19237 14.0452 4.7124 13.667C4.77086 13.6245 4.82014 13.5698 4.875 13.522C4.92986 13.5698 4.97914 13.6245 5.0376 13.667C5.55763 14.0452 6.22057 14.25 6.9375 14.25C7.65443 14.25 8.31737 14.0452 8.8374 13.667C8.89586 13.6245 8.94514 13.5698 9 13.522C9.05486 13.5698 9.10414 13.6245 9.1626 13.667C9.68263 14.0452 10.3456 14.25 11.0625 14.25C11.7794 14.25 12.4424 14.0452 12.9624 13.667C13.0209 13.6245 13.0701 13.5698 13.125 13.522C13.1799 13.5698 13.2291 13.6245 13.2876 13.667C13.8076 14.0452 14.4706 14.25 15.1875 14.25C15.9044 14.25 16.5674 14.0452 17.0874 13.667C17.6074 13.2888 18 12.6929 18 12H16.5C16.5 12.1359 16.432 12.2895 16.2056 12.4541C15.9792 12.6187 15.6098 12.75 15.1875 12.75C15.1225 12.75 15.0621 12.7412 15 12.7354V11.1577L16.207 9.14648H16.2056C16.9184 7.95914 16.2319 6.37535 14.8784 6.0835L14.9165 6.09229L14.25 5.91064V3C14.25 2.80109 14.171 2.61034 14.0303 2.46969C13.8897 2.32904 13.6989 2.25002 13.5 2.25H12V1.5C12 1.30109 11.921 1.11034 11.7803 0.969692C11.6397 0.829044 11.4489 0.75002 11.25 0.75H9.75V0H8.25ZM7.5 2.25H10.5V3C10.5 3.19891 10.579 3.38966 10.7197 3.53031C10.8603 3.67096 11.0511 3.74998 11.25 3.75H12.75V5.50342L9 4.48535L5.25 5.50342V3.75H6.75C6.94891 3.74998 7.13966 3.67096 7.28031 3.53031C7.42096 3.38966 7.49998 3.19891 7.5 3V2.25ZM9 6.03955L14.543 7.54541L14.562 7.5498C14.9545 7.63445 15.1275 8.03036 14.9209 8.37451L13.5 10.7417V12H12.375C12.375 12.1359 12.307 12.2895 12.0806 12.4541C11.8542 12.6187 11.4848 12.75 11.0625 12.75C10.6402 12.75 10.2708 12.6187 10.0444 12.4541C9.81803 12.2895 9.75 12.1359 9.75 12H8.25C8.25 12.1359 8.18198 12.2895 7.95557 12.4541C7.72916 12.6187 7.35982 12.75 6.9375 12.75C6.51518 12.75 6.14584 12.6187 5.91943 12.4541C5.69303 12.2895 5.625 12.1359 5.625 12H4.5V10.7417L3.08057 8.37451C2.87339 8.0291 3.04505 7.63307 3.43799 7.54834L3.4585 7.54395L9 6.03955ZM6 8.25C5.55 8.25 5.25 8.60025 5.25 9C5.25 9.39975 5.55 9.75 6 9.75C6.45 9.75 6.75 9.39975 6.75 9C6.75 8.60025 6.45 8.25 6 8.25ZM12 8.25C11.55 8.25 11.25 8.60025 11.25 9C11.25 9.39975 11.55 9.75 12 9.75C12.45 9.75 12.75 9.39975 12.75 9C12.75 8.60025 12.45 8.25 12 8.25Z"
            />
        </svg>
    );
}

IconOcean.propTypes = {
    color: PropTypes.string,
};

export default IconOcean;