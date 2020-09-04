import React from 'react';
import { Spin } from 'antd';

function Loading() {
    return (
        <div style={{ width: '100%', margin: '25px', textAlign: 'center' }}>
            <Spin style={{ color: 'green' }} />
        </div>
    );
}

export default Loading;
