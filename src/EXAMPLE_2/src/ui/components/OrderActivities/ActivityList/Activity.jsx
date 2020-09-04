import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import styled from 'styled-components';

/**
 * Renders an Activity Container
 */
function Activity({
    leftCol,
    middleCol,
    children,
    onMouseEnter,
    onMouseLeave,
    onClick,
}) {
    return (
        <ActivityWrapper
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <Row>
                <Col xs={{ span: 2 }} md={{ span: 1 }}>
                    {leftCol}
                </Col>
                <Col
                    xs={{ span: 22 }}
                    md={{ span: 23 }}
                    style={{ paddingLeft: '10px' }}
                >
                    {middleCol}
                </Col>
            </Row>
            {children}
        </ActivityWrapper>
    );
}

Activity.propTypes = {
    leftCol: PropTypes.node,
    middleCol: PropTypes.node,
    children: PropTypes.any,
};

const ActivityWrapper = styled.div`
    padding: 25px;
    border: 1px solid #ecebeb;
    border-radius: 10px;
    background: #fff;
    margin: 20px 0;
`;

export default Activity;
