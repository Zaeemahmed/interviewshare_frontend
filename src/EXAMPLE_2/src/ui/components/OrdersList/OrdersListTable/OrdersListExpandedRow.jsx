import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import Empty from '@/ui/atoms/Empty';

function OrdersListExpandedRow({ data, hideSalesPrice }) {
    let columns = [
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
            render: (text, record) => `${record.quantity} ${record.unit}`,
        },
        // {
        //     title    : 'Purchase Price',
        //     dataIndex: 'purchasePrice',
        //     key      : 'purchasePrice',
        //     render   : (text, record) => {
        //         if(record && record.purchasePrice && record.purchasePrice.price) {
        //             return record.purchasePrice.price + ' ' + (record.purchasePrice.priceCurrency || '');
        //         }else{
        //             return '';
        //         }
        //     }
        // },
        // {
        //     title    : 'Sales Price',
        //     dataIndex: 'salesPrice',
        //     key      : 'salesPrice',
        //     render   : (text, record) => {
        //         if(record && record.salesPrice && record.salesPrice.price) {
        //             return record.salesPrice.price + ' ' + (record.salesPrice.priceCurrency || '');
        //         }else{
        //             return '';
        //         }
        //     }
        // }
    ];

    //Customer View: remove Supplier
    if (hideSalesPrice) {
        columns = columns.filter(c => c.title !== 'Sales Price');
    }

    return (
        <Table
            rowKey="id"
            pagination={false}
            columns={columns}
            dataSource={data}
            locale={{ emptyText: <Empty /> }}
        />
    );
}

OrdersListExpandedRow.propTypes = {
    data: PropTypes.array,
    hideSalesPrice: PropTypes.bool,
};

export default OrdersListExpandedRow;
