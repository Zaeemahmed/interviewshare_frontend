import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { gqlAddDocumentRevision } from '@/api/Mutations/Upload';

// import { gql } from "apollo-boost";

// import { useApolloClient, useMutation } from '@apollo/react-hooks'
// import gql from 'graphql-tag'
// import { AUTH_TOKEN } from '@/api/oAuth';

// const SINGLE_UPLOAD_MUTATION = gql`
//   mutation singleUpload($file: Upload!) {
//     singleUpload(file: $file) {
//       id
//     }
//   }
// `;

// export const UploadTest = ({document}) => {
//     const [uploadFileMutation] = useMutation(SINGLE_UPLOAD_MUTATION)
//     const apolloClient = useApolloClient();
//
//     // const onChange = ({
//     //                       target: {
//     //                           validity,
//     //                           files: [file]
//     //                       }
//     //                   }) =>
//     //     validity.valid &&
//     //     uploadFileMutation({ variables: { file } }).then(() => {
//     //         apolloClient.resetStore()
//     //     })
//
//     const onChange = () => {
//         const token = localStorage.getItem(AUTH_TOKEN);
//
//         var formData = new FormData();
//         formData.append("pdf", window.document.getElementById("myFileField").files[0]);
//         formData.append(
//             'operations',
//             '{"operationName":"addDocumentRevision","variables":{"documentId":"5"},"query":"mutation addDocumentRevision($documentId: ID\u0021) {\\n  addDocumentRevision(documentId: $documentId) {\\n    success\\n    documentRevision {\\n      file\\n      uploadedBy {\\n        id\\n        firstName\\n        lastName\\n        __typename\\n      }\\n      createdAt\\n      __typename\\n    }\\n    error {\\n      __typename\\n      ... on ValidationErrors {\\n        validationErrors {\\n          field\\n          messages\\n          __typename\\n        }\\n        __typename\\n      }\\n      ... on ExecutionError {\\n        errorMessage\\n        __typename\\n      }\\n    }\\n    __typename\\n  }\\n}\\n"}'
//             // JSON.stringify({
//             //     query: gqlAddDocumentRevision,
//             //     variables: {
//             //         documentId: document.id
//             //     }
//             // }),
//         );
//
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", "https://backend.dashport.io/graphql/");
//         xhr.setRequestHeader( "authorization",  token ? `Bearer ${token}` : '');
//         xhr.send(formData);
//
//
//         // var body = new FormData();
//         // body.append(
//         //     'operations',
//         //     JSON.stringify({
//         //         query: options.mutation.loc.source.body,
//         //         variables: options.variables,
//         //     }),
//         // );
//
//
//
//         // var request = new XMLHttpRequest();
//         // request.onreadystatechange= function () {
//         //     if (request.readyState==4) {
//         //         //handle response
//         //     }
//         // }
//         // request.open("POST", "https://backend.dashport.io/graphql/", true);
//         // // request.setRequestHeader("header", "blah blah");
//         // request.setRequestHeader( "content-type",  multipart/form-data )
//         // // xmlhttp.setrequestheader( "content-type",  multipart/form-data )
//         // // request.setRequestHeader("Accept","text/plain");
//         // request.send("post data");
//     }
//
//     return <input id="myFileField" type="file" required onChange={onChange} />
// }

// const UPLOAD_MUTATION = gql`
//   mutation submit($file: Upload!) {
//     submitAFile(file: $file) {
//       filename
//       mimetype
//       filesize
//     }
//   }
// `;
//
// export default function UploadTest({ onComplete = f => f }) {
//     const mutationComplete = (cache, { data }) =>
//         onComplete({
//             size: data.submitAFile.filesize,
//             name: data.submitAFile.filename,
//             type: data.submitAFile.mimetype
//         });
//
//     return (
//         <form>
//             <Mutation mutation={gqlAddDocumentRevision} update={mutationComplete}>
//                 {mutation => (
//                     <input
//                         type="file"
//                         onChange={e => {
//                             const [file] = e.target.files;
//                             mutation({
//                                 variables: {
//                                     file
//                                 }
//                             });
//                         }}
//                     />
//                 )}
//             </Mutation>
//         </form>
//     );
// }

const UploadTest = ({ document }) => {
    return (
        <Mutation mutation={gqlAddDocumentRevision}>
            {mutate => (
                <input
                    type="file"
                    required
                    onChange={({
                        target: {
                            validity,
                            files: [file],
                        },
                    }) => {
                        return (
                            validity.valid &&
                            mutate({
                                variables: {
                                    documentId: document.id,
                                    file: file,
                                },
                            })
                        );
                    }}
                />
            )}
        </Mutation>
    );
};

UploadTest.propTypes = {
    document: PropTypes.object,
};

export default UploadTest;

/*
<Mutation
        mutation={gql`
      mutation($file: Upload!) {
        uploadFile(file: $file) {
          success
        }
      }
    `}
    >
 */
