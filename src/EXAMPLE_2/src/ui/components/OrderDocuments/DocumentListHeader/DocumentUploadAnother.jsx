// import React, { useState, Fragment } from 'react';
// import {Button, Input, Form, Modal} from 'antd';
// import { useMutation, useApolloClient } from '@apollo/react-hooks';
// import DocumentUpload from "./DocumentUpload";
// import styled from 'styled-components';
// import {FormattedMessage} from 'react-intl';
// import { gqlCreateDocumentTypeCustom } from '@/api/Mutations/Document';
// import { gqlOrderById } from '@/api/Queries/Orders';
// import { showSupplier } from '@/ui/_helpers/Permissions';
//
// function DocumentUploadAnother({order, relatedItemId, relatedItemType}) {
//     const [isVisible, setVisibility] = useState(false);
//
//     const apolloClient = useApolloClient();
//
//
//
//     return (
//         <Fragment>
//             <StyledButton onClick={() => {setVisibility(true)}}>
//                 <FormattedMessage
//                     id="DocumentUploadAnother Upload another document"
//                     defaultMessage={`Upload another document`}
//                 />
//             </StyledButton>
//             <Modal
//                 visible={isVisible}
//                 onOk={() => setVisibility(false)}
//                 onCancel={() => {setVisibility(false)} }
//                 footer={null}
//             >
//                 <div className="DocumentUploadAnother" onClick={(e) => e.stopPropagation()}>
//                     <p>
//                         <FormattedMessage
//                             id="DocumentUploadAnother Upload a new Order Confirmation to Order"
//                             defaultMessage={`Upload a new Order Confirmation to Order `}
//                         />{order.id}
//                     </p>
//
//                         <DocumentUpload
//                             showCustomForm={true}
//                             order={order}
//                             document={document}
//                             createDocumentTypeFirst={createDocumentTypeFirst}
//                         />
//                 </div>
//             </Modal>
//         </Fragment>
//     );
// }
//
// const StyledButton = styled(Button)`
//   width: 200px;
// `;
//
// export default DocumentUploadAnother;
