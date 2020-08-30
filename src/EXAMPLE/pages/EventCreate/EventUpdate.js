import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'date-fns';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { gqlUpdateEvent } from '../../../data/Event/UpdateEvent';
import { gqlEvent } from '../../../data/Event/Event';
import Layout from '../../templates/Layout';
import { DefaultCatch } from '../../components/Base/Form';
import ValidationSchema from '../../components/ValidationSchema/EventSchema';
import EventForm from './EventForm';

export default function EventUpdate() {
    const { t } = useTranslation();
    const { eventId } = useParams();
    const history = useHistory();

    const { loading, error, data } = useQuery(gqlEvent, {
        variables: {
            id: eventId,
        },
        fetchPolicy: 'cache-and-network',
    });

    const [updateEventMutation, { mutationLoading }] = useMutation(
        gqlUpdateEvent
    );

    const eventData = (data && data.event[0]) || {};

    let initialValues = {
        name: eventData.name,
        mnemonic: eventData.mnemonic,
        start_time: eventData.start_time || null,
        end_time: eventData.end_time || null,
        location: eventData.location || '',
        city: eventData.city || '',
        language: eventData.language || '',
        is_closed: eventData.is_closed || false,
        description: eventData.description || '',
    };

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            updateEventMutation({
                variables: {
                    id: eventId,
                    ...values,
                },
            })
                .then(() => {
                    history.push('/');
                    toast.success(
                        t('EventUpdateSuccessful', { name: values.name })
                    );
                })
                .catch(DefaultCatch)
                .finally(() => {
                    setSubmitting(false);
                });
        }, 500);
    };

    return (
        <Layout loading={loading} error={error}>
            {data && data.event[0] ? (
                <EventForm
                    initialValues={initialValues}
                    loading={mutationLoading}
                    validationSchema={ValidationSchema}
                    onSubmit={onSubmit}
                    submitButtonLabel={t('EventEditSubmit')}
                />
            ) : (
                <p>{t('EventNotFound', { eventId: eventId })}</p>
            )}
        </Layout>
    );
}
