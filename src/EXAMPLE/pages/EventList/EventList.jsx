import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { gqlEvents } from '../../../data/Event/Events';
import { Box, Card, Text } from '../../components/Base/Base';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../../templates/Layout';
import EventDelete from './EventDelete';

const useStyles = makeStyles(() => ({
    colors: {
        black: '#000',
        white: '#fff',
        green: '#0de99a',
        grey: '#f8f9fa',
        darkgrey: '#191919',
        deepBlack: '#222222',
    },
}));

export default function EventList() {
    const { loading, error, data } = useQuery(gqlEvents);
    const events = (data && data.event) || [];
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Layout loading={loading} error={error}>
            <Box>
                {events.map(event => (
                    <Card key={event.id}>
                        <Text color={classes.colors.black}>{event.name}</Text>
                        <br />
                        <EventDelete eventId={event.id} />
                        <Link
                            to={{
                                pathname: '/eventUpdate/' + event.id,
                            }}
                        >
                            <Button variant="outlined" color="secondary">
                                {t('EventEdit')}
                            </Button>
                        </Link>
                    </Card>
                ))}
            </Box>
            <br />
            <Link to="/eventCreate">
                <Button variant="outlined" color="primary">
                    {t('EventCreate')}
                </Button>
            </Link>
        </Layout>
    );
}
