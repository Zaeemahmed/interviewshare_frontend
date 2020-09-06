import React from 'react';
import PropTypes from 'prop-types';
import EditRequiredDocuments from './EditRequiredDocuments';

function PanelHeader({ title, relatedItemType, ...rest }) {
    return (
        <div
            style={{
                ...{
                    display: 'flex',
                    height: '31px',
                    justifyContent: 'space-between',
                    lineHeight: '31px',
                },
                ...rest.style,
            }}
        >
            <p>{title}</p>
            {(relatedItemType === 'ORDER' ||
                relatedItemType === 'SHIPMENT') && (
                <EditRequiredDocuments relatedItemType={relatedItemType} />
            )}
        </div>
    );
}

PanelHeader.propTypes = {
    title: PropTypes.node,
    relatedItemType: PropTypes.string,
};

export default PanelHeader;
