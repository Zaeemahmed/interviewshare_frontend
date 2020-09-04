import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import { gqlEditOrderDocument } from '@/api/Queries/local';
import DocumentListItem from './DocumentListItem';
import DocumentListItemPlaceholder from './DocumentListItemPlaceholder';

/**
 * Renders a row with [0,1,2] document components
 *
 * @param documentType
 * @param shipmentId
 * @returns {*}
 * @constructor
 */
function DocumentListRow({ documentType, shipmentId }) {
    let { data: editOrderDocument } = useQuery(gqlEditOrderDocument);
    editOrderDocument =
        (editOrderDocument && editOrderDocument.editOrderDocument) || false;

    const {
        showCustomer,
        showSupplier,
        orderPermission,
    } = useOrderPermissions();

    const getDocument = type => {
        //Type = ['supplier', 'customer']
        // Only if (isActive | editMode | has revision)
        for (let i = 0; i < documentType.documents.length; i++) {
            if (
                documentType.documents[i].canBeSeenBy.includes(type) &&
                (documentType.documents[i].isActive ||
                    editOrderDocument ||
                    (documentType.documents[i].revisions &&
                        documentType.documents[i].revisions.length > 0))
            ) {
                return documentType.documents[i];
            }
        }

        return null;
    };

    const showSupplierPlaceholder = () => {
        if (
            orderPermission === 'supply_chain_manager' &&
            !editOrderDocument &&
            !supplierDocument
        ) {
            return true;
        }
        return false;
    };

    const showCustomerPlaceholder = () => {
        if (
            orderPermission === 'supply_chain_manager' &&
            !editOrderDocument &&
            !customerDocument
        ) {
            return true;
        }
        return false;
    };

    const supplierDocument = getDocument('supplier');
    const customerDocument = getDocument('customer');

    if (!supplierDocument && !customerDocument) {
        return '';
    }

    return (
        <Fragment>
            {showSupplier && (
                <Col span={12} style={{ paddingLeft: '0px' }}>
                    {showSupplierPlaceholder() ? (
                        <DocumentListItemPlaceholder key={document.id} />
                    ) : (
                        <DocumentListItem
                            documentType={documentType}
                            document={supplierDocument}
                            editOrderDocument={editOrderDocument}
                            shipmentId={shipmentId}
                        />
                    )}
                </Col>
            )}

            {showCustomer && (
                <Col span={12} style={{ paddingLeft: '10px' }}>
                    {showCustomerPlaceholder() ? (
                        <DocumentListItemPlaceholder key={document.id} />
                    ) : (
                        <DocumentListItem
                            documentType={documentType}
                            document={customerDocument}
                            editOrderDocument={editOrderDocument}
                            shipmentId={shipmentId}
                        />
                    )}
                </Col>
            )}
        </Fragment>
    );
}

DocumentListRow.propTypes = {
    documentType: PropTypes.object,
    shipmentId: PropTypes.string,
};

export default DocumentListRow;
