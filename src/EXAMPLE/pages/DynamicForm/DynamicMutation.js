import { gql } from '@apollo/client';
import { gqlAbstracts } from '../../../data/Abstract/Abstracts';

export const dynamicInsertAbstractMutation = fields => {
    let inputVariables = '';
    let inputObjects = '';

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].db_field_name) {
            inputVariables += `$${fields[i].db_field_name}: String\n`;
            inputObjects += `${fields[i].db_field_name}: $${fields[i].db_field_name}\n`;
        }
    }
    inputVariables = inputVariables.substr(0, inputVariables.length - 1);
    inputObjects = inputObjects.substr(0, inputObjects.length - 1);

    return gql`
        mutation InsertAbstract(
        ${inputVariables}
        ) {
            insert_abstract(
                objects: {
                    ${inputObjects}
                } 
            )
            {
                returning {
                    id
                }
            }
        }
    `;
};

export const cacheInsertAbstract = (cache, { data }) => {
    const newAbstract = data.insert_abstract.returning[0];
    const existingAbstracts = cache.readQuery({
        query: gqlAbstracts,
    });
    let newAbstracts = [newAbstract];
    if (existingAbstracts && existingAbstracts.length > 0) {
        newAbstracts = [newAbstract, ...existingAbstracts.abstract];
    }
    cache.writeQuery({
        query: gqlAbstracts,
        data: { abstract: newAbstracts },
    });
};
