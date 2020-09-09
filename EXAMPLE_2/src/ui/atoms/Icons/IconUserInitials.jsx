import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Renders the Users Initials as an Icon
 */
const IconUserInitials = ({ text, ...rest }) => (
    <StyledDiv {...rest}>{text}</StyledDiv>
);

const StyledDiv = styled.div`
    min-width: ${props => props.size}px;
    min-height: ${props => props.size}px;
    max-width: ${props => props.size}px;
    max-height: ${props => props.size}px;
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    border-color: gray;
    border-radius: 50%;
    color: ${props => props.color};
    line-height: ${props => props.size}px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
`;

StyledDiv.defaultProps = {
    size: 24,
    backgroundColor: '#BFBFBF',
    color: 'white',
    border: 0,
};

IconUserInitials.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    border: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
};

export default IconUserInitials;
