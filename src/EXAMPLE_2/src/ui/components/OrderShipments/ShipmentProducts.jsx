import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table } from 'antd';
import Empty from '@/ui/atoms/Empty';

const columns = [
    {
        title: 'POS',
        dataIndex: 'orderItemReference',
        key: 'orderItemReference',
    },
    {
        title: 'Product',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (text, record) => {
            return (
                <span>
                    {text} {record.unit}
                </span>
            );
        },
    },
];

function ShipmentProducts({ items }) {
    return (
        <div>
            <Row>
                <Col>
                    <Table
                        columns={columns}
                        dataSource={items}
                        rowKey="id"
                        pagination={false}
                        locale={{ emptyText: <Empty /> }}
                    />
                </Col>
            </Row>
        </div>
    );
}

ShipmentProducts.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ShipmentProducts;
