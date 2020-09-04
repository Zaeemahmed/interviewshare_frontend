import React, { useState, Fragment } from 'react';
import { Row, Col } from 'antd';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from '@/ui/atoms/Base';
import IconUpArrow from '@/ui/atoms/Icons/IconUpArrow';
import ActivityComment from './ActivityComment';
import ActivityShipment from './ActivityShipment';
import ActivityDocument from './ActivityDocument';

/**
 * Renders a Group of Activities that can be hidden and shown
 */
export default function ActivityGroup({ activities }) {
    const [expandMultiple, shouldExpandMultiple] = useState(false);

    const Element = props => {
        if (props.activity.eventType === 'COMMENT') {
            return <ActivityComment {...props} />;
        } else if (props.activity.eventType === 'DOCUMENT_UPDATE') {
            return <ActivityDocument {...props} />;
        } else if (props.activity.eventType === 'TRACKING_UPDATE') {
            return <ActivityShipment {...props} />;
        } else {
            return '';
        }
    };
    return (
        <div>
            {!expandMultiple ? (
                <Element
                    activity={activities[0]}
                    length={activities.length}
                    multiple={true}
                    expandMultiple={expandMultiple}
                    shouldExpandMultiple={shouldExpandMultiple}
                />
            ) : (
                <Fragment>
                    {activities.map((a, index) => (
                        <Fragment key={index}>
                            {index === 0 ? (
                                <Element activity={a} />
                            ) : (
                                <IndentedRow
                                    isfirst={index === 1 ? 'true' : 'false'}
                                    islast={
                                        index === activities.length - 1
                                            ? 'true'
                                            : 'false'
                                    }
                                >
                                    <Col>
                                        <Element activity={a} />
                                    </Col>
                                </IndentedRow>
                            )}
                        </Fragment>
                    ))}
                    <Box textAlign="center">
                        <Text
                            color="#5ad192"
                            css="cursor: pointer; text-decoration: underline;"
                            onClick={() => shouldExpandMultiple(false)}
                        >
                            <FormattedMessage defaultMessage="Show less " />
                            <IconUpArrow />
                        </Text>
                    </Box>
                </Fragment>
            )}
        </div>
    );
}

const IndentedRow = styled(Row)`
    border-left: 1px solid lightgray;
    padding-left: 30px;
    ${props =>
        props.isfirst === 'true' &&
        css`
            & .activity-wrapper {
                margin-top: 0;
            }
            & {
                margin-top: 40px;
            }
        `}

    ${props =>
        props.islast === 'true' &&
        css`
            & .activity-wrapper {
                margin-bottom: 0;
            }
            & {
                margin-bottom: 20px;
            }
        `}
`;
