import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Flex } from '@/ui/atoms/Base';
import IconOcean from '@/ui/atoms/Icons/IconOcean';
import IconPol from '@/ui/atoms/Icons/IconPol';
import IconPort from '@/ui/atoms/Icons/IconPort';

const IconBackground = styled(Flex)`
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #ecebeb;
`;

function Icon({ segment, ...rest }) {
    switch (segment.segmentType) {
        case 'SegmentTypes.VESSEL_TRANSPORT':
            return <IconOcean {...rest} />;

        case 'SegmentTypes.PORT_OF_LOADING':
        case 'SegmentTypes.TRANSSHIPMENT_PORT':
            return <IconPort {...rest} />;

        case 'SegmentTypes.ARRIVAL_AT_PORT_OF_LOADING':
        case 'SegmentTypes.PORT_OF_DISCHARGE':
            return <IconPol {...rest} />;

        default:
            return <IconPol {...rest} />;
    }
}

function ContainerSegmentIcon({ segment, isActive, progressBarLength }) {
    const color = isActive ? '#5ad192' : '#c1c1c1';
    return (
        <Box display="inline-block">
            <Flex alignItems="center">
                <IconBackground>
                    <Icon
                        segment={segment}
                        css={{ fontSize: 20, height: 25, color }}
                    />
                </IconBackground>
                <Box width={progressBarLength} height={1} bg={color} />
            </Flex>
        </Box>
    );
}

ContainerSegmentIcon.propTypes = {
    segment: PropTypes.object,
    isActive: PropTypes.bool,
    progressBarLength: PropTypes.number,
};

export default ContainerSegmentIcon;
