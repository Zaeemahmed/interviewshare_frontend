import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Spin } from 'antd';
import styled, { css } from 'styled-components';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { gqlAddDocumentRevision } from '@/api/Mutations/Upload';
import { gqlCreateDocumentTypeCustom } from '@/api/Mutations/Document';
import { gqlOrderById } from '@/api/Queries/Orders';
import { useOrder } from '@/api/Context/OrderContext';
import DragNDropArea from './DragNDropArea';
import PreviewFile from './PreviewFile';
import CreateDocumentTypeModal from './CreateDocumentTypeModal';
import SuccessPage from './SuccessPage';

function DocumentUpload({
    document,
    onCancel,
    showCustomForm,
    relatedItemId,
    relatedItemType,
    shipmentId,
}) {
    const { order, permissions } = useOrder();
    const apolloClient = useApolloClient();
    const [documentName, setDocumentName] = useState('');
    const [file, setFile] = useState(null);
    const [url, setURL] = useState('');
    const [isUploaded, setIsUploaded] = useState(false); //Shows Step 2
    const [headline, setHeadline] = useState(
        `Upload a new document to Order ${order.orderReference}`
    );
    const [errorMessage, setErrorMessage] = useState('');

    const [uploadFile, { loading: uploadFileLoading }] = useMutation(
        gqlAddDocumentRevision
    );

    const {
        isSupplyChainManager,
        isSupplier,
        isCustomer,
        showSupplier,
        showCustomer,
    } = permissions;

    const [createDocumentTypeCustom] = useMutation(
        gqlCreateDocumentTypeCustom,
        {
            update(
                cache,
                {
                    data: {
                        createDocumentTypeCustom: { documentType },
                    },
                }
            ) {
                const orderCache = cache.readQuery({
                    query: gqlOrderById,
                    variables: {
                        orderId: order.id,
                        showSupplier: showSupplier,
                        showCustomer: showCustomer,
                        showSupplyChainManager: isSupplyChainManager,
                    },
                });

                let newOrder = {
                    ...orderCache.orderById,
                };

                if (documentType.relatedItemType === 'ORDER') {
                    newOrder.documentTypes = [
                        ...orderCache.orderById.documentTypes,
                        documentType,
                    ];
                } else if (documentType.relatedItemType === 'SHIPMENT') {
                    newOrder.shipments.forEach((shipment, index) => {
                        if (shipment.id === documentType.relatedItemId) {
                            newOrder.shipments[index].documentTypes = [
                                ...orderCache.orderById.shipments[index]
                                    .documentTypes,
                                documentType,
                            ];
                        }
                    });
                } else if (documentType.relatedItemType === 'ITEM') {
                    for (let s = 0; s < newOrder.shipments.length; s++) {
                        if (newOrder.shipments[s].id === shipmentId) {
                            newOrder.shipments[s].items.forEach(
                                (item, itemIndex) => {
                                    if (
                                        item.id === documentType.relatedItemId
                                    ) {
                                        newOrder.shipments[s].items[
                                            itemIndex
                                        ].documentTypes = [
                                            ...orderCache.orderById.shipments[s]
                                                .items[itemIndex].documentTypes,
                                            documentType,
                                        ];
                                    }
                                }
                            );
                            break;
                        }
                    }
                }

                apolloClient.writeQuery({
                    query: gqlOrderById,
                    variables: {
                        orderId: order.id,
                        showSupplier: showSupplier,
                        showCustomer: showCustomer,
                        showSupplyChainManager: isSupplyChainManager,
                    },
                    data: {
                        orderById: newOrder,
                    },
                });
            },
        }
    );

    const startFileUpload = () => {
        if (showCustomForm) {
            let vars = {
                name: documentName,
                relatedItemType,
                relatedItemId,
            };

            createDocumentTypeCustom({
                variables: vars,
            }).then((response, error) => {
                //Only upload for supplier/customer
                if (isSupplyChainManager) {
                    console.warn('Error: CreateDocumentTypeCustom');
                    return null;
                }

                if (!error) {
                    let doc;
                    if (isSupplier) {
                        doc = response?.data?.createDocumentTypeCustom?.documentType?.documents?.find(
                            doc => doc.hasToBeUploadedBy.includes('supplier')
                        );
                    } else if (isCustomer) {
                        doc = response?.data?.createDocumentTypeCustom?.documentType?.documents?.find(
                            doc => doc.hasToBeUploadedBy.includes('customer')
                        );
                    }
                    if (!doc) {
                        alert('Custom Document was created, but Upload failed');
                    }
                    uploadFile({
                        variables: {
                            documentId: doc.id,
                            file: file,
                        },
                    }).then(() => {
                        setIsUploaded(true);
                        apolloClient.resetStore();
                        setHeadline('Document upload successful');
                    });
                } else {
                    console.warn('Error: CreateDocumentTypeCustom');
                }
            });
        } else {
            uploadFile({
                variables: {
                    documentId: document.id,
                    file: file,
                },
            }).then(response => {
                setIsUploaded(true);
                apolloClient.resetStore();
                setHeadline('Document upload successful');
            });
        }
    };

    const onUpload = () => {
        let file = window.document.getElementById('input').files[0];
        handleFile(file);
    };

    const handleFile = file => {
        if (file) {
            let reader = new FileReader();
            reader.onload = e => {
                setFile(file);
                setURL(e.target.result);
            };

            reader.readAsDataURL(file);
            setHeadline(
                `Upload a new document to order ${order.orderReference}`
            );
            setErrorMessage('');
        } else {
            setErrorMessage('Please choose a supported file format.');
        }
    };

    const goBack = () => {
        window.document.getElementById('input').value = '';
        setFile(null);
        setHeadline(`Upload a new document to order ${order.orderReference}`);
    };

    const finishUpload = () => {
        setFile(null);
        setHeadline(`Upload a new document to Order ${order.orderReference}`);
        setIsUploaded(false);
        onCancel();
    };

    if (uploadFileLoading) {
        return (
            <SpinnerDiv>
                <Spin />
            </SpinnerDiv>
        );
    }
    return (
        <Popup>
            <div>
                {file && !isUploaded && (
                    <GoBackIcon type="arrow-left" onClick={goBack} />
                )}
                <P>{headline}</P>
            </div>

            {!showCustomForm ? (
                <Div draggerwrapper="true">
                    {!file && !isUploaded && (
                        <DragNDropArea
                            errorMessage={errorMessage}
                            handleFile={handleFile}
                        />
                    )}
                    {file && !isUploaded && (
                        <PreviewFile
                            file={file}
                            url={url}
                            startFileUpload={startFileUpload}
                        />
                    )}
                    {isUploaded && file && (
                        <SuccessPage
                            message={'You successfully uploaded ' + file.name}
                            finishUpload={finishUpload}
                        />
                    )}
                    <FileInput type="file" id="input" onChange={onUpload} />
                </Div>
            ) : (
                <CreateDocumentTypeModal
                    relatedItemType={relatedItemType}
                    relatedItemId={relatedItemId}
                    showCustomForm={showCustomForm}
                    finishUploadFinal={finishUpload}
                    createDocumentTypeCustom={createDocumentTypeCustom}
                    documentName={documentName}
                    setDocumentName={setDocumentName}
                />
            )}
        </Popup>
    );
}

DocumentUpload.propTypes = {
    document: PropTypes.object,
    onCancel: PropTypes.func,
    showCustomForm: PropTypes.bool,
    relatedItemId: PropTypes.string,
    relatedItemType: PropTypes.string,
    shipmentId: PropTypes.string,
};

const SpinnerDiv = styled.div`
    height: 250px;
    padding-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Div = styled.div`
    ${props =>
        props.draggerwrapper &&
        css`
            margin-top: 20px;
        `}
`;

const Popup = styled.div`
    ::before {
        content: ' ';
        display: block;
    }
`;

const GoBackIcon = styled(Icon)`
    font-size: 20px;
    position: relative;
    top: 3px;
    margin-right: 4px;
`;

const P = styled.p`
    font-width: 600;
    display: inline-block;
    font-weight: bold;
    marginleft: 5px;
`;

const FileInput = styled.input`
    width: 0;
    height: 0;
`;

export default DocumentUpload;
