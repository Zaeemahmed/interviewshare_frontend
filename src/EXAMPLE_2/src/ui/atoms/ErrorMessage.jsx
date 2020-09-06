import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import { Box } from '@/ui/atoms/Base';

function ErrorMessage({ error }) {
    return (
        <Box maxWidth="450px" mx="auto" mt="32px">
            <Alert
                message={error.message}
                description={error.extraInfo}
                type="error"
            />
        </Box>
    );
}

ErrorMessage.propTypes = {
    error: PropTypes.object,
};

export default ErrorMessage;
