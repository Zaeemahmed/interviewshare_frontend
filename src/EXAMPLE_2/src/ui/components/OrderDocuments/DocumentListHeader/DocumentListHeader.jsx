import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Modal, Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import DocumentUpload from '../DocumentUpload/DocumentUpload';

function DocumentListHeader({
    relatedItemId,
    relatedItemType,
    shipmentId,
    ...rest
}) {
    const [isUploadVisible, setUploadVisibility] = useState(false);
    const { showCustomer, showSupplier, isSupplier } = useOrderPermissions();
    const supplierHeaderSpan = showCustomer ? 12 : 18;
    const customerHeaderSpan = showSupplier ? 6 : 18;

    return (
        <Row type="flex" justify="end" {...rest}>
            {showSupplier && (
                <Col span={supplierHeaderSpan}>
                    <StyledHeaderMessage>
                        <FormattedMessage defaultMessage="SUPPLIER" />
                    </StyledHeaderMessage>
                </Col>
            )}
            {showCustomer && (
                <StyledCol span={customerHeaderSpan}>
                    <StyledHeaderMessage>
                        <FormattedMessage defaultMessage="CUSTOMER" />
                    </StyledHeaderMessage>
                </StyledCol>
            )}
            <StyledButtonCol span={6}>
                {!isSupplier && (
                    <Fragment>
                        <StyledButton
                            onClick={() => {
                                setUploadVisibility(true);
                            }}
                        >
                            <FormattedMessage defaultMessage="Upload another document" />
                        </StyledButton>
                        <Modal
                            destroyOnClose
                            visible={isUploadVisible}
                            onOk={() => setUploadVisibility(false)}
                            onCancel={() => {
                                setUploadVisibility(false);
                            }}
                            footer={null}
                        >
                            <DocumentUpload
                                onCancel={() => {
                                    setUploadVisibility(false);
                                }}
                                showCustomForm={true}
                                relatedItemId={relatedItemId}
                                relatedItemType={relatedItemType}
                                shipmentId={shipmentId}
                            />
                        </Modal>
                    </Fragment>
                )}
            </StyledButtonCol>
        </Row>
    );
}

DocumentListHeader.propTypes = {
    relatedItemId: PropTypes.string,
    shipmentId: PropTypes.string,
    relatedItemType: PropTypes.string,
};

const StyledButton = styled(Button)`
    width: 200px;
`;

const StyledHeaderMessage = styled.h4`
    margin-top: 6px;
`;

const StyledCol = styled(Col)`
    padding-left: 10px;
`;

const StyledButtonCol = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export default DocumentListHeader;
