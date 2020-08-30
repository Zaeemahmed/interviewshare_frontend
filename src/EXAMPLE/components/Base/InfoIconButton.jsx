import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';
import { Box } from './Base';

const InfoIconButton = ({ html }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = event => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const close = event => {
        event.stopPropagation();
        setAnchorEl(null);
    };

    const isOpen = Boolean(anchorEl);
    const id = isOpen ? 'popover' : undefined;

    return (
        <>
            <IconButton size="small" onClick={open}>
                <InfoIcon />
            </IconButton>
            <Popover
                id={id}
                open={isOpen}
                anchorEl={anchorEl}
                onClose={close}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box
                    maxWidth="100vw"
                    p="10px"
                    dangerouslySetInnerHTML={{
                        __html: html,
                    }}
                ></Box>
            </Popover>
        </>
    );
};

export default InfoIconButton;
