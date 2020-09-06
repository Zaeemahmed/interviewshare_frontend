import React from 'react';
import { Row, Col } from 'antd';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { gqlOrderByIdOrderEvents } from '@/api/Queries/Orders';
import { Box, Flex, Card } from '@/ui/atoms/Base';
import Overlay from '@/ui/atoms/Overlay';
import ButtonX from '@/ui/atoms/Buttons/ButtonX';
import { gqlActivityFilter, gqlShowMessageOverlay } from '@/api/Queries/local';
import { useOrder } from '@/api/Context/OrderContext';
import ActivityComment from './ActivityList/ActivityComment';
import MessageCreate from './Message/MessageCreate';
import ActivityShipment from './ActivityList/ActivityShipment';
import ActivityDocument from './ActivityList/ActivityDocument';
import ActivityFilter from './ActivityList/ActivityFilter';

/**
 * A List and Filter for Activities
 */
function OrderActivities() {
    const apolloClient = useApolloClient();
    const { order, permissions } = useOrder();
    const { isSupplyChainManager, showCustomer, showSupplier } = permissions;

    const { data } = useQuery(gqlOrderByIdOrderEvents, {
        variables: {
            orderId: order.id,
            showSupplier: showSupplier,
            showCustomer: showCustomer,
            showSupplyChainManager: isSupplyChainManager,
        },
        pollInterval: 5000,
    });
    let activities = [];
    activities = data?.orderById?.orderEvents || [];

    //Deep Clone: Or else "refetchOrder" does not rerender replys
    activities = JSON.parse(JSON.stringify(activities));

    if (activities.length > 0) {
        activities.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
    }

    let { data: showMessageOverlay } = useQuery(gqlShowMessageOverlay);
    showMessageOverlay = !!showMessageOverlay?.showMessageOverlay;

    //Filter activites
    let activityFilter = useQuery(gqlActivityFilter);
    activityFilter =
        (activityFilter.data && activityFilter.data.activityFilter) || 'all';
    if (activityFilter !== 'all') {
        activities = activities.filter(a => {
            if (activityFilter === 'messages') {
                return a.eventType === 'COMMENT';
            } else if (activityFilter === 'documents') {
                return a.eventType === 'DOCUMENT_UPDATE';
            } else if (activityFilter === 'shipments') {
                return a.eventType === 'TRACKING_UPDATE';
            } else {
                return true;
            }
        });
    }

    activities = organizeMessageReplies(activities);

    const showOverlay = () => {
        apolloClient.writeData({
            data: {
                showCreateMessageReaders: true,
                showMessageOverlay: true,
            },
        });
    };

    return (
        <Row>
            <Col xs={{ span: 24 }} lg={{ span: 18 }}>
                <div className="OrderActivities">
                    <Card
                        onClick={showOverlay}
                        position="relative"
                        p="20px 24px"
                        zIndex={11}
                    >
                        {showMessageOverlay && (
                            <Flex
                                justifyContent="flex-end"
                                position="absolute"
                                right={25}
                            >
                                <ButtonX
                                    onClick={e => {
                                        e.stopPropagation();
                                        apolloClient.writeData({
                                            data: {
                                                createMessage: '',
                                                replyMessage: '',
                                                showCreateMessageReaders: false,
                                                showMessageOverlay: false,
                                            },
                                        });
                                    }}
                                />
                            </Flex>
                        )}
                        <Title>
                            <FormattedMessage defaultMessage="Send Message" />
                        </Title>
                        <MessageCreate />
                    </Card>
                    {showMessageOverlay && (
                        <Overlay
                            onClick={() =>
                                apolloClient.writeData({
                                    data: {
                                        createMessage: '',
                                        replyMessage: '',
                                        showCreateMessageReaders: false,
                                        showMessageOverlay: false,
                                    },
                                })
                            }
                        />
                    )}

                    <Box mt={53}>
                        <ActivityFilter />
                    </Box>
                    {activities?.map(a => {
                        if (a.eventType === 'COMMENT')
                            return <ActivityComment key={a.id} activity={a} />;
                        if (a.eventType === 'DOCUMENT_UPDATE')
                            return <ActivityDocument key={a.id} activity={a} />;
                        if (a.eventType === 'TRACKING_UPDATE')
                            return <ActivityShipment key={a.id} activity={a} />;
                        return '';
                    })}
                </div>
            </Col>
        </Row>
    );
}

/*
 Message-Replys are currently stored like normal message, with the exception
 of having the field "answerTo".
 This function takes all Replys and connects them with the original Message by
 storing them in .answers[]
 */
const organizeMessageReplies = activities => {
    let answerMap = {};
    let i = 0;
    if (activities?.length > 0) {
        while (i < activities.length) {
            if (activities[i].answerTo?.id) {
                // Message is a Reply
                if (!answerMap[activities[i].answerTo.id]) {
                    answerMap[activities[i].answerTo.id] = {
                        answers: [],
                    };
                }
                answerMap[activities[i].answerTo.id].answers.unshift(
                    activities[i]
                );
                activities.splice(i, 1);
            } else {
                //Normal Message (Not a Reply)
                if (answerMap[activities[i].id]) {
                    // Add existing answers
                    activities[i].answers = answerMap[activities[i].id].answers;
                }
                i++;
            }
        }
    }

    return activities;
};

const Title = styled.h3`
    margin-bottom: 15px;
    line-height: 21px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.65);
`;

export default OrderActivities;
