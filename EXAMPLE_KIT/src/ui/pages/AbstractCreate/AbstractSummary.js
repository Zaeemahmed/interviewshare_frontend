import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import 'date-fns';

import { gqlDynamicFormDefinition } from '../../../data/Event/DynamicFormDefinition';
import Layout from '../../templates/Layout';

export default function AbstractSummary() {
    let { systemId } = useParams();
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

    let summaryData = [];
    if (!loadingDynamicFormDefinition) {
        //first loop over pages
        if (
            dataDynamicFormDefinition &&
            dataDynamicFormDefinition.abstract_submission_system_by_pk.pages
        ) {
            dataDynamicFormDefinition.abstract_submission_system_by_pk.pages.forEach(
                page => {
                    page.blocks.forEach(block => {
                        block.fields.forEach(field => {
                            summaryData.push({
                                label: field.field_translations[0].label,
                                db_field_name: field.db_field_name,
                            }); //TODO check if field_translation exists
                        });
                    });
                }
            );
        }
        console.log(summaryData);

        //build dynamic abstractQuery
        let queryParams = [];
        summaryData.forEach(entry =>
            entry.db_field_name ? queryParams.push(entry.db_field_name) : null
        );

        queryParams = queryParams.join('\n');
        console.log(queryParams);

        const gqlAbstract = gql`
        query AbstractQuery($id: uuid) {
            abstract(where: { id: { _eq: "f98ef120-2e26-44f5-afdc-4f7df7bede28" } }) {
                ${queryParams}
            }
        }
        `;
        console.log(gqlAbstract);
    }

    return (
        <Layout
            loading={loadingDynamicFormDefinition}
            error={errorDynamicFormDefinition}
        >
            {summaryData && summaryData.length > 0 && <div>Summary</div>}
        </Layout>
    );
}
