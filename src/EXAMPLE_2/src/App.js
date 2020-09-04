import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { apolloClient } from './api/react-apollo';
import ErrorBoundary from './ui/_helpers/ErrorBoundary';
import LocaleProvider from './ui/_helpers/LocaleProvider';
import PrivateRoute from './ui/_helpers/PrivateRoute';
import Welcome from './ui/pages/Welcome/Welcome';
import Order from './ui/pages/Order/Order';
import Orders from './ui/pages/Orders/Orders';
import Teams from './ui/pages/Teams/Teams';
import theme from './config/theme';

const App = () => (
    <ErrorBoundary>
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
                <LocaleProvider>
                    <Router>
                        <Route exact path="/" component={Welcome} />
                        <PrivateRoute exact path="/orders" component={Orders} />
                        <PrivateRoute
                            path="/order/:orderId/:tab?"
                            component={Order}
                        />
                        <PrivateRoute exact path="/team" component={Teams} />
                    </Router>
                </LocaleProvider>
            </ThemeProvider>
        </ApolloProvider>
    </ErrorBoundary>
);

export default App;
