import React from 'react';
import styled from 'styled-components';
import { Button, Col } from 'antd';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function ContainerStatusNoInfo({ onClick }) {
    return (
        <Col span={6}>
            <Div>
                <p>
                    <FormattedMessage defaultMessage="For the given combination of carrier and B/L we could not receive tracking information. Please check B/L Number and Carrier for correctness." />
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

ContainerStatusNoInfo.propTypes = {
    onClick: PropTypes.func,
};

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
`;

export default ContainerStatusNoInfo;
