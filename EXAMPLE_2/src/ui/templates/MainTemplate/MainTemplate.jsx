import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Layout } from 'antd';
import LayoutHeader from '@/ui/components/LayoutHeader/LayoutHeader';
import Loading from '@/ui/atoms/Loading';
import ErrorMessage from '@/ui/atoms/ErrorMessage';

const AppStyle = createGlobalStyle`
    @media screen and (min-width: 600px) {
        .main-content {
            padding-left: 40px;
            padding-right: 40px;
        }
    }

    /* Invisible Scrollbars */
    .hidden-scrollbar {
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */
    }
    .hidden-scrollbar::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    /* For Ant-Design Buttons with loading spinner */
    .ant-btn.ant-btn-sm.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {
        padding-left: 24px !important;
    }

    .ant-btn-loading .anticon-loading {
        margin-right: 10px !important;
    }

`;

const StyledContent = styled(Layout.Content)`
    min-width: 708px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 80px;
`;

const StyledLayout = styled(Layout)`
    background: #f8f9fa !important;
    min-height: 100vh !important;
`;

function renderContent({ error, loading, children }) {
    if (error) return <ErrorMessage error={error} />;
    if (loading) return <Loading />;
    return children;
}

function MainTemplate(props) {
    return (
        <StyledLayout>
            <LayoutHeader />
            <StyledContent className="main-content">
                {renderContent(props)}
            </StyledContent>
            <AppStyle />
        </StyledLayout>
    );
}

MainTemplate.propTypes = {
    error: PropTypes.object,
    loading: PropTypes.bool,
    children: PropTypes.node,
};

export default MainTemplate;
