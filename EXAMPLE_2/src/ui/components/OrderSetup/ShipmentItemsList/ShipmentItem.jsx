import React from 'react';
import { findDOMNode } from 'react-dom';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import { PropTypes } from 'prop-types';
import IconDragger from '@/ui/atoms/Icons/IconDragger';

class ShipmentItem extends React.Component {
    render() {
        const { item, connectDragSource, connectDropTarget } = this.props;

        return connectDragSource(
            <div
                style={{
                    margin: '10px 30px 10px 60px',
                    borderRadius: '10px',
                    backgroundColor: 'transparent',
                    transform: 'translate(0, 0)', //fixes borderRadius-bug on draggable items
                }}
            >
                {connectDropTarget(
                    <div>
                        <ShipmentItemWrapper id={item.id}>
                            <Row>
                                <Col span={1}>
                                    <IconDragger />
                                </Col>
                                <Col span={3}>
                                    <GreyText>
                                        {item.orderItemReference}
                                    </GreyText>
                                </Col>
                                <Col span={8}>{item.name}</Col>
                                <Col span={3}>
                                    {item.quantity}&nbsp;
                                    <GreyText>
                                        {item.unit.toLowerCase()}
                                    </GreyText>
                                </Col>
                                <Col span={4}>
                                    <GreyText>{item.packaging || ''}</GreyText>
                                </Col>
                            </Row>
                        </ShipmentItemWrapper>
                    </div>
                )}
            </div>
        );
    }
}

const itemSource = {
    beginDrag(props) {
        return {
            index: props.index,
            itemId: props.itemId,
            item: props.item,
        };
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        let dropResult = monitor.getDropResult();
        if (dropResult && dropResult.itemId !== item.itemId) {
            props.removeItem(item.index);
        }
    },
};

ShipmentItem.propTypes = {
    item: PropTypes.object,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
};

const itemTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;
        const sourceItemId = monitor.getItem().itemId;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(
            component
        ).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        if (props.itemId === sourceItemId) {
            props.moveItem(dragIndex, hoverIndex);

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            monitor.getItem().index = hoverIndex;
        }
    },
};
export default flow(
    DropTarget('ITEM', itemTarget, connect => ({
        connectDropTarget: connect.dropTarget(),
    })),
    DragSource('ITEM', itemSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }))
)(ShipmentItem);

const GreyText = styled.span`
    color: lightgrey;
`;

const ShipmentItemWrapper = styled.div`
    border: 1px solid #ecebeb;
    border-radius: 10px;
    background: #ffffff;
    padding: 10px 10px 10px 30px;
    display: flex;
    justify-content: space-between;
    .ant-row {
        display: flex;
        width: 100%;
    }
    .ant-col {
        display: flex;
        align-items: center;
    }
`;
