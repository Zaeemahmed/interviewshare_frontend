import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formattedDate } from '@/ui/_helpers/DateTime';
import IconCircleFile from '@/ui/atoms/Icons/IconCircleFile';
import { Text } from '@/ui/atoms/Base';
import Activity from './Activity';

/**
 * Renders an OrderActivity Order-Data-Update
 */
function ActivityOrderData({
    activity,
    multiple,
    expandMultiple,
    shouldExpandMultiple,
    length,
}) {
    return (
        <Activity
            activity={activity}
            multiple={multiple}
            expandMultiple={expandMultiple}
            shouldExpandMultiple={shouldExpandMultiple}
            length={length}
            leftCol={<IconCircleFile />}
            middleCol={
                <Fragment>
                    <Text fontWeight="600">{activity.message}</Text>
                    <Text display="block" fontSize="12px" color="silver">
                        {formattedDate(activity.createdAt)}
                    </Text>
                </Fragment>
            }
        />
    );
}

ActivityOrderData.propTypes = {
    activity: PropTypes.object,
};

export default ActivityOrderData;
