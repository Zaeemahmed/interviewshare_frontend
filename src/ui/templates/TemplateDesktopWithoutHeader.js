import React from 'react';
import { Box } from '../components/Base/Base';
import theme from '../../config/theme';
import TemplateMobileWithoutHeader from './TemplateMobileWithoutHeader';

export default function TemplateDesktop({ children, mobileFooter }) {
    return (
        <Box
            width="360px"
            justify="center"
            border={theme.borders.default}
            borderRadius={theme.borderRadius.default}
            margin="auto"
        >
            <TemplateMobileWithoutHeader
                children={children}
                mobileFooter={mobileFooter}
            />
        </Box>
    );
}
