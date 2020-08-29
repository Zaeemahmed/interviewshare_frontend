import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'date-fns';
import { useMutation, useQuery } from '@apollo/client';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { gqlDynamicFormDefinition } from '../../../data/Event/DynamicFormDefinition';
import {
    gqlInsertEvent,
    cacheInsertEvent,
} from '../../../data/Event/InsertEvent';
import Layout from '../../templates/Layout';
import { DefaultCatch } from '../../components/Base/Form';
import DynamicForm from './DynamicForm';

export default function AbstractCreate() {
    const { t } = useTranslation();
    const history = useHistory();
    const [insertEvent, { loading }] = useMutation(gqlInsertEvent, {
        update: cacheInsertEvent,
    });
    const {
        loading: loadingDynamicFormDefinition,
        error: errorDynamicFormDefinition,
        data: dataDynamicFormDefinition,
    } = useQuery(gqlDynamicFormDefinition, {
        variables: {
            id: '337c54b5-fb7c-4887-9e8f-1ece1041fdc2',
            locale: 'en',
        },
        fetchPolicy: 'cache-and-network',
    });

    let fields =
        dataDynamicFormDefinition &&
        dataDynamicFormDefinition.abstract_submission_system_by_pk.pages[0]
            .blocks[0].fields;

    // JSON.parse "options" and "is_hidden"
    let parsedOptions = {};
    let parsedHiddenFields = {};
    if (fields) {
        for (let i = 0; i < fields.length; i++) {
            if (
                fields[i].field_translations[0].options &&
                fields[i].field_translations[0].options.length > 0 &&
                !parsedOptions[fields[i].id]
            ) {
                parsedOptions[fields[i].id] = JSON.parse(
                    fields[i].field_translations[0].options
                );
            }

            if (fields[i].is_hidden === 'true') {
                parsedHiddenFields[fields[i].id] = 'true';
            } else if (fields[i].is_hidden) {
                parsedHiddenFields[fields[i].id] = JSON.parse(
                    fields[i].is_hidden
                );
            }
        }
    }

    const pageCount =
        dataDynamicFormDefinition &&
        dataDynamicFormDefinition.abstract_submission_system_by_pk
            .pages_aggregate.aggregate.count;

    let initialValues = {};

    const getDefaultValue = f => {
        if (f.defaultValue) {
            return f.defaultValue;
        }

        switch (f.field_type.name) {
            case 'Toggle':
            case 'CheckboxSC':
            case 'Checkbox':
                return false;
            case 'Text':
            case 'DropDown':
            case 'WYSIWYG':
            case 'Email':
            case 'Website':
            case 'CreditCard':
            case 'PhoneNumber':
            case 'Number':
            case 'DatePicker':
            case 'DateTimePicker':
            case 'Radio':
            case 'Upload':
                return '';
            default:
                return null;
        }
    };

    if (fields) {
        fields.map(f => (initialValues[f.name] = getDefaultValue(f)));
    }

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            const UUID = uuid();
            insertEvent({
                variables: {
                    id: UUID,
                    ...values,
                },
            })
                .then(() => {
                    history.push('/');
                    toast.success(t('AbstractCreateSuccessful'));
                })
                .catch(DefaultCatch)
                .finally(() => {
                    setSubmitting(false);
                });
        }, 500);
    };

    const getType = field => {
        switch (field.field_type.name) {
            case 'Checkbox':
                return Yup.array();
            case 'DateTimePicker':
                return Yup.date();
            case 'Toggle':
                return Yup.boolean();
            default:
                return Yup.string();
        }
    };

    let ValidationSchema = null;
    if (fields && fields.length > 0) {
        const fieldValidations = {};
        for (let i = 0; i < fields.length; i++) {
            fieldValidations[fields[i].name] = getType(fields[i]);

            // Is Required
            if (fields[i].is_required) {
                fieldValidations[fields[i].name] = fieldValidations[
                    fields[i].name
                ].concat(Yup.string().required(`Required`));
            }

            // Min Length
            if (fields[i].min_length) {
                fieldValidations[fields[i].name] = fieldValidations[
                    fields[i].name
                ].concat(
                    Yup.string().min(
                        fields[i].min_length,
                        `Must have at least ${fields[i].min_length} characters`
                    )
                );
            }

            // Max Length
            if (fields[i].max_length) {
                fieldValidations[fields[i].name] = fieldValidations[
                    fields[i].name
                ].concat(
                    Yup.string().max(
                        fields[i].max_length,
                        `Must have no more than ${fields[i].max_length} characters`
                    )
                );
            }

            // Selections Max
            if (fields[i].selections_max) {
                fieldValidations[fields[i].name] = fieldValidations[
                    fields[i].name
                ].concat(
                    Yup.array().max(
                        fields[i].selections_max,
                        `Must have no more than ${fields[i].selections_max} selections`
                    )
                );
            }
        }
        ValidationSchema = Yup.object().shape(fieldValidations);
    }

    return (
        <Layout
            loading={loadingDynamicFormDefinition}
            error={errorDynamicFormDefinition}
        >
            <DynamicForm
                validationSchema={ValidationSchema}
                loading={loading}
                history={history}
                onSubmit={onSubmit}
                initialValues={initialValues}
                fields={fields}
                pageCount={pageCount}
                parsedOptions={parsedOptions}
                parsedHiddenFields={parsedHiddenFields}
            ></DynamicForm>
        </Layout>
    );
}
