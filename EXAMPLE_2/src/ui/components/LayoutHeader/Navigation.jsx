import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'antd';
import { useCurrentUser } from '@/api/Context/UserContext';

function Navigation({ location }) {
    let currentUser = useCurrentUser();

    let selectedKey = '';
    if (location.pathname.includes('order')) {
        selectedKey = 'trades';
    }
    if (location.pathname.includes('team')) {
        selectedKey = 'teams';
    }

    const [current, setCurrent] = useState(selectedKey);

    if (!currentUser || !currentUser.id) {
        return '';
    }

    return (
        <Fragment>
            <StyledMenu
                onClick={e => setCurrent(e.key)}
                selectedKeys={[current]}
                mode="horizontal"
            >
                <StyledMenuItem key="trades">
                    <Link to="/orders">Trades</Link>
                </StyledMenuItem>
                <StyledMenuItem key="teams">
                    <Link to="/team">Team</Link>
                </StyledMenuItem>
            </StyledMenu>
        </Fragment>
    );
}

const StyledMenu = styled(Menu)`
    border-bottom: 0 !important;
`;

const StyledMenuItem = styled(Menu.Item)`
    color: #5ad192;
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

Navigation.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
};

export default withRouter(Navigation);
