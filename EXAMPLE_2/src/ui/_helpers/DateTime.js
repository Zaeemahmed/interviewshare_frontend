import moment from 'moment-timezone';

export const formattedDate = createdAt => {
    // Input: 2019-12-31 23:55:00
    // Input2: 2019-12-31
    // Output: August 7 2012, 04:35 pm (CEST)
    return moment(createdAt)
        .tz('Europe/Berlin')
        .format('MMM Do YYYY, h:mm a (z)');
};

export const DDMMYYYY = createdAt => {
    // Input: 2019-12-31 23:55:00
    // Input2: 2019-12-31
    // Output: 31.12.2020
    return moment(createdAt)
        .tz('Europe/Berlin')
        .format('DD.MM.YYYY');
};
