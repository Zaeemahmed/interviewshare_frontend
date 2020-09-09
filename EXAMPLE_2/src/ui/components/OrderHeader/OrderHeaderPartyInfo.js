import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Box } from '@/ui/atoms/Base';

function Incoterms({ incoterms }) {
    if (!incoterms || incoterms.length === 0) {
        return (
            <i>
                <FormattedMessage defaultMessage="No Incoterms given" />
            </i>
        );
    } else if (incoterms.length > 1) {
        return (
            <i>
                <FormattedMessage defaultMessage="Incoterms differ" />
            </i>
        );
    }
    return <Fragment>{incoterms[0]}</Fragment>;
}

export default function OrderHeaderPartyInfo({
    description,
    incoterms,
    partyName,
    paymentTerms,
    orderReference,
    ...rest
}) {
    return (
        <Box {...rest}>
            <Box fontSize="14px" fontWeight="500" color="black" mb={2}>
                <Incoterms incoterms={incoterms} />
            </Box>
            <Box fontSize="12px" color="#808080">
                {description}
                {': '}
                {partyName}
                {' | '}
                {paymentTerms && `${paymentTerms}, `}
                <FormattedMessage defaultMessage="Order Reference" />
                {': '}
                {orderReference || (
                    <i>
                        <FormattedMessage defaultMessage="not available" />
                    </i>
                )}
            </Box>
        </Box>
    );
}

OrderHeaderPartyInfo.propTypes = {
    description: PropTypes.node,
    incoterms: PropTypes.array,
    partyName: PropTypes.string,
    paymentTerms: PropTypes.string,
    orderReference: PropTypes.string,
};
