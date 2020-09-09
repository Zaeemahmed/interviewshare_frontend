import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export default function SuccessPage({ message, finishUpload }) {
    return (
        <div>
            <SuccessIcon>
                <Icon type="check" />
            </SuccessIcon>
            <SuccessP>{message}</SuccessP>
            <DoneDiv>
                <StyledButton type="primary" onClick={finishUpload}>
                    <FormattedMessage defaultMessage="Done" />
                </StyledButton>
            </DoneDiv>
        </div>
    );
}

SuccessPage.propTypes = {
    message: PropTypes.string,
    finishUpload: PropTypes.func,
};

const DoneDiv = styled.div`
    text-align: right;
`;

const StyledButton = styled(Button)`
    margin-top: 10px;
`;

const SuccessIcon = styled.div`
    width: 100px;
    height: 100px;
    margin: auto;
    background: #5ad192;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    font-size: 40px;
    color: white;
`;

const SuccessP = styled.p`
    text-align: center;
    margin-top: 20px;
`;
