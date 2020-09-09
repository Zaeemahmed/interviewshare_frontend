import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IconCircleShip from '@/ui/atoms/Icons/IconCircleShip';
import { formattedDate } from '@/ui/_helpers/DateTime';
import Activity from './Activity';

/**
 * Renders an OrderActivity Shipment
 */
function ActivityShipment({ activity }) {
    return (
        <Activity
            activity={activity}
            leftCol={<IconCircleShip />}
            middleCol={
                <Fragment>
                    <span style={{ fontWeight: '600' }}>
                        {activity.update?.status}
                    </span>
                    <span
                        style={{
                            display: 'block',
                            fontSize: '12px',
                            color: 'silver',
                        }}
                    >
                        {formattedDate(activity.update?.createdAt)}
                    </span>
                </Fragment>
            }
        />
    );
}

ActivityShipment.propTypes = {
    activity: PropTypes.object,
};

export default ActivityShipment;
