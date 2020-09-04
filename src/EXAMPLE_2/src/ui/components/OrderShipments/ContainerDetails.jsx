import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled, { css } from 'styled-components';
import { Row, Col } from 'antd';
import { formattedDate } from '@/ui/_helpers/DateTime';

function ContainerDetails({ container }) {
    // let container.updates = [{
    //     id: 1,
    //     description: 'Vessel ETA changed while approaching POD: ETA has been postponed by 1\n' +
    //     '                            hour to 2019-08-06 07:30:00+00:00',
    //     date: '2019-08-06 05:47:00'
    // },{
    //     id: 2,
    //     description: 'Vessel ETA changed while approaching POD: ETA has been postponed by 1\n' +
    //     '                            hour to 2019-08-06 07:30:00+00:00',
    //     date: '2019-08-06 05:47:00'
    // },{
    //     id: 3,
    //     description: 'Vessel ETA changed while approaching POD: ETA has been postponed by 1\n' +
    //     '                            hour to 2019-08-06 07:30:00+00:00',
    //     date: '2019-08-06 05:47:00'
    // },{
    //     id: 4,
    //     description: 'Vessel ETA changed while approaching POD: ETA has been postponed by 1\n' +
    //     '                            hour to 2019-08-06 07:30:00+00:00',
    //     date: '2019-08-06 05:47:00'
    // },{
    //     id: 5,
    //     description: 'Vessel ETA changed while approaching POD: ETA has been postponed by 1\n' +
    //     '                            hour to 2019-08-06 07:30:00+00:00',
    //     date: '2019-08-06 05:47:00'
    // },{
    //     id: 6,
    //     description: 'Vessel ETA changed while approaching POD: ETA has been postponed by 1\n' +
    //     '                            hour to 2019-08-06 07:30:00+00:00',
    //     date: '2019-08-06 05:47:00'
    // },];

    return (
        <div className="ContainerDetails">
            {/*CONTAINER UPDATES LIST*/}
            <h4>
                <FormattedMessage defaultMessage="Events" />
            </h4>
            {container.updates &&
                container.updates.map(update => (
                    <Row key={update.id}>
                        <Col span={1} style={{ width: '30px' }}>
                            <Div progressline>o</Div>
                        </Col>
                        <Col span={23}>
                            <div>{update.status}</div>
                            <div>{formattedDate(update.createdAt)}</div>
                        </Col>
                    </Row>
                ))}
        </div>
    );
}

ContainerDetails.propTypes = {
    container: PropTypes.object,
};

const Div = styled.div`
    ${props =>
        props.progressline &&
        css`
            color: #00d700;
            font-weight: 600;

            ::after {
                display: block;
                content: ' ';
                width: 2px;
                background: #ecebeb;
                height: 30px;
                position: relative;
                right: 0px;
                left: 2px;
                top: 0px;
            }
        `}
`;

export default ContainerDetails;
