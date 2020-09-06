import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
}));

export default function UserImage() {
    const classes = useStyles();

    return (
        <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHDaab8UuUjGCcMpcHiSXniI5Yqm5rXjrMAg&usqp=CAU"
            className={classes.large}
        />
    );
}
