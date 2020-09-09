import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useOrder } from '@/api/Context/OrderContext';
import ButtonBack from '@/ui/atoms/Buttons/ButtonBack';

function OrderTopbarTitle({ history }) {
    const { order, permissions } = useOrder();
    const { isCustomer } = permissions;

    return (
        <OrderTitleContainer>
            <ButtonBack onClick={() => history.push('/orders')} />
            <Seperator>|</Seperator>
            <Reference>
                {isCustomer
                    ? order.customerOrderReference
                    : order.orderReference}
            </Reference>
        </OrderTitleContainer>
    );
}

const OrderTitleContainer = styled.div`
    display: flex;
    width: 170px;
    alignitems: center;
    justifycontent: space-between;
    color: black;
    fontsize: 24px;
`;
const Seperator = styled.div`
    fontsize: 13px;
    padding: 0px 15px;
`;
const Reference = styled.div`
    fontsize: 20px;
    fontweight: 700;
`;

OrderTopbarTitle.propTypes = {
    history: PropTypes.object,
};

export default withRouter(OrderTopbarTitle);
