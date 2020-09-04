import React from 'react';
import styled from 'styled-components';
import { Dropdown, Menu, Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import { initiateLogin } from '@/api/oAuth';
import { useCurrentUser } from '@/api/Context/UserContext';
import IconUserInitials from '@/ui/atoms/Icons/IconUserInitials';

/**
 * Renders a UserIcon and UserName and a Dropdown for the Logout
 */
function UserMenu() {
    const currentUser = useCurrentUser();
    const isXS = useMediaQuery({ maxWidth: 600 });

    if (!currentUser.id) {
        return (
            <Button onClick={initiateLogin}>
                <FormattedMessage defaultMessage="Login" />
            </Button>
        );
    }

    return (
        <Dropdown
            overlay={
                <Menu>
                    <Menu.Item onClick={currentUser.logout} key="0">
                        <FormattedMessage defaultMessage="Logout" />
                    </Menu.Item>
                </Menu>
            }
            trigger={['click']}
        >
            <UserMenuNameWrapper>
                <UserMenuNameInitials>
                    <IconUserInitials text={currentUser.initials} />
                </UserMenuNameInitials>
                {!isXS && (
                    <StyledDiv>
                        <StyledSpan>{currentUser.fullName}</StyledSpan>
                    </StyledDiv>
                )}
            </UserMenuNameWrapper>
        </Dropdown>
    );
}

const UserMenuNameWrapper = styled.div`
    display: inline-flex;
    justify-content: center;
`;

const UserMenuNameInitials = styled.div`
    margin-top: 20px;
`;

const StyledDiv = styled.div`
    cursor: pointer;
    overflow: hidden;
`;

const StyledSpan = styled.span`
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 6px;
    margin-left: 4px;
`;

export default UserMenu;
