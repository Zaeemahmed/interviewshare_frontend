import React from 'react';
import { useHistory } from 'react-router-dom';
import 'date-fns';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import ValidationSchema from '../../components/ValidationSchema/EventSchema';
import {
    gqlInsertEvent,
    cacheInsertEvent,
} from '../../../data/Event/InsertEvent';
import Layout from '../../templates/Layout';
import { DefaultCatch } from '../../components/Base/Form';
import EventForm from './EventForm';

export default function EventCreate() {
    const { t } = useTranslation();
    const history = useHistory();
    const [insertEvent, { error, loading }] = useMutation(gqlInsertEvent, {
        update: cacheInsertEvent,
    });

    const defaultValues = {
        name: '',
        mnemonic: '',
        start_time: null,
        end_time: null,
        location: '',
        city: '',
        language: '',
        is_closed: false,
    };

    const onSubmit = (values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
            insertEvent({
                variables: {
                    ...values,
                },
            })
                .then(() => {
                    history.push('/');
                    toast.success(
                        t('EventCreateSuccessful', {
                            name: values.name,
                        })
                    );
                })
                .catch(error => {
                    //not-unique mnemonic
                    //todo: use error code
                    if (
                        error.message ===
                        'Uniqueness violation. duplicate key value violates unique constraint "event_mnemonic_key"'
                    ) {
                        setFieldError(
                            'mnemonic',
                            t('MnemonicUniquenessViolation')
                        );
                    } else {
                        DefaultCatch(error);
                    }
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }, 500);
    };

    return (
        <Layout loading={loading} error={error}>
            <EventForm
                loading={loading}
                history={history}
                defaultValues={defaultValues}
                validationSchema={ValidationSchema}
                onSubmit={onSubmit}
                submitButtonLabel={t('EventCreateSubmit')}
            />
        </Layout>
    );
}
