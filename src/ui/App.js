import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ErrorBoundary from '../helpers/ErrorBoundary';
import LocaleProvider from '../helpers/LocaleProvider';
import theme from '../config/theme';
import { SizeContext } from '../context/SizeContext';
import Landingpage from './pages/Landingpage/Landingpage';
import Impressum from './pages/Impressum/Impressum';
import MyTeam from './pages/MyTeam/MyTeam';
import Achievements from './pages/Achievements/Achievements';
import ForYouIWill from './pages/ForYouIWill/ForYouIWill';
import LetsGetStarted from './pages/LetsGetStarted/LetsGetStarted';
import DownloadCV from './pages/Download/DownloadCV';

export default function App() {
    let isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <LocaleProvider>
                    <SizeContext.Provider value={isDesktop}>
                        <Switch>
                            <Route exact path="/">
                                <Landingpage />
                            </Route>
                            <Route path="/impressum">
                                <Impressum />
                            </Route>
                            <Route path="/myteam">
                                <MyTeam />
                            </Route>
                            <Route path="/intro">
                                {() => {
                                    window.location.href =
                                        'https://calendly.com/maximilian-garmatsch/intro';
                                }}
                            </Route>
                            <Route path="/achievements">
                                <Achievements />
                            </Route>
                            <Route path="/foryouiwill">
                                <ForYouIWill />
                            </Route>
                            <Route path="/letsgetstarted">
                                <LetsGetStarted />
                            </Route>
                            <Route path="/cv">
                                <DownloadCV />
                            </Route>
                            <Route path="/lebenslauf">
                                <DownloadCV />
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
        color: #ffffff;
        background: #222222;
        margin: 0;
        padding: 0;
    }
`;
