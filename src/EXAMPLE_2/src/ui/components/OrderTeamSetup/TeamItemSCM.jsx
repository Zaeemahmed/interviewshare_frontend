import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'antd';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useCurrentUser } from '@/api/Context/UserContext';
import { useOrder } from '@/api/Context/OrderContext';
import IconUserInitials from '@/ui/atoms/Icons/IconUserInitials';

export default function TeamItemSCM({ updateOrder }) {
    const { order } = useOrder();
    const currentUser = useCurrentUser();
    const initials = order.supplyChainManagerUser
        ? order.supplyChainManagerUser.firstName.slice(0, 1) +
          order.supplyChainManagerUser.lastName.slice(0, 1)
        : '';

    function assignToSupplyManager() {
        updateOrder({
            variables: {
                orderId: order.id,
                supplyChainManagerUserId: currentUser.id,
            },
        });
    }

    return (
        <WrapperDiv>
            <Label>
                <FormattedMessage defaultMessage="Assigned to" />
            </Label>
            <Row>
                <LeftCol span={12}>
                    <AssignedUser>
                        <StyledUserInitials>
                            <IconUserInitials text={initials} size={32} />
                        </StyledUserInitials>
                        <div>
                            <FullName>
                                {order.supplyChainManagerUser
                                    ? order.supplyChainManagerUser.firstName
                                    : ''}{' '}
                                {order.supplyChainManagerUser
                                    ? order.supplyChainManagerUser.lastName
                                    : ''}
                            </FullName>
                            <Email>
                                {order.supplyChainManagerUser
                                    ? order.supplyChainManagerUser.email
                                    : ''}
                            </Email>
                        </div>
                    </AssignedUser>
                </LeftCol>
                <RightCol span={12}>
                    <Button
                        size="small"
                        type="primary"
                        onClick={assignToSupplyManager}
                    >
                        <FormattedMessage defaultMessage="Assign to me" />
                    </Button>
                </RightCol>
            </Row>
        </WrapperDiv>
    );
}

TeamItemSCM.propTypes = {
    updateOrder: PropTypes.func,
};

const Label = styled.p`
    font-weight: 700;
`;

const RightCol = styled(Col)`
    text-align: right;
    line-height: 65px;
`;

const Email = styled.p`
    margin: 0;
    color: #b5b5b5;
    font-size: 12px;
`;

const FullName = styled.p`
    margin: 0;
`;

const LeftCol = styled(Col)`
    text-align: left;
`;

const AssignedUser = styled.div`
    padding: 10px;
    border: 1px solid #ecebeb;
    border-radius: 10px;
    height: 65px;
    max-width: 270px;
    width: auto;
    display: flex;
    justify-content: left;
    align-items: center;
`;

const WrapperDiv = styled.div`
    padding: 24px;
    background-color: #fff;
`;

const StyledUserInitials = styled.div`
    margin-right: 10px;
`;
