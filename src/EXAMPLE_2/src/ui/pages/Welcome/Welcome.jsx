import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import MainTemplate from '@/ui/templates/MainTemplate/MainTemplate';

function Welcome() {
    return (
        <MainTemplate>
            <WelcomeWrapper>
                <h1>
                    <FormattedMessage defaultMessage="Welcome to Dashport!" />
                </h1>
                <h3>
                    <FormattedMessage defaultMessage="Please login to see more Information." />
                </h3>
            </WelcomeWrapper>
        </MainTemplate>
    );
}

const WelcomeWrapper = styled.div`
    min-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default Welcome;
