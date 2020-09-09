import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { Box, Text } from '@/ui/atoms/Base';
import { gqlDeleteComment } from '@/api/Mutations/Comment';
import { useOrder } from '@/api/Context/OrderContext';
import { useCurrentUser } from '@/api/Context/UserContext';

/**
 * The text of a message (not a reply)
 */
function MessageText({
    name,
    date,
    message,
    activity,
    showReplyCreate,
    setShowReplyCreate,
    showReplyButton,
}) {
    const intl = useIntl();
    const currentUser = useCurrentUser();
    const { refetchOrder } = useOrder();
    const [showButtons, setShowButtons] = useState(false);

    const [deleteComment] = useMutation(gqlDeleteComment, {
        update(cache, { data: { updateComment } }) {
            refetchOrder();
        },
    });

    const onDelete = () => {
        Modal.confirm({
            title: intl.formatMessage({
                defaultMessage: 'Are you sure you want to delete your comment?',
            }),
            content: intl.formatMessage({
                defaultMessage:
                    'Deleting the comment means it will no longer be visible to anyone. This cannot be undone.',
            }),
            okText: intl.formatMessage({ defaultMessage: 'Delete' }),
            okType: 'danger',
            onOk() {
                deleteComment({
                    variables: {
                        commentId: activity.id,
                    },
                });
            },
        });
    };

    return (
        <Box
            width="100%"
            onMouseEnter={() => {
                !showReplyCreate && setShowButtons(true);
            }}
            onMouseLeave={() => {
                !showReplyCreate && setShowButtons(false);
            }}
        >
            <Text fontWeight="400" lineHeight="20px">
                {name}
            </Text>
            <Text fontSize="12px" ml={10} color="#C0C0C0">
                {date}
            </Text>
            <Box
                color="#595959"
                minHeight={28}
                mt={5}
                pb={8}
                css="word-wrap: break-word"
            >
                <Text>{message}</Text>
                {showButtons && ( // &&
                    <ButtonWrapper>
                        {showReplyButton && (
                            <Button
                                size="small"
                                type="primary"
                                style={{ marginRight: '10px' }}
                                onClick={() => {
                                    setShowReplyCreate(true);
                                    setShowButtons(false);
                                }}
                            >
                                <FormattedMessage defaultMessage="Reply" />
                            </Button>
                        )}
                        {currentUser.id === activity?.user?.id && (
                            <Button
                                size="small"
                                type="danger"
                                onClick={onDelete}
                            >
                                <FormattedMessage defaultMessage="Delete" />
                            </Button>
                        )}
                    </ButtonWrapper>
                )}
            </Box>
        </Box>
    );
}

const ButtonWrapper = styled.div`
    margin-top: 5px;
    float: right;
`;

export default MessageText;
