import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../../templates/Layout';
import { Box } from '../../components/Base/Base';
import IconButtonBig from './components/IconButtonBig';

export default function LandingPageDesktop() {
    return (
        <Layout>
            <Box
                maxWidth={{ lg: '550px', xl: '650px', xxl: '800px' }}
                position="absolute"
                top="calc(50% + 45px)"
                right={{ lg: '10%', xl: '10%', xxl: '10%' }}
                css={`
                    transform: translateY(calc(-50%));
                `}
                zIndex="5"
            >
                <Box height="50px" width="70%" mt="25px">
                    <IconButtonBig to="/achievements">
                        <FormattedMessage defaultMessage="Learn more" />
                    </IconButtonBig>
                </Box>
            </Box>
        </Layout>
    );
}
