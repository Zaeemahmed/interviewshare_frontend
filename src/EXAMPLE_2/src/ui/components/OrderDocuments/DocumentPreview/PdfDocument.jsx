import React from 'react';
import PropTypes from 'prop-types';

function PdfDocument({ revision }) {
    return (
        <div css="width: 100%; height: 100%;">
            <iframe
                title="Document Preview"
                src={revision.file}
                css="width: 100%; height: 100%; border: 0"
            />
        </div>
    );
}

PdfDocument.propTypes = {
    revision: PropTypes.object,
};

export default PdfDocument;
