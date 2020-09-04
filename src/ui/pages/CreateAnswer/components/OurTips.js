import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Text, Flex } from '../../../components/Base/Base';
import Tip from './Tip';

const OurTips = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        if (collapsed) {
            setCollapsed(false);
        } else {
            setCollapsed(true);
        }
    };
    return (
        <Box
            backgroundColor="#EFF0F0"
            padding="5%"
            borderRadius="8px"
            mt="2rem"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Text color="#A1A5A5" font-weight="bold" fontFamily="Roboto">
                    OUR TIPS
                </Text>
                {collapsed ? (
                    <ExpandMoreIcon
                        style={{ color: '#2074D5' }}
                        onClick={handleCollapse}
                    />
                ) : (
                    <ExpandLessIcon
                        style={{ color: '#2074D5' }}
                        onClick={handleCollapse}
                    />
                )}
            </Flex>

            {!collapsed ? (
                <Box>
                    <Tip tip="Describe the technology" />
                    <Tip tip="Describe your team" />
                    <Tip tip="Describe Your achievements" />
                </Box>
            ) : null}
        </Box>
    );
};

export default OurTips;
