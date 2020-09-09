import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import { apolloClient } from '@/api/react-apollo';
import UserMock from '@/api/Mocks/User';
import OrderMock from '@/api/Mocks/Order';
import { UserProvider } from '@/api/Context/UserContext';
import ActivityDocument from '../ActivityDocument';

describe('ActivityDocument', () => {
    let wrapper;
    let activity = OrderMock.orderEvents[0];
    activity = { ...activity, ...{ revision: { file: 'FileName' } } };

    beforeEach(() => {
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <UserProvider value={UserMock}>
                    <IntlProvider locale="en">
                        <ActivityDocument activity={activity} />
                    </IntlProvider>
                </UserProvider>
            </ApolloProvider>
        );
    });

    it('ActivityDocument renders', () => {
        expect(wrapper.find('ActivityDocument').length).toBe(1);
    });

    it('ActivityDocument renders message', () => {
        expect(
            wrapper.text().indexOf('has uploaded a new version of')
        ).not.toBe(-1);
    });
});
