import React from 'react';
import { useHistory } from 'react-router-dom';
import 'date-fns';
import { useQuery } from '@apollo/client';
import { gqlDynamicFormDefinition } from '../../../data/Event/DynamicFormDefinition';
import Layout from '../../templates/Layout';
import DynamicForm from './DynamicForm';

export default function DynamicCreate() {
    const history = useHistory();

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

    // const getDefaultValue = f => {
    //     if (f.defaultValue) {
    //         return f.defaultValue;
    //     }
    //
    //     switch (f.field_type.name) {
    //         case 'Toggle':
    //         case 'CheckboxSC':
    //         case 'Checkbox':
    //             return false;
    //         case 'Text':
    //         case 'DropDown':
    //         case 'WYSIWYG':
    //         case 'Email':
    //         case 'Website':
    //         case 'CreditCard':
    //         case 'PhoneNumber':
    //         case 'Number':
    //         case 'DatePicker':
    //         case 'DateTimePicker':
    //         case 'Radio':
    //         case 'Upload':
    //             return '';
    //         default:
    //             return null;
    //     }
    // };

    return (
        <Layout
            loading={loadingDynamicFormDefinition}
            error={errorDynamicFormDefinition}
        >
            {fields && fields.length > 0 && (
                <DynamicForm
                    history={history}
                    initialValues={initialValues}
                    fields={fields}
                    pageCount={pageCount}
                    parsedOptions={parsedOptions}
                    parsedHiddenFields={parsedHiddenFields}
                    event={
                        dataDynamicFormDefinition
                            .abstract_submission_system_by_pk.fk_event
                    }
                ></DynamicForm>
            )}
        </Layout>
    );
}
