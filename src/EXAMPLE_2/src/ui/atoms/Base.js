import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
    compose,
    space,
    layout,
    typography,
    color,
    flexbox,
    position,
    border,
} from 'styled-system';

export const Box = styled('div')(
    props => props.css,
    compose(space, layout, typography, color, flexbox, position, border)
);
Box.propTypes = {
    ...space.propTypes,
    ...layout.propTypes,
    ...typography.propTypes,
    ...color.propTypes,
    ...flexbox.propTypes,
    ...position.propTypes,
    ...border.propTypes,
};

export const Flex = styled(Box)``;
Flex.defaultProps = { display: 'flex' };

export const Card = styled(Box)``;
Card.defaultProps = {
    p: 20,
    borderRadius: 8,
    bg: 'white',
    border: '1px solid #e8e8e8',
};

const ellipStyle = `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Text = forwardRef((props, ref) => {
    const { ellipsis, ...rest } = props;
    return <Box as="span" css={ellipsis && ellipStyle} ref={ref} {...rest} />;
});
