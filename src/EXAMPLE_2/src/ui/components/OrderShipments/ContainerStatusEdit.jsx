import React from 'react';
import styled from 'styled-components';
import { Button, Col } from 'antd';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function ContainerStatusEdit({ onClick }) {
    return (
        <Col span={6}>
            <Div>
                <p>
                    <FormattedMessage defaultMessage="The provided tracking info is incomplete. Please provide B/L and Carrier." />
                </p>
                <ButtonWrapper>
                    <StyledButton size="small" onClick={() => onClick()}>
                        <FormattedMessage defaultMessage="Edit tracking information" />
                    </StyledButton>
                </ButtonWrapper>
            </Div>
        </Col>
    );
}
const StyledButton = styled(Button)`
    border: 1px solid orange;
    color: orange;
    &:hover {
        border: 1px solid orange;
        color: orange;
    }
    &:focus {
        border: 1px solid orange;
        color: orange;
    }
`;

const ButtonWrapper = styled.div`
    text-align: right;
`;

const Div = styled.div`
    border: 1px solid orange;
    border-radius: 8px;
    padding: 16px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 16px;
    min-width: 215px;
`;

ContainerStatusEdit.propTypes = {
    onClick: PropTypes.func,
};

export default ContainerStatusEdit;
