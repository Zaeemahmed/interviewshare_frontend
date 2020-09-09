import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import IconCircleFile from '@/ui/atoms/Icons/IconCircleFile';
import { formattedDate } from '@/ui/_helpers/DateTime';
import Activity from './Activity';

/**
 * Renders an OrderActivity Document
 */
function ActivityDocument({ activity }) {
    const getDocumentName = revision => {
        return revision?.document?.documentType?.name || '';
    };

    const userName = () => {
        return (
            (activity?.revision?.uploadedBy?.firstName || '') +
            ' ' +
            (activity?.revision?.uploadedBy?.lastName || '')
        );
    };

    return (
        <Activity
            activity={activity}
            leftCol={<IconCircleFile />}
            middleCol={
                <Fragment>
                    <span
                        title={activity.revision.file}
                        style={{ fontWeight: '600' }}
                    >
                        {userName()}
                        <FormattedMessage defaultMessage=" has uploaded a new version of " />
                        {'"' + getDocumentName(activity.revision) + '"'}
                    </span>
                    <span
                        style={{
                            display: 'block',
                            fontSize: '12px',
                            color: 'silver',
                        }}
                    >
                        {formattedDate(activity.createdAt)}
                    </span>
                </Fragment>
            }
        />
    );
}

ActivityDocument.propTypes = {
    activity: PropTypes.object,
};

export default ActivityDocument;
