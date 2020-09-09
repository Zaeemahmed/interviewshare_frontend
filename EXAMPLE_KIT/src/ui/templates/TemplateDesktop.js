import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '../components/Base/Base';
import Header from './components/Header/Header';

export default function TemplateDesktop({ children }) {
    return (
        <Box as={Grid} container>
            <Box as={Grid} container mb="10rem">
                <Box
                    width="100%"
                    height={{ lg: '60px', xl: '70px', xxl: '100px' }}
                    position="fixed"
                    top={0}
                    left={0}
                    zIndex="10"
                >
                    <Header p="0 5%" />
                </Box>
            </Box>
            <Box as={Grid} item container>
                <Box as={Grid} item sm={2} />
                <Box as={Grid} item sm={8}>
                    {children}
                </Box>
                {/*<PortfolioIcons />*/}
            </Box>
        </Box>
    );
}
