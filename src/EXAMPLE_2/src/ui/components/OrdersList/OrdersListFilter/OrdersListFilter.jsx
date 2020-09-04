import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Radio } from 'antd';

function OrdersListFilter({
    selected,
    onChange,
    showAllTrades,
    showMyPurchases,
}) {
    return (
        <div>
            <Radio.Group
                defaultValue={selected}
                onChange={onChange}
                buttonStyle="solid"
            >
                {showAllTrades && (
                    <Radio.Button value="allOrders">
                        <FormattedMessage defaultMessage="All Trades" />
                    </Radio.Button>
                )}
                {showMyPurchases && (
                    <Radio.Button value="customerOrders">
                        <FormattedMessage defaultMessage="My Purchases" />
                    </Radio.Button>
                )}
            </Radio.Group>
        </div>
    );
}

OrdersListFilter.propTypes = {
    selected: PropTypes.string,
    onChange: PropTypes.func,
    showAllTrades: PropTypes.bool,
    showMyPurchases: PropTypes.bool,
};

export default OrdersListFilter;
