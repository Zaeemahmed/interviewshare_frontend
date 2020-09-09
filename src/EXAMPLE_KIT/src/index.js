import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './ui/App';
import apolloClient from './data/apolloClient';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);
