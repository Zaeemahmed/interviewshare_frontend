import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { gqlEvents } from '../../../data/Event/Events';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../../templates/Layout';
import { Box } from '../../components/Base/Base';
import EventDeleteButton from './EventDeleteButton';
import EventEditButton from './EventEditButton';
import EventCreateButton from './EventCreateButton';

export default function EventList() {
    const { loading, error, data } = useQuery(gqlEvents, {
        fetchPolicy: 'cache-and-network',
    });

    const events = (data && data.event) || [];

    return (
        <Layout loading={loading} error={error}>
            <Grid container spacing={2}>
                {events.map(event => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={event.id}>
                        <Card>
                            <CardHeader
                                action={
                                    <CardActions>
                                        <EventDeleteButton eventId={event.id} />
                                        <EventEditButton eventId={event.id} />
                                    </CardActions>
                                }
                                title={event.name}
                                subheader={event.id}
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    ...
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box mt="25px">
                <EventCreateButton />
            </Box>
        </Layout>
    );
}
