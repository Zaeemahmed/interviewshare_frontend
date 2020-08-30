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
import Shop from './pages/Shop/Shop';
import EventSetup from './pages/EventSetup/EventSetup';
import UserSearch from './pages/UserSearch/UserSearch';
import CompanyRegistration from './pages/CompanyRegistration/CompanyRegistration';
import LoginUser from './pages/LoginUser/LoginUser';
import CustomQuestion from './pages/CustomQuestion/CustomQuestion';
import PremiumPlan from './pages/PremiumPlan/PremiumPlan';
import RegisterUser from '../ui/pages/RegisterUser/RegisterUser';

export default function App() {
    let isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <LocaleProvider>
                    <AppStyle />
                    <SizeContext.Provider value={isDesktop}>
                        <Switch>
                            <Route exact path="/">
                                <Landingpage />
                            </Route>
                            <Route exact path="/shop">
                                <Shop />
                            </Route>
                            <Route exact path="/registration">
                                <RegisterUser />
                            </Route>
                            <Route exact path="/login">
                                <LoginUser />
                            </Route>
                            <Route exact path="/shop">
                                <Shop />
                            </Route>
                            <Route exact path="/createquestion">
                                <CustomQuestion />
                            </Route>
                            <Route exact path="/premium">
                                <PremiumPlan />
                            </Route>
                            <Route path="/impressum">
                                <Impressum />
                            </Route>
                            <Route path="/eventSetup">
                                <EventSetup />
                            </Route>
                            <Route path="/userSearch">
                                <UserSearch />
                            </Route>
                            <Route path="/companyRegistration">
                                <CompanyRegistration />
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
