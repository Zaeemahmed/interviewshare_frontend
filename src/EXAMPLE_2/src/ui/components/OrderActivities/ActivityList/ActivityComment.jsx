import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { formattedDate } from '@/ui/_helpers/DateTime';
import { useCurrentUser } from '@/api/Context/UserContext';
import IconUserInitials from '@/ui/atoms/Icons/IconUserInitials';
import { Box } from '@/ui/atoms/Base';
import MessageCreate from '../Message/MessageCreate';
import MessageText from '../Message/MessageText';
import MessageAnswer from '../Message/MessageAnswer';
import Activity from './Activity';

/**
 * Renders an OrderActivity Comment
 */
function ActivityComment({ activity }) {
    const [showReplyCreate, setShowReplyCreate] = useState(false);
    const currentUser = useCurrentUser();
    const firstName = activity?.user?.firstName || '';
    const lastName = activity?.user?.lastName || '';
    const finalName =
        currentUser.id === activity?.user?.id
            ? 'You'
            : `${firstName} ${lastName}`;

    return (
        <Activity
            activity={activity}
            setShowReplyCreate={setShowReplyCreate}
            leftCol={
                <div style={{ marginLeft: '2px' }}>
                    <IconUserInitials text={currentUser.initials} size={32} />
                </div>
            }
            middleCol={
                <Fragment>
                    <MessageText
                        name={finalName}
                        date={formattedDate(activity.createdAt)}
                        message={activity.message}
                        activity={activity}
                        showReplyCreate={showReplyCreate}
                        setShowReplyCreate={setShowReplyCreate}
                        showReplyButton={true}
                    />
                    {activity.answers?.map(answer => (
                        <MessageAnswer
                            key={answer.id}
                            answer={answer}
                            showReplyCreate={showReplyCreate}
                            setShowReplyCreate={setShowReplyCreate}
                        />
                    ))}
                </Fragment>
            }
        >
            {showReplyCreate && (
                <Box
                    m="25px -26px 0px -26px"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                    p="15px 25px 0px 25px"
                >
                    <Box>
                        <MessageCreate
                            replyToMessageId={activity.id}
                            onCancel={() => setShowReplyCreate(false)}
                        />
                    </Box>
                </Box>
            )}
        </Activity>
    );
}

ActivityComment.propTypes = {
    activity: PropTypes.object,
};

export default ActivityComment;
