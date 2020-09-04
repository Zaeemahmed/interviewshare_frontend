import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { Table } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { DDMMYYYY } from '@/ui/_helpers/DateTime';
import Empty from '@/ui/atoms/Empty';
import OrdersListExpandedRow from './OrdersListExpandedRow';
import './OrdersListTable.css';

function OrdersListTable({ orders, hideSalesPrice, hideSupplier }) {
    const history = useHistory();
    const linkColumn = (value, id) => <Link to={`/order/${id}`}>{value}</Link>;

    let columns = [
        {
            title: 'Order No.',
            dataIndex: 'orderReference',
            key: 'orderReference',
            render: (text, record) => {
                return linkColumn(record.orderReference, record.id);
            },
        },
        {
            title: 'Product',
            dataIndex: 'items[0].name',
            key: 'productName',
            render: (text, record) => {
                let itemCount = '';
                if (record.items.length > 1) {
                    itemCount = ' +' + record.items.length - 1;
                }
                return text + itemCount;
            },
        },
        {
            title: 'ETD',
            dataIndex: 'shipments[0].customerEtd',
            key: 'customerEtd',
            render: (text, record) => {
                if (!record.shipments || record.shipments.length === 0) {
                    return '-';
                } else if (record.shipments.length > 1) {
                    return 'Multiple';
                } else {
                    //2019-12-31 -> 31.12.2019
                    if (moment(text).isValid()) {
                        return DDMMYYYY(text);
                    } else {
                        return '-';
                    }
                }
            },
        },
        {
            title: 'Buyer',
            dataIndex: 'customer.name',
            key: 'customerName',
        },
    ];

    //Customer View: remove Supplier
    if (hideSupplier) {
        columns = columns.filter(c => c.title !== 'Buyer');
    }

    // Remove columns with missing data
    if (orders && orders[0] && orders[0].supplier === undefined) {
        columns = columns.filter(c => c.key !== 'supplierName');
    }
    if (orders && orders[0] && orders[0].customer === undefined) {
        columns = columns.filter(c => c.key !== 'customerName');
    }

    return (
        <Table
            rowKey="id"
            css="cursor: pointer"
            pagination={{ pageSize: 10 }}
            columns={columns}
            expandedRowRender={record => (
                <OrdersListExpandedRow
                    data={record.items || null}
                    hideSalesPrice={hideSalesPrice}
                />
            )}
            dataSource={orders || null}
            onRow={record => ({
                onClick: () => {
                    history.push(`/order/${record.id}`);
                },
            })}
            locale={{ emptyText: <Empty /> }}
        />
    );
}

OrdersListTable.propTypes = {
    orders: PropTypes.array,
    hideSalesPrice: PropTypes.bool,
    hideSupplier: PropTypes.bool,
};

export default OrdersListTable;
