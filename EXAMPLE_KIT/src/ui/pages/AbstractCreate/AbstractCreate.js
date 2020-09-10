import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import 'date-fns';
import { useQuery } from '@apollo/client';
import Pagination from '@material-ui/lab/Pagination';
import { gqlDynamicFormDefinition } from '../../../data/Event/DynamicFormDefinition';
import Layout from '../../templates/Layout';
import AbstractForm from './AbstractForm';

export default function AbstractCreate() {
    let { page, systemId } = useParams();
    page = parseInt(page, 10) || 1;
    const history = useHistory();

    const {
        loading: loadingDynamicFormDefinition,
        error: errorDynamicFormDefinition,
        data: dataDynamicFormDefinition,
    } = useQuery(gqlDynamicFormDefinition, {
        variables: {
            id: systemId,
            locale: 'en',
        },
        fetchPolicy: 'cache-and-network',
    });

    //todo get abstract values
    let dataAbstract = {
        id: 'd0343e6c-d9ae-45a1-a67e-231451bf68ac',
        firstName: 'Max',
        abstract__custom_field_1: 'asdf',
        abstract__custom_field_2: 'Allgemeinmedizin',
        abstract__custom_field_3: null,
        abstract__custom_field_4:
            'Tue Sep 08 2020 08:35:15 GMT+0200 (Mitteleuropäische Sommerzeit)',
        abstract__custom_field_5: '4',
        abstract__custom_field_6:
            'Tue Sep 08 2020 08:35:15 GMT+0200 (Mitteleuropäische Sommerzeit)',
        abstract__custom_field_7:
            'Hint Sportwissenschaft/ Sportmedizin,Hint Universitätsinstitut/Forschungseinrichtung',
        abstract__custom_field_8: 'Receive Newsletter',
        abstract__custom_field_9: null,
        abstract__custom_field_10: '22',
        abstract__body: 'BOOODY',
    };

    const pageCount =
        dataDynamicFormDefinition &&
        dataDynamicFormDefinition.abstract_submission_system_by_pk
            .pages_aggregate.aggregate.count;

    if (!page || page <= 0 || page > pageCount) {
        return <div>Page not found</div>;
    }

    let fields =
        dataDynamicFormDefinition &&
        dataDynamicFormDefinition.abstract_submission_system_by_pk.pages[
            page - 1
        ].blocks[0].fields;

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

    return (
        <Layout
            loading={loadingDynamicFormDefinition}
            error={errorDynamicFormDefinition}
        >
            <Pagination
                count={pageCount}
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={(e, value) =>
                    history.push('/abstractCreate/' + systemId + '/' + value)
                }
            />
            {fields && fields.length > 0 && (
                <AbstractForm
                    defaultValues={dataAbstract}
                    fields={fields}
                    pageCount={pageCount}
                    parsedOptions={parsedOptions}
                    parsedHiddenFields={parsedHiddenFields}
                    event={
                        dataDynamicFormDefinition
                            .abstract_submission_system_by_pk.fk_event
                    }
                    systemId={systemId}
                    page={page}
                ></AbstractForm>
            )}
        </Layout>
    );
}
