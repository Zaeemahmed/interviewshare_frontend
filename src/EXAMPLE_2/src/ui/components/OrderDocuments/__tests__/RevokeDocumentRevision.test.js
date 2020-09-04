import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '@/api/react-apollo';
import RevisionsMock from '@/api/Mocks/Revisions';
import { setMockedJWTtoken } from '@/api/Mocks/Auth';
import { UserProvider } from '@/api/Context/UserContext';
import RevokeDocumentRevision from '../DocumentPreview/RevokeDocumentRevision';

const DocumentMock = { id: 5 };

describe('RevokeDocumentRevision', () => {
    beforeEach(() => {
        setMockedJWTtoken();
    });

    it('should render properly', () => {
        const wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <UserProvider value={{ id: '130' }}>
                        <RevokeDocumentRevision
                            document={DocumentMock}
                            revision={RevisionsMock[1]}
                        />
                    </UserProvider>
                </IntlProvider>
            </ApolloProvider>
        );
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should render null when revision is revoked', () => {
        const wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <UserProvider value={{ id: '130' }}>
                        <RevokeDocumentRevision
                            document={DocumentMock}
                            revision={RevisionsMock[2]}
                        />
                    </UserProvider>
                </IntlProvider>
            </ApolloProvider>
        );
        expect(wrapper.find('button')).toHaveLength(0);
    });

    it('should render null when user is not current user', () => {
        const wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <IntlProvider locale="en">
                    <UserProvider value={{ id: '12' }}>
                        <RevokeDocumentRevision
                            document={DocumentMock}
                            revision={RevisionsMock[0]}
                        />
                    </UserProvider>
                </IntlProvider>
            </ApolloProvider>
        );
        expect(wrapper.find('button')).toHaveLength(0);
    });
});
