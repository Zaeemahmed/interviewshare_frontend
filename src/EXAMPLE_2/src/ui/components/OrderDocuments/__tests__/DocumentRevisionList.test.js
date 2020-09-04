import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/react-hooks';
import RevisionsMock from '@/api/Mocks/Revisions';
import { apolloClient } from '@/api/react-apollo';
import DocumentRevisionList from '../DocumentPreview/DocumentRevisionList';

describe('DocumentRevisionList', () => {
    const setSelectedRevision = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <ApolloProvider client={apolloClient}>
                <DocumentRevisionList
                    revisions={RevisionsMock}
                    selectedRevision={RevisionsMock[0]}
                    setSelectedRevision={setSelectedRevision}
                />
            </ApolloProvider>
        );
    });

    it('should render properly', () => {
        expect(wrapper.text()).toMatch('1234');
        expect(wrapper.find('div[onClick]')).toHaveLength(4); // Buttons
        expect(wrapper.find('svg')).toHaveLength(1); // Revoked Item
    });

    it('should handle onClick', () => {
        wrapper
            .find('div[onClick]')
            .at(0)
            .simulate('click');
        expect(setSelectedRevision).toHaveBeenCalled();
    });
});
