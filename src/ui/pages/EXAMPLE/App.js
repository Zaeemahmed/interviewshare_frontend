import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import ErrorBoundary from '../helpers/ErrorBoundary';
import LocaleProvider from '../helpers/LocaleProvider';
import { SizeContext } from '../context/SizeContext';
import EventCreate from './pages/EventCreate/EventCreate';
import EventUpdate from './pages/EventCreate/EventUpdate';
import EventList from './pages/EventList/EventList';
import AbstractCreate from './pages/AbstractCreate/AbstractCreate';
import Impressum from './pages/Impressum/Impressum';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
    let isDesktop = useMediaQuery(`(min-width: 768px)`);

    const theme = useTheme();

    return (
        <ErrorBoundary>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <LocaleProvider>
                    <SizeContext.Provider value={isDesktop}>
                        <Switch>
                            <Route exact path="/">
                                <EventList />
                            </Route>
                            <Route exact path="/eventCreate">
                                <EventCreate />
                            </Route>
                            <Route exact path="/eventUpdate/:eventId">
                                <EventUpdate />
                            </Route>
                            <Route exact path="/abstractCreate">
                                <AbstractCreate />
                            </Route>
                            <Route exact path="/impressum">
                                <Impressum />
                            </Route>
                        </Switch>
                    </SizeContext.Provider>
                    <AppStyle />
                </LocaleProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

const AppStyle = createGlobalStyle`
    html,
    body {
        font-family: 'Roboto Mono', monospace;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 2rem;
        color: #000;
        background: #dddddd;
        margin: 0;
        padding: 0;
    }
`;
