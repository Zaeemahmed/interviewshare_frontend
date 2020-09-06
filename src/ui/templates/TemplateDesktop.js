import React from 'react';
import { Box } from '../components/Base/Base';
import theme from '../../config/theme';
import TemplateMobile from './TemplateMobile';

export default function TemplateDesktop({ children, mobileFooter }) {
    return (
        <Box
            width="360px"
            justify="center"
            border={theme.borders.default}
            borderRadius={theme.borderRadius.default}
            margin="auto"
        >
            <TemplateMobile children={children} mobileFooter={mobileFooter} />
        </Box>
    );
}