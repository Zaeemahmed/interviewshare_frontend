import React from 'react';
import { Box } from '../../../components/Base/Base';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function HeaderPremiumPlan() {
    return (
        <Box width="100%" display="flex" padding="10px">
            <Box
                as={Link}
                to={'/'}
                color="black"
                backgroundColor="#EFF0F0"
                padding="10px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="40px"
                width="20%"
                borderRadius="6px"
                textDecoration="none"
            >
                <ArrowBack /> Back
            </Box>
            <Box
                width="50%"
                height="40px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="dodgerblue"
                padding="10px"
                fontSize="18px"
            >
                ISA
            </Box>
            <Box
                width="20%"
                height="40px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="10px"
            >
                <Box
                    as="img"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FGitAUfXY-NE%2Fhqdefault.jpg&f=1&nofb=1"
                    alt="Person Image Profile"
                    width="50px"
                    height="50px"
                    borderRadius="50%"
                ></Box>
            </Box>
        </Box>
    );
}
