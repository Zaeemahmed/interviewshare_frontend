import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Alert } from 'antd';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useOrder } from '@/api/Context/OrderContext';
import { formattedDate } from '@/ui/_helpers/DateTime';
import { Flex, Box, Text } from '@/ui/atoms/Base';
import IconEyeCrossed from '@/ui/atoms/Icons/IconEyeCrossed';
import DocumentUpload from '../DocumentUpload/DocumentUpload';
import ApproveDocument from './ApproveDocument';
import RevokeDocumentRevision from './RevokeDocumentRevision';
import PdfDocument from './PdfDocument';
import DocumentRevisionList from './DocumentRevisionList';

const sortByDate = (array, key) =>
    [...array].sort((a, b) => new Date(a[key]) - new Date(b[key]));

function DocumentPreview({ document, documentType, shipmentId }) {
    const { order, permissions } = useOrder();
    const lastRevision = sortByDate(document.revisions)[0];
    const [numberOfRevisions, setNumberOfRevisions] = useState(
        document.revisions.length
    );
    const [selectedRevision, setSelectedRevision] = useState(lastRevision);
    const [isUploadVisible, setUploadVisibility] = useState(false);
    const setUploadInvisible = () => setUploadVisibility(false);
    const setUploadVisible = () => setUploadVisibility(true);
    const isApprovable =
        document.status !== 'ACCEPTED' &&
        document.revisions.some(rev => rev.status !== 'REVOKED');

    // When the revision data changes we need to update our selected revision
    // - after revocation: update current selection to update icon
    // - after upload: set current selection to newest revision
    // `eslint-disable` because the recommendation would cause a loop
    useEffect(() => {
        if (numberOfRevisions !== document.revisions.length) {
            setNumberOfRevisions(document.revisions.length);
            setSelectedRevision(lastRevision);
        } else {
            const newSelectedRevision = document.revisions.find(
                r => r.id === selectedRevision.id
            );
            setSelectedRevision(newSelectedRevision);
        }
    }, [document.revisions]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Flex justifyContent="space-around" backgroundColor="#f2f2f2">
            <Box m={30}>
                <PreviewSt>
                    <Preview
                        isUploadVisible={isUploadVisible}
                        revision={selectedRevision}
                    />
                </PreviewSt>
            </Box>
            <SidebarSt>
                <div>
                    <Box px={24}>
                        <h3>{documentType.name}</h3>
                        <span>
                            <FormattedMessage defaultMessage="Order Reference" />
                            : {order.orderReference}
                        </span>
                    </Box>
                    <Revisions>
                        <Box mr={16}>
                            <FormattedMessage defaultMessage="Version" />
                        </Box>
                        <Box flex={1} textAlign="right">
                            <DocumentRevisionList
                                revisions={document.revisions}
                                selectedRevision={selectedRevision}
                                setSelectedRevision={setSelectedRevision}
                            />
                        </Box>
                    </Revisions>
                    <Box my={24} px={24} textAlign="center">
                        <UploadedMetaInfo revision={selectedRevision} />
                    </Box>
                </div>
                <SidebarFooterSt>
                    {document.hasToBeUploadedBy.includes(
                        permissions.orderPermission
                    ) && (
                        <Button onClick={setUploadVisible}>
                            <FormattedMessage defaultMessage="Upload Version" />
                        </Button>
                    )}
                    <Modal
                        destroyOnClose
                        visible={isUploadVisible}
                        onOk={setUploadInvisible}
                        onCancel={setUploadInvisible}
                        footer={null}
                        zIndex={9999}
                    >
                        <DocumentUpload
                            onCancel={setUploadInvisible}
                            document={document}
                            relatedItemId={documentType.relatedItemId}
                            relatedItemType={documentType.relatedItemType}
                            shipmentId={shipmentId}
                        />
                    </Modal>

                    <RevokeDocumentRevision
                        document={document}
                        revision={selectedRevision}
                    />

                    {isApprovable && <ApproveDocument document={document} />}
                </SidebarFooterSt>
            </SidebarSt>
        </Flex>
    );
}

function UploadedMetaInfo({ revision }) {
    if (revision.status === 'REVOKED') {
        return (
            <Alert
                message={
                    <Text color="#595959">
                        <FormattedMessage defaultMessage="The version of this document has been hidden." />
                    </Text>
                }
                type="error"
            />
        );
    }

    const createdAt = formattedDate(revision.createdAt);
    const user = revision.uploadedBy ? (
        `${revision.uploadedBy.firstName} ${revision.uploadedBy.lastName}`
    ) : (
        <i>
            <FormattedMessage defaultMessage="unknown" />
        </i>
    );

    return (
        <Text>
            <FormattedMessage defaultMessage="Uploaded" /> {createdAt}
            <br />
            <FormattedMessage defaultMessage="by" /> {user}
        </Text>
    );
}

function Preview({ isUploadVisible, revision }) {
    if (isUploadVisible) {
        return (
            <Box as="h3" textAlign="center">
                <FormattedMessage defaultMessage="Waiting for a new version to be uploaded" />
            </Box>
        );
    }
    if (revision.status === 'REVOKED') {
        return (
            <Fragment>
                <IconEyeCrossed color="#797979" />
                <Alert
                    css="position: absolute; bottom: 8px;"
                    message={
                        <Text color="#595959">
                            <FormattedMessage defaultMessage="You can’t add comments to hidden documents" />
                        </Text>
                    }
                    type="error"
                />
            </Fragment>
        );
    }

    return <PdfDocument revision={revision} />;
}

DocumentPreview.propTypes = {
    document: PropTypes.object,
    documentType: PropTypes.object,
    shipmentId: PropTypes.string,
};

const PreviewSt = styled(Flex)`
    width: 550px;
    height: 750px;
    justify-content: center;
    align-items: center;
`;

const SidebarSt = styled(Flex)`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    background-color: #ffffff;
`;

const Revisions = styled(Flex)`
    margin-top: 10px;
    padding: 8px 20px 8px 24px;
    align-items: center;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
`;

const SidebarFooterSt = styled(Flex)`
    padding: 8px;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid #f2f2f2;
`;

export default DocumentPreview;
