import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Text, Flex } from '../../../components/Base/Base';
import { TextField } from '@material-ui/core';

const YourThoughts = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        if (collapsed) {
            setCollapsed(false);
        } else {
            setCollapsed(true);
        }
    };
    return (
        <Box borderRadius="8px" mt="2rem">
            <Flex justifyContent="space-between" alignItems="center">
                <Text color="#777D7D" font-weight="bold" fontFamily="Roboto">
                    Your Thoughts (Not Public)
                </Text>
                {collapsed ? (
                    <ExpandMoreIcon
                        style={{ color: '#2074D5', cursor: 'pointer' }}
                        onClick={handleCollapse}
                    />
                ) : (
                    <ExpandLessIcon
                        style={{ color: '#2074D5', cursor: 'pointer' }}
                        onClick={handleCollapse}
                    />
                )}
            </Flex>
            {!collapsed ? (
                <TextField
                    variant="outlined"
                    size="small"
                    style={{
                        backgroundColor: '#EFF0F0',
                        borderRadius: '10px',
                    }}
                    fullWidth
                    multiline={true}
                    rows="4"
                    placeholder="write your thoughts here"
                />
            ) : null}
        </Box>
    );
};

export default YourThoughts;
