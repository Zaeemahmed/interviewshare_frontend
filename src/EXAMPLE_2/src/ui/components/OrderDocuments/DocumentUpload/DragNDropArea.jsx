import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled, { css } from 'styled-components';
import { Icon } from 'antd';
import { useDropzone } from 'react-dropzone';

export default function DragNDropArea({ errorMessage, handleFile }) {
    const onDrop = acceptedFiles => {
        handleFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: '.pdf',
    });

    return (
        <div>
            <DragDropDiv isDragActive={isDragActive} {...getRootProps()}>
                <input {...getInputProps()} />
                <UploadIcon type="inbox" />
                <p>
                    <FormattedMessage defaultMessage="Click or drag file to this area to upload" />
                </p>
                <SupportedP>
                    <FormattedMessage defaultMessage="Supported file formats" />
                    : .pdf
                </SupportedP>
            </DragDropDiv>
            {errorMessage !== '' && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'red',
                        marginTop: '10px',
                    }}
                >
                    {errorMessage}
                </p>
            )}
        </div>
    );
}

DragNDropArea.propTypes = {
    errorMessage: PropTypes.string,
    handleFile: PropTypes.func,
};

const DragDropDiv = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    text-align: center;
    background: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: border-color 0.3s;
    transition: border-color 0.3s;
    ${props =>
            props.isDragActive &&
            css`
                border: 1px dashed #5ad192;
            `}
        :hover {
        border: 1px dashed #5ad192;
    }
`;

const SupportedP = styled.p`
    color: #b3b0b0;
`;

const UploadIcon = styled(Icon)`
    font-size: 48px;
    color: #5ad192;
    margin-bottom: 0;
    margin-top: 15px;
`;
