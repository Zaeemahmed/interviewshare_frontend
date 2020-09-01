import { gql } from '@apollo/client';
import { recordings } from './Recordings';

export const uploadRecording = gql`
    mutation UploadRecording($file: Upload!) {
        upload_recording(file: $file) {
            returning {
                url
                id
            }
        }
    }
`;

export const cacheUploadedRecording = (cache, { data }) => {
    const existingRecordings = cache.readQuery({
        query: recordings,
    });
    const newRecording = data.upload_recording.returning[0];
    cache.writeQuery({
        query: recordings,
        data: { event: [newRecording, ...existingRecordings.recording] },
    });
};
