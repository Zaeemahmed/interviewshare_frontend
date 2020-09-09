import React from 'react';
import IconUserInitials from '@/ui/atoms/Icons/IconUserInitials';
import { useCurrentUser } from '@/api/Context/UserContext';
import { formattedDate } from '@/ui/_helpers/DateTime';
import { Flex, Box } from '@/ui/atoms/Base';
import MessageText from './MessageText';

/**
 * Renders an Answer for a Message
 */
function MessageAnswer({ answer, showReplyCreate, setShowReplyCreate }) {
    const currentUser = useCurrentUser();
    const firstName = answer.user.firstName || '';
    const lastName = answer.user.lastName || '';
    const userInitials = firstName[0] + lastName[0];
    const finalName =
        currentUser.id === answer.user.id ? 'You' : `${firstName} ${lastName}`;

    return (
        <Flex mt={22} width="100%">
            <Box
                width="50px"
                borderLeft="2px solid rgba(0, 0, 0, 0.15)"
                pl={12}
                mr={10}
            >
                <IconUserInitials text={userInitials} size={32} />
            </Box>
            <MessageText
                name={finalName}
                date={formattedDate(answer.createdAt)}
                message={answer.message}
                activity={answer}
                showReplyCreate={showReplyCreate}
                setShowReplyCreate={setShowReplyCreate}
                showReplyButton={false}
            />
        </Flex>
    );
}

export default MessageAnswer;
