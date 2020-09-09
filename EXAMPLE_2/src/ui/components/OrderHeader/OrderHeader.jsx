import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useOrder } from '@/api/Context/OrderContext';
import { Flex, Card } from '@/ui/atoms/Base';
import OrderHeaderPartyInfo from './OrderHeaderPartyInfo';
import OrderItemsPreview from './OrderItemsPreview';

// returns unique list of entries
const uniq = (items = [], key) =>
    [...new Set(items.map(item => item[key]))].filter(Boolean);

export default function OrderHeader() {
    const { order, permissions } = useOrder();
    const { supplier, customer, items } = order;
    const { showSupplier, showCustomer } = permissions;

    const supplierName = showSupplier ? supplier?.name : 'JEBAGRO'; // TODO jebargo durch namen des SCM teams ersetzen
    const customerName = showCustomer ? customer?.name : 'JEBAGRO'; // TODO jebargo durch namen des SCM teams ersetzen

    const supplierOrderReference = showSupplier
        ? order.supplierOrderReference
        : order.orderReference;

    const customerOrderReference = showCustomer
        ? order.customerOrderReference
        : order.orderReference;

    return (
        <Card>
            <Flex justifyContent="space-between">
                <OrderHeaderPartyInfo
                    description={<FormattedMessage defaultMessage="Supplier" />}
                    incoterms={uniq(items, 'incotermsSupplier')}
                    partyName={supplierName}
                    paymentTerms={uniq(items, 'paymentTermsSupplier')[0]}
                    orderReference={supplierOrderReference}
                />
                <OrderHeaderPartyInfo
                    color="#595959"
                    description={<FormattedMessage defaultMessage="Customer" />}
                    incoterms={uniq(items, 'incotermsCustomer')}
                    partyName={customerName}
                    paymentTerms={uniq(items, 'paymentTermsCustomer')[0]}
                    orderReference={customerOrderReference}
                    textAlign="right"
                />
            </Flex>
            <OrderItemsPreview
                items={order.items}
                showSupplier={showSupplier}
                showCustomer={showCustomer}
                mt={35}
            />
        </Card>
    );
}
