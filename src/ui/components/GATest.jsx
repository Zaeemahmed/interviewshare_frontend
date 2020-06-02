import React from 'react';

function GATest() {
    const myButton = () => {
        console.log('### Landingpage test');
        window.gtag(
            'send',
            'event',
            'Amazon-Sports',
            'Submit',
            'Test Button',
            'clicked'
        );
    };

    return <button onClick={myButton}>Test Button</button>;
}

export default GATest;
