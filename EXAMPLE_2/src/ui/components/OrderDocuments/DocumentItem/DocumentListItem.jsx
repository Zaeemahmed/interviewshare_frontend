import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Button, Row, Col, Modal } from 'antd';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import { formattedDate } from '@/ui/_helpers/DateTime';
import DocumentUpload from '../DocumentUpload/DocumentUpload';
import DocumentPreview from '../DocumentPreview/DocumentPreview';
import DocumentRequired from './DocumentRequired';
import DocumentDelete from './DocumentDelete';
import DocumentStatus from './DocumentStatus';

const sortByDate = (array, key) =>
    [...array].sort((a, b) => new Date(a[key]) - new Date(b[key]));

function DocumentListItem({
    documentType,
    document,
    editOrderDocument,
    shipmentId,
}) {
    const {
        isCustomer,
        isSupplier,
        isSupplyChainManager,
    } = useOrderPermissions();
    const [showUpload, setUploadShowing] = useState(false);
    const [showPreview, setPreviewShowing] = useState(false);

    if (!document) return null;

    const canUserUpload = doc => {
        const hasToBeUploadedBy = key => doc.hasToBeUploadedBy.includes(key);
        return (
            (isCustomer && hasToBeUploadedBy('customer')) ||
            (isSupplier && hasToBeUploadedBy('supplier')) ||
            (isSupplyChainManager && hasToBeUploadedBy('supply_chain_manager'))
        );
    };

    const lastRevision = sortByDate(document.revisions)[0];
    const hasAnyRevision = documentType?.documents?.find(
        doc => doc.revisions?.length > 0
    );
    const canDelete =
        !hasAnyRevision &&
        editOrderDocument &&
        documentType?.typeFromTemplate === false; // must check for exactly `false`!

    return (
        <DocumentListItemWrapper
            status={document.status || ''}
            onClick={() => {
                if (
                    document.status === 'PENDING' ||
                    document.status === 'ACCEPTED'
                ) {
                    setPreviewShowing(true);
                }
            }}
        >
            <Col span={16}>
                <ContainerDiv>
                    {editOrderDocument && (
                        <DocumentRequired
                            document={document}
                            documentType={documentType}
                        />
                    )}
                    <div>
                        <div css="font-weight: bold">{documentType.name}</div>
                        {lastRevision && document.status !== 'NOT_UPLOADED' && (
                            <Fragment>
                                <div>Version: {document.revisions.length}</div>
                                <div>
                                    Last Change:{' '}
                                    {formattedDate(lastRevision.createdAt)}
                                </div>
                            </Fragment>
                        )}
                        {canDelete && (
                            <DocumentDelete
                                documentType={documentType}
                                shipmentId={shipmentId}
                            />
                        )}
                    </div>
                </ContainerDiv>
            </Col>
            <StatusColumn span={8}>
                {/*dont show status if edititing and !isActive */
                (document.isActive || !editOrderDocument) && (
                    <Fragment>
                        {document.status === 'NOT_UPLOADED' &&
                        canUserUpload(document) ? (
                            <DocumentStatus status="UPLOAD_USER" />
                        ) : (
                            <DocumentStatus
                                status={document.status}
                                document={document}
                            />
                        )}

                        {canUserUpload(document) &&
                            document.status === 'NOT_UPLOADED' && (
                                <StyledButton
                                    onClick={e => {
                                        setUploadShowing(true);
                                        e.stopPropagation();
                                    }}
                                    type="primary"
                                >
                                    <FormattedMessage defaultMessage="Upload" />
                                </StyledButton>
                            )}

                        {document.status === 'PENDING' && (
                            <StyledButton
                                onClick={() => setPreviewShowing(true)}
                                type="primary"
                            >
                                <FormattedMessage defaultMessage="Review" />
                            </StyledButton>
                        )}

                        <Modal
                            visible={showUpload}
                            onOk={() => setUploadShowing(false)}
                            onCancel={() => setUploadShowing(false)}
                            footer={null}
                        >
                            <DocumentUpload
                                document={document}
                                onCancel={() => setUploadShowing(false)}
                                shipmentId={shipmentId}
                            />
                        </Modal>
                    </Fragment>
                )}
            </StatusColumn>
            <Modal
                destroyOnClose
                width="1000px"
                bodyStyle={{ height: '800px', padding: 0 }}
                visible={showPreview}
                onOk={() => setPreviewShowing(false)}
                onCancel={e => {
                    setPreviewShowing(false);
                    e.stopPropagation();
                }}
                footer={null}
            >
                <div className="DocumentPopup">
                    <DocumentPreview
                        document={document}
                        documentType={documentType}
                        shipmentId={shipmentId}
                    />
                </div>
            </Modal>
        </DocumentListItemWrapper>
    );
}

DocumentListItem.propTypes = {
    documentType: PropTypes.object,
    document: PropTypes.object,
    editOrderDocument: PropTypes.bool,
    shipmentId: PropTypes.string,
};

const borderStyle = status => {
    switch (status) {
        case 'ACCEPTED':
            return '1px solid #ecebeb';
        case 'PENDING':
            return '1px solid #ecebeb'; //#fbb22e
        default:
            return '1px dashed #ecebeb'; //#fbb22e'
    }
};

const backgroundStyle = status => {
    if (status === 'ACCEPTED') {
        return 'transparent';
    }
    return '#fff'; //#fff0d4
};

const DocumentListItemWrapper = styled(Row)`
    min-height: 85px;
    border: ${props => borderStyle(props.status)};
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    cursor: ${props =>
        props.status !== 'NOT_UPLOADED' ? 'pointer' : 'inherit'};
    background-color: ${props => backgroundStyle(props.status)};
`;

const StatusColumn = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ContainerDiv = styled.div`
    display: flex;
`;

const StyledButton = styled(Button)`
    margin-top: 10px;
`;

export default DocumentListItem;
