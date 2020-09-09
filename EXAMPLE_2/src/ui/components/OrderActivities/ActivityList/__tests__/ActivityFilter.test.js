import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { apolloClient } from '@/api/react-apollo';
import { cache } from '@/api/cache';
import ActivityFilter from '../ActivityFilter';

describe('ActivityFilter', () => {
    let wrapper;
    beforeEach(() => {
        apolloClient.writeData({ data: { activityFilter: 'all' } });
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider cache={cache} resolvers={{}}>
                    <IntlProvider locale="en">
                        <ActivityFilter />
                    </IntlProvider>
                </MockedProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.find('ActivityFilter').length).toBe(1);
    });

    it('should have 4 radio buttons', () => {
        expect(wrapper.find('RadioButton').length).toBe(4);
    });
});
