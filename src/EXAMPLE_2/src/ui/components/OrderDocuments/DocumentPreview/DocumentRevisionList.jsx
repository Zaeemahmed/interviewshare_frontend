import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cross from '@/ui/atoms/Icons/IconCross.jsx';
import { Box } from '@/ui/atoms/Base';

const sortByDate = (array, key) =>
    [...array].sort((a, b) => new Date(a[key]) - new Date(b[key]));

const DocumentRevisionList = ({
    revisions,
    selectedRevision,
    setSelectedRevision,
    ...rest
}) => (
    <Box mt={-8} display="inline-flex" flexWrap="wrap" {...rest}>
        {sortByDate(revisions, 'createdAt').map((revision, index) => {
            const isActive = revision.id === selectedRevision.id;
            const isRevoked = revision.status === 'REVOKED';
            return (
                <Revision
                    isRevoked={isRevoked}
                    key={revision.id}
                    isActive={isActive}
                    onClick={() => setSelectedRevision(revision)}
                >
                    {index + 1}
                    {isRevoked && (
                        <Cross color={getBorderColor({ isActive })} />
                    )}
                </Revision>
            );
        })}
    </Box>
);

DocumentRevisionList.propTypes = {
    revisions: PropTypes.array,
    selectedRevision: PropTypes.object,
    setSelectedRevision: PropTypes.func,
};

const getBorderColor = ({ isActive }) => (isActive ? '#5AD192' : '#D9D9D9');

const getColor = ({ isRevoked, isActive }) => {
    if (isRevoked && isActive) return '#5AD192';
    if (isRevoked) return '#D9D9D9';
    if (isActive) return '#5AD192';
    return '#595959';
};

const Revision = styled(Box)`
    position: relative;
    width: 32px;
    margin-right: 8px;
    margin-top: 8px;
    border: 1px solid ${getBorderColor};
    border-radius: 4px;
    line-height: 30px;
    text-align: center;
    color: ${getColor};
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    // position cross icon over revision number
    svg {
        position: absolute;
        left: 6px;
        top: 6px;
        width: 18px;
        height: 18px;
        color: ${getBorderColor};
    }
`;

export default DocumentRevisionList;
