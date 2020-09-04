import React, { Fragment } from 'react';
import { Col, Menu, Row } from 'antd';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gqlManageOrderSelectedTab } from '@/api/Queries/local';
import { useOrder } from '@/api/Context/OrderContext';

export default function OrderManagementHeader() {
    const apolloClient = useApolloClient();
    const { order } = useOrder();

    let { data: manageOrderSelectedTab } = useQuery(gqlManageOrderSelectedTab);
    manageOrderSelectedTab =
        (manageOrderSelectedTab &&
            manageOrderSelectedTab.manageOrderSelectedTab) ||
        'teamsetup';

    return (
        <StyledRow>
            <Col span={8}>
                <OrderReference>
                    <FormattedMessage defaultMessage="Manage Order " />{' '}
                    <span>{order.orderReference}</span>
                </OrderReference>
            </Col>
            <StyledCol span={8}>
                <Fragment>
                    <StyledMenu
                        onClick={e =>
                            apolloClient.writeData({
                                data: { manageOrderSelectedTab: e.key },
                            })
                        }
                        selectedKeys={[manageOrderSelectedTab]}
                        mode="horizontal"
                    >
                        <StyledMenuItem key="teamsetup">
                            <FormattedMessage defaultMessage="Team Setup" />
                        </StyledMenuItem>
                        <StyledMenuItem key="ordersetup">
                            <FormattedMessage defaultMessage="Order Setup" />
                        </StyledMenuItem>
                    </StyledMenu>
                </Fragment>
            </StyledCol>
        </StyledRow>
    );
}

const StyledCol = styled(Col)`
    text-align: center;
`;

const OrderReference = styled.h4`
    margin-bottom: 0;
`;

const StyledRow = styled(Row)`
    display: flex;
    align-items: center;
`;

const StyledMenu = styled(Menu)`
    border-bottom: 0 !important;
`;

const StyledMenuItem = styled(Menu.Item)`
    color: gray;
    font-weight: 400;
    padding: 0 20px;
    font-size: 16px;
    line-height: 56px;
    &:active {
        .ant-menu-item-selected {
            color: #5ad192 !important;
        }
    }
`;
