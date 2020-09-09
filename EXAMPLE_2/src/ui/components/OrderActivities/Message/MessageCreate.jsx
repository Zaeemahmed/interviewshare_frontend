import React, { useState, Fragment } from 'react';
import { Input, Button, Checkbox, Tag } from 'antd';
import PropTypes from 'prop-types';
import { useMutation, useApolloClient, useQuery } from '@apollo/react-hooks';
import { FormattedMessage, useIntl } from 'react-intl';
import {
    gqlShowCreateMessagesReaders,
    gqlMessageText,
    gqlReplyText,
    gqlShowMessageOverlay,
} from '@/api/Queries/local';
import { gqlCreateComment } from '@/api/Mutations/Comment';
import { useCurrentUser } from '@/api/Context/UserContext';
import { useOrder } from '@/api/Context/OrderContext';
import IconUserInitials from '@/ui/atoms/Icons/IconUserInitials';
import { Flex, Box } from '@/ui/atoms/Base';

const { TextArea } = Input;

/**
 * Renders a form used to create comments
 */
function MessageCreate({ replyToMessageId, onCancel }) {
    const apolloClient = useApolloClient();
    const intl = useIntl();
    const [canBeReadBy, setCanBeReadBy] = useState([]);
    const [isSubmitLoading, setSubmitLoading] = useState(false);
    const currentUser = useCurrentUser();
    const { order } = useOrder();

    let { data: showCreateMessageReaders } = useQuery(
        gqlShowCreateMessagesReaders
    );
    showCreateMessageReaders =
        showCreateMessageReaders?.showCreateMessageReaders || false;

    let { data: messageText } = useQuery(gqlMessageText);
    messageText = messageText?.messageText || '';

    let { data: replyText } = useQuery(gqlReplyText);
    replyText = replyText?.replyText || '';

    let { data: showMessageOverlay } = useQuery(gqlShowMessageOverlay);
    showMessageOverlay = showMessageOverlay?.showMessageOverlay || '';

    const [errorMessage, setErrorMessage] = useState('');
    const [createComment] = useMutation(gqlCreateComment, {
        update(cache, { data: { gqlCreateComment } }) {},
    });

    const cleanUp = () => {
        setErrorMessage('');
        setSubmitLoading(false);
        apolloClient.writeData({
            data: {
                messageText: '',
                replyText: '',
                showCreateMessageReaders: false,
                showMessageOverlay: false,
            },
        });
        if (onCancel) onCancel();
    };

    const submitMessage = e => {
        e.preventDefault();
        if (replyToMessageId) {
            if (!replyText) {
                setErrorMessage(
                    intl.formatMessage({
                        defaultMessage: 'Please enter your message',
                    })
                );
            } else {
                setSubmitLoading(true);
                createComment({
                    variables: {
                        orderId: order.id,
                        message: replyText,
                        answerTo: replyToMessageId,
                    },
                }).then(cleanUp);
            }
        } else {
            if (!messageText) {
                setErrorMessage(
                    intl.formatMessage({
                        defaultMessage: 'Please enter your message',
                    })
                );
            } else if (canBeReadBy.length === 0) {
                setErrorMessage(
                    intl.formatMessage({
                        defaultMessage:
                            'You need to choose at least one party that should be able to read this message.',
                    })
                );
            } else {
                setSubmitLoading(true);
                createComment({
                    variables: {
                        orderId: order.id,
                        message: messageText,
                        canBeReadBy: canBeReadBy,
                    },
                }).then(cleanUp);
            }
        }
    };
    const changeCanBeReadBy = e => {
        setErrorMessage('');
        if (e.target.checked) {
            setCanBeReadBy([...canBeReadBy, e.target.id]);
        } else {
            setCanBeReadBy(canBeReadBy.filter(id => id !== e.target.id));
        }
    };

    const changeTextArea = e => {
        setErrorMessage('');
        if (replyToMessageId) {
            apolloClient.writeData({
                data: {
                    replyText: e.target.value,
                },
            });
        } else {
            apolloClient.writeData({
                data: {
                    messageText: e.target.value,
                },
            });
        }
    };

    return (
        <Fragment>
            {showCreateMessageReaders && !replyToMessageId && (
                <Flex flexWrap="wrap">
                    {order.availableCommentReaders?.map(reader => {
                        return (
                            <Box
                                display="inline-block"
                                m="0px 16px 16px 0px"
                                key={reader.team.id}
                            >
                                <Checkbox
                                    id={reader.team.id}
                                    checked={canBeReadBy.includes(
                                        reader.team.id
                                    )}
                                    onChange={changeCanBeReadBy}
                                >
                                    {reader.team.name}
                                </Checkbox>
                                <Tag>{reader.roleVerbose}</Tag>
                            </Box>
                        );
                    })}
                </Flex>
            )}
            <Flex mt={20} mb={10}>
                <IconUserInitials text={currentUser.initials} size={34} />
                <Box ml="18px" width="100%">
                    <TextArea
                        autoSize
                        autoFocus={!!replyToMessageId}
                        css="width: 100%; border: 0;"
                        value={replyToMessageId ? replyText : messageText}
                        onChange={changeTextArea}
                        placeholder={intl.formatMessage({
                            defaultMessage:
                                'Send a message to the parties involved in this order',
                        })}
                    />

                    {errorMessage && (
                        <Box px={11} color="red" data-testid="errorMessage">
                            {errorMessage}
                        </Box>
                    )}
                </Box>
            </Flex>
            <Flex justifyContent="flex-end">
                {onCancel && (
                    <Button
                        size="small"
                        css="margin-right: 10px"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                )}
                <Button
                    size="small"
                    onClick={submitMessage}
                    loading={isSubmitLoading}
                    key="submit"
                    type="primary"
                    hidden={!showMessageOverlay && !replyToMessageId}
                >
                    <FormattedMessage defaultMessage="Send Message" />
                </Button>
            </Flex>
        </Fragment>
    );
}

MessageCreate.propTypes = {
    replyToMessageId: PropTypes.string,
    onCancel: PropTypes.func,
};

export default MessageCreate;
