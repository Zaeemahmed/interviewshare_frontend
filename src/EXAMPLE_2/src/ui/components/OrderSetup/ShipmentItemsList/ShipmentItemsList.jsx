import React from 'react';
import { PropTypes } from 'prop-types';
import update from 'immutability-helper';
import { DropTarget } from 'react-dnd';
import ShipmentItem from '@/ui/components/OrderSetup/ShipmentItemsList/ShipmentItem';
import ShipmentItemPlaceholder from '@/ui/components/OrderSetup/ShipmentItemsList/ShipmentItemPlaceholder';

class ShipmentItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Important for DeleteShipment
        if (this.props.items !== prevProps.items) {
            this.setState({
                items: this.props.items,
            });
        }

        if (this.state.items !== prevState.items) {
            const ids = this.state.items.map(i => i.id);
            if (this.props.addItem) {
                this.props.addItem(ids, this.props.itemId);
            }
        }
    }

    pushItem(item) {
        this.setState(
            update(this.state, {
                items: {
                    $push: [item],
                },
            })
        );
    }

    removeItem(index) {
        this.setState(
            update(this.state, {
                items: {
                    $splice: [[index, 1]],
                },
            })
        );
    }

    moveItem(dragIndex, hoverIndex) {
        const { items } = this.state;
        const dragCard = items[dragIndex];

        this.setState(
            update(this.state, {
                items: {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                },
            })
        );
    }

    render() {
        const { connectDropTarget } = this.props;

        return connectDropTarget(
            <div>
                {this.state.items.length > 0 ? (
                    this.state.items.map((item, itemIndex) => {
                        return (
                            <ShipmentItem
                                key={item.id + itemIndex}
                                item={item}
                                index={itemIndex}
                                itemId={this.props.itemId}
                                moveItem={this.moveItem.bind(this)}
                                removeItem={this.removeItem.bind(this)}
                            />
                        );
                    })
                ) : (
                    <ShipmentItemPlaceholder />
                )}
            </div>
        );
    }
}

ShipmentItemsList.propTypes = {
    itemId: PropTypes.string,
    items: PropTypes.array,
    addItem: PropTypes.func,
};

const itemTarget = {
    drop(props, monitor, component) {
        const { itemId } = props;
        const sourceObj = monitor.getItem();
        if (itemId !== sourceObj.itemId) {
            component.pushItem(sourceObj.item);
        }
        return {
            itemId: itemId,
        };
    },
};

export default DropTarget('ITEM', itemTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(ShipmentItemsList);
