import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function IconTeamContainer({ children }) {
    return <RoundBorder>{children}</RoundBorder>;
}

const RoundBorder = styled.div`
    border: 1px solid #ecebeb;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    margin-right: 10px;
`;

IconTeamContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default IconTeamContainer;
