import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from 'antd';
import ContainerSegmentIcon from './ContainerSegmentIcon';
import ContainerSegmentItem from './ContainerSegmentItem';

function ContainerSegments({ container }) {
    // UPCOMING = _("upcoming")
    // CURRENT = _("current")
    // UNKNOWN = _("unknown")
    // DONE = _("done")

    let marginLeftOffsetAbsolute = 0;
    const iconWidth = 30;
    const itemWidth = 200;
    const marginLeftSpacing = 5;

    let areAllSegmentsDONE = true;
    let areAllSegmentsUPCOMING = true;
    // let hasSegmentCURRENT = false;
    container.segments.forEach(s => {
        if (s.status !== 'ShipmentStatus.DONE') {
            areAllSegmentsDONE = false;
        }
        // if(s.status === 'ShipmentStatus.CURRENT'){
        //     hasSegmentCURRENT = true;
        // }

        if (s.status !== 'ShipmentStatus.UPCOMING') {
            areAllSegmentsUPCOMING = false;
        }
    });

    const lengthByStatus = (status, index) => {
        if (areAllSegmentsDONE) {
            if (index === container.segments.length - 3) {
                return itemWidth;
            }
            if (index === container.segments.length - 2) {
                return itemWidth;
            }
            if (index === container.segments.length - 1) {
                return itemWidth;
            }
        }

        if (areAllSegmentsUPCOMING) {
            if (index === 0) {
                return itemWidth;
            }
            if (index === 1) {
                return itemWidth;
            }
            if (index === 2) {
                return itemWidth;
            }
        }

        if (status === 'ShipmentStatus.CURRENT') {
            return itemWidth;
        } else if (status === 'ShipmentStatus.UPCOMING') {
            return itemWidth;
        } else {
            return 50;
        }
    };

    // const calculateMarginLeft = (segments, index) => {
    //     if(index === 0) {
    //         return 0;
    //     }else{
    //         return lengthByStatus(segments[index-1].status) - iconWidth + marginLeftSpacing;
    //     }
    // };

    const calculateMarginLeftAbsolute = (segment, index) => {
        const startOffset = marginLeftOffsetAbsolute;
        marginLeftOffsetAbsolute =
            marginLeftOffsetAbsolute +
            lengthByStatus(segment.status, index) +
            marginLeftSpacing;

        if (index === 0) {
            return 0;
        }

        return startOffset;
    };

    const calculateProgressBarLength = (segment, index) => {
        return (
            lengthByStatus(segment.status, index) -
            iconWidth +
            marginLeftSpacing
        );
    };

    const isActiveIcon = segment => {
        if (
            segment.status === 'ShipmentStatus.DONE' ||
            segment.status === 'ShipmentStatus.CURRENT'
        ) {
            return true;
        }
        return false;
    };

    return (
        <Container>
            <IconRow>
                {container.segments &&
                    container.segments.map((segment, index) => {
                        return (
                            <ContainerSegmentIcon
                                key={index}
                                segment={segment}
                                progressBarLength={
                                    container.segments.length === index + 1
                                        ? 0
                                        : calculateProgressBarLength(
                                              segment,
                                              index
                                          )
                                }
                                isActive={isActiveIcon(segment)}
                            />
                        );
                    })}
            </IconRow>

            <Row>
                {container.segments &&
                    container.segments.map((segment, index) => {
                        return (
                            <ContainerSegmentItem
                                key={index}
                                segment={segment}
                                positionleft={calculateMarginLeftAbsolute(
                                    segment,
                                    index
                                )}
                                zindex={index + 2}
                            />
                        );
                    })}
            </Row>
        </Container>
    );
}

ContainerSegments.propTypes = {
    container: PropTypes.object,
};

const IconRow = styled(Row)`
    background-color: rgb(250, 250, 250);
    padding: 8px 16px 8px 16px;
    margin-left: -15px;
    margin-right: -30px;
    margin-top: -15px;
`;

const Container = styled.div`
    min-height: 160px;
`;

export default ContainerSegments;
