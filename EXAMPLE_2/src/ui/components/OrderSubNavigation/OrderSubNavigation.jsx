import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
    useHistory,
    generatePath,
} from 'react-router-dom';
import styled from 'styled-components';
import { Divider, Menu } from 'antd';
import OrderActivities from '../OrderActivities/OrderActivities';
import OrderShipments from '../OrderShipments/OrderShipments';
import OrderDocuments from '../OrderDocuments/DocumentList/DocumentList';

function OrderSubNavigation() {
    const { path } = useRouteMatch();
    const { orderId, tab = 'activities' } = useParams();
    const history = useHistory();
    const getPath = tab => generatePath(path, { orderId, tab });
    const onClick = e => history.replace(getPath(e.key));

    return (
        <Fragment>
            <StyledMenu
                onClick={onClick}
                selectedKeys={[tab]}
                mode="horizontal"
            >
                <StyledMenuItem key="activities">
                    <FormattedMessage defaultMessage="Activity Feed" />
                </StyledMenuItem>
                <StyledMenuItem key="documents">
                    <FormattedMessage defaultMessage="Documents" />
                </StyledMenuItem>
                <StyledMenuItem key="shipments">
                    <FormattedMessage defaultMessage="Shipment Tracking" />
                </StyledMenuItem>
            </StyledMenu>
            <StyledDivider />
            <Switch>
                <Route
                    exact
                    path={['/order/:orderId/(activities)?']}
                    component={OrderActivities}
                />
                <Route
                    path="/order/:orderId/documents"
                    component={OrderDocuments}
                />
                <Route
                    path="/order/:orderId/shipments"
                    component={OrderShipments}
                />
            </Switch>
        </Fragment>
    );
}

const StyledMenu = styled(Menu)`
    border-bottom: 0 !important;
    background: transparent !important;
`;

const StyledMenuItem = styled(Menu.Item)`
    padding: 11px 20px !important;
    line-height: 40px;
    font-weight: 700;
    font-size: 16px;

    &:active {
        .ant-menu-item-selected {
            color: #5ad192 !important;
        }
    }
`;

const StyledDivider = styled(Divider)`
    margin: 2px 0px 30px 0px !important;
`;

export default OrderSubNavigation;
