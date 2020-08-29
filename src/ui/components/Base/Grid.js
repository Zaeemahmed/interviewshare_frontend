import React from 'react';
import styled from 'styled-components';
import { Grid as MuiGrid } from '@material-ui/core';
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

export const Grid = styled(MuiGrid)(
    props => props.css,
    compose(space, layout, typography, color, flexbox, position, border)
);
Grid.defaultProps = {
    ...space.propTypes,
    ...layout.propTypes,
    ...typography.propTypes,
    ...color.propTypes,
    ...flexbox.propTypes,
    ...position.propTypes,
    ...border.propTypes,
};
