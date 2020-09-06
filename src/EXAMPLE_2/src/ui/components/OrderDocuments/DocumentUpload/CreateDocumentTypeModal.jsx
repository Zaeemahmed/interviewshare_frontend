import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Button, Input, Form } from 'antd';
import styled from 'styled-components';
import { useOrderPermissions } from '@/api/Context/OrderContext';
import SuccessPage from './SuccessPage';

export default function CreateDocumentTypeModal({
    relatedItemType,
    relatedItemId,
    showCustomForm,
    documentName,
    setDocumentName,
    finishUploadFinal,
    createDocumentTypeCustom,
}) {
    const intl = useIntl();
    const { isSupplyChainManager } = useOrderPermissions();
    const [isCreatedDocumentType, setIsCreatedDocumentType] = useState(false);

    const createDocumentType = () => {
        const variables = {
            name: documentName,
            relatedItemType,
            relatedItemId,
        };

        createDocumentTypeCustom({ variables }).then(() => {
            setIsCreatedDocumentType(true);
            showCustomForm = false;
        });
    };

    const finishUpload = () => {
        setIsCreatedDocumentType(false);
        setDocumentName('');
        finishUploadFinal();
    };

    const showCreateButton = !isSupplyChainManager || !isCreatedDocumentType;

    return (
        <div>
            {!isCreatedDocumentType && (
                <StyledForm>
                    <Form.Item label="What kind of document is it?">
                        <StyledInput
                            placeholder={intl.formatMessage({
                                id:
                                    'CreateDocumentTypeModal custom document type name',
                                defaultMessage:
                                    'Please enter a custom document type name',
                            })}
                            onChange={e => setDocumentName(e.target.value)}
                        />
                    </Form.Item>
                </StyledForm>
            )}

            {showCreateButton && (
                <CreateDiv>
                    <StyledButton type="primary" onClick={createDocumentType}>
                        Create
                    </StyledButton>
                </CreateDiv>
            )}

            {isCreatedDocumentType && (
                <SuccessPage
                    message={
                        'You successfully created a document type called ' +
                        documentName
                    }
                    finishUpload={finishUpload}
                />
            )}
        </div>
    );
}

CreateDocumentTypeModal.propTypes = {
    relatedItemType: PropTypes.string,
    relatedItemId: PropTypes.string,
    showCustomForm: PropTypes.bool,
    documentName: PropTypes.string,
    setDocumentName: PropTypes.func,
    finishUploadFinal: PropTypes.func,
    createDocumentTypeCustom: PropTypes.func,
};

const StyledForm = styled(Form)`
    width: 100% !important;
    margin: 20px 0 !important;
`;

const StyledInput = styled(Input)`
    margin-bottom: 20px !important;
`;

const CreateDiv = styled.div`
    padding-bottom: 10px;
    text-align: right;
`;

const StyledButton = styled(Button)`
    margin-top: 10px;
`;
