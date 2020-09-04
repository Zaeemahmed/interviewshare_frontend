import React, { Fragment } from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { FormattedMessage } from 'react-intl';
import { gqlManageOrderSelectedTab } from '@/api/Queries/local';
import OrderTeamSetup from '../OrderTeamSetup/OrderTeamSetup';
import OrderSetup from '../OrderSetup/OrderSetup';
import OrderManagementHeader from './OrderManagementHeader';

export default function OrderManagement() {
    const apolloClient = useApolloClient();

    let { data: manageOrderSelectedTab } = useQuery(gqlManageOrderSelectedTab);
    manageOrderSelectedTab =
        (manageOrderSelectedTab &&
            manageOrderSelectedTab.manageOrderSelectedTab) ||
        '';

    return (
        <Fragment>
            <Button
                onClick={() =>
                    apolloClient.writeData({
                        data: { manageOrderSelectedTab: 'teamsetup' },
                    })
                }
            >
                <FormattedMessage defaultMessage="Manage Users" />
            </Button>

            <OrderManagementModal
                title={<OrderManagementHeader />}
                visible={
                    manageOrderSelectedTab === 'teamsetup' ||
                    manageOrderSelectedTab === 'ordersetup'
                }
                footer={null}
                onCancel={() =>
                    apolloClient.writeData({
                        data: { manageOrderSelectedTab: '' },
                    })
                }
                width={1200}
                bodyStyle={{
                    height: '700px',
                    padding: 0,
                    backgroundColor: '#f8f9fa',
                }}
            >
                {manageOrderSelectedTab === 'teamsetup' && <OrderTeamSetup />}
                {manageOrderSelectedTab === 'ordersetup' && <OrderSetup />}
            </OrderManagementModal>
        </Fragment>
    );
}

const OrderManagementModal = styled(Modal)`
    .ant-modal-header {
        padding-bottom: 0;
        padding-top: 0;
    }
`;
