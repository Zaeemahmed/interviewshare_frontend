import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';

export default function PreviewFile({ file, url, startFileUpload }) {
    return (
        <div>
            <Iframe
                id="filePreview"
                title={'File Preview: ' + file.name}
                src={url}
            />

            <Row>
                <Col span={10}>
                    <FileName>
                        <FileNameSpan>{file.name}</FileNameSpan>{' '}
                        {formatFileSize(file.size)}
                    </FileName>
                </Col>
                <Col span={10}>
                    <StyledButton onClick={clickInput}>
                        <FormattedMessage defaultMessage="Select a different file" />
                    </StyledButton>
                </Col>
                <Col span={4}>
                    <StyledButton type="primary" onClick={startFileUpload}>
                        <FormattedMessage defaultMessage="Upload" />
                    </StyledButton>
                </Col>
            </Row>
        </div>
    );
}

const clickInput = () => {
    window.document.getElementById('input').click();
};

const formatFileSize = (bytes, decimalPoint) => {
    if (bytes === 0) return '0 Bytes';
    let k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

PreviewFile.propTypes = {
    file: PropTypes.object,
    url: PropTypes.string,
    startFileUpload: PropTypes.func,
};

const Iframe = styled.iframe`
    height: 450px;
    width: 100%;
`;

const FileName = styled.p`
    margin-top: 10px;
    margin-bottom: 0;
    line-height: 32px;
`;

const FileNameSpan = styled.span`
    color: #5ad192;
`;

const StyledButton = styled(Button)`
    margin-top: 10px;
`;
