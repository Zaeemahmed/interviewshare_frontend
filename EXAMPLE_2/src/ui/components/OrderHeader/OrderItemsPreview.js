import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { Row, Col, Button, Icon } from 'antd';
import { Card, Text, Box, Flex } from '@/ui/atoms/Base';

const uniq = (items = [], key) =>
    [...new Set(items.map(item => item[key]))].filter(Boolean);

export default function OrderItemsPreview({
    items,
    showSupplier,
    showCustomer,
    ...rest
}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    if (!items) return null;

    const hasPurchasePrice = uniq(items, 'purchasePrice').length > 0;
    const hasSalesPrice = uniq(items, 'salesPrice').length > 0;
    const hasDetailData =
        (showSupplier && hasPurchasePrice) || (showCustomer && hasSalesPrice);

    return (
        <Box {...rest}>
            <Row gutter={[22, 22]}>
                {items.map(item => (
                    <Col key={item.id} span={8}>
                        <Item item={item} isOpen={isOpen}>
                            {isOpen && (
                                <ItemBody
                                    item={item}
                                    showSupplier={showSupplier}
                                    showCustomer={showCustomer}
                                />
                            )}
                        </Item>
                    </Col>
                ))}
            </Row>
            {hasDetailData && (
                <Box css="clear: both" textAlign="center">
                    <ToggleButton isOpen={isOpen} onClick={toggle} />
                </Box>
            )}
        </Box>
    );
}

OrderItemsPreview.propTypes = {
    items: PropTypes.array,
    showSupplier: PropTypes.bool,
    showCustomer: PropTypes.bool,
};

function Item({ item, children }) {
    return (
        <Card p={0} fontSize="12px">
            <Flex p={10}>
                <Box color="#A5A5A5">
                    <FormattedNumber value={item.orderItemReference} />
                </Box>
                <Text flex="1" color="#595959" mx={16} ellipsis>
                    {item.name}
                </Text>
                <Box color="#595959" textAlign="right">
                    <FormattedNumber value={item.quantity} />{' '}
                    <Text color="#A5A5A5">{item.unit}</Text>
                </Box>
            </Flex>
            {children}
        </Card>
    );
}

function ItemBody({ item, hasDetailData, showSupplier, showCustomer }) {
    const { purchasePrice, salesPrice } = item;

    // return if there's no data to show
    if (!(showSupplier && purchasePrice) && !(showCustomer && salesPrice)) {
        return null;
    }

    return (
        <Box fontSize="12px">
            <Flex
                p={10}
                bg="#FAFAFA"
                borderTop="1px solid #E8E8E8"
                textAlign="right"
                color="#A5A5A5"
                fontSize="10px"
                css="text-transform: uppercase"
            >
                <Box flex={1}>
                    <FormattedMessage
                        defaultMessage="Price {currency} net / Unit"
                        values={{
                            currency: purchasePrice?.pricePerUnitCurrency,
                        }}
                    />
                </Box>
                <Box width={100} textAlign="right">
                    <FormattedMessage
                        defaultMessage="Value {currency} net"
                        values={{
                            currency: purchasePrice?.pricePerUnitCurrency,
                        }}
                    />
                </Box>
            </Flex>
            {showSupplier && purchasePrice && (
                <PriceRow
                    name={<FormattedMessage defaultMessage="Supplier" />}
                    incoterms={item.incotermsSupplier}
                    paymentTerms={item.paymentTermsSupplier}
                    price={purchasePrice}
                    unit={item.unit}
                />
            )}
            {showCustomer && salesPrice && (
                <PriceRow
                    name={<FormattedMessage defaultMessage="Customer" />}
                    incoterms={item.incotermsCustomer}
                    paymentTerms={item.paymentTermsCustomer}
                    price={purchasePrice}
                    unit={item.unit}
                />
            )}
        </Box>
    );
}

function PriceRow({ name, incoterms, paymentTerms, price, unit }) {
    return (
        <Box p={10} borderTop="1px solid #E8E8E8">
            <Flex>
                <Box flex={1}>
                    <Box color="#595959">{name}</Box>
                </Box>
                <Box textAlign="right" color="black">
                    <FormattedNumber
                        style="currency"
                        value={price.pricePerUnitAmount}
                        currency={price.pricePerUnitCurrency}
                    />
                    {' / '}
                    {unit}
                </Box>
                <Box width={100} textAlign="right" color="black">
                    <FormattedNumber
                        style="currency"
                        value={price.priceAmount}
                        currency={price.pricePerUnitCurrency}
                    />
                </Box>
            </Flex>
            <Box color="#A5A5A5">
                {incoterms}
                <br />
                {paymentTerms}
            </Box>
        </Box>
    );
}

function ToggleButton({ isOpen, onClick }) {
    return (
        <Button
            onClick={onClick}
            type="link"
            css="color: #999999; font-size: 12px"
        >
            <Icon type={isOpen ? 'up' : 'down'} css="padding-right: 4px" />
            {isOpen ? (
                <FormattedMessage defaultMessage="Hide product info" />
            ) : (
                <FormattedMessage defaultMessage="Show product info" />
            )}
        </Button>
    );
}
