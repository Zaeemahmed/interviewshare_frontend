import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { apolloClient } from '@/api/react-apollo';
import { cache } from '@/api/cache';
import DocumentListFooter from '../DocumentList/DocumentListFooter';

describe('DocumentList', () => {
    let wrapper;
    beforeEach(() => {
        apolloClient.writeData({ data: { editOrderDocument: true } });
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <MockedProvider cache={cache}>
                    <IntlProvider locale="en">
                        <Router>
                            <DocumentListFooter />
                        </Router>
                    </IntlProvider>
                </MockedProvider>
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(
            wrapper
                .find('#DocumentListFooter')
                .at(0)
                .text()
                .indexOf(
                    'You are currently editing the list of required documents'
                )
        ).not.toBe(-1);
    });

    it('should close a footer after clicking on the button', () => {
        wrapper
            .find('Button')
            .at(1)
            .simulate('click');
        expect(wrapper.find('#DocumentListFooter').length).toBe(0);
    });
});
