import { gql } from '@apollo/client';

export const dynamicInsertAbstractMutation = (fields, event) => {
    let abstractVars = '';
    let abstractObjects = '';
    let participantVars = '';
    let participantObjects = '';
    let hasParticipants = false;
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].db_field_name) {
            let explodedDBFieldName = fields[i].db_field_name.split('__');
            if (explodedDBFieldName.length > 1) {
                if (explodedDBFieldName[0] === 'participant') {
                    hasParticipants = true;
                    participantVars += `$${fields[i].db_field_name}: String\n`;
                    participantObjects += `${fields[i].db_field_name}: $${fields[i].db_field_name}\n`;
                } else {
                    abstractVars += `$${fields[i].db_field_name}: String\n`;
                    abstractObjects += `${fields[i].db_field_name}: $${fields[i].db_field_name}\n`;
                }
            }
        }
    }
    abstractVars = abstractVars.substr(0, abstractVars.length - 1);
    abstractObjects = abstractObjects.substr(0, abstractObjects.length - 1);

    participantVars = participantVars.substr(0, participantVars.length - 1);
    participantVars = hasParticipants ? participantVars : '';

    participantObjects = participantObjects.substr(
        0,
        participantObjects.length - 1
    );

    const gqlParticipants = hasParticipants
        ? `
        participant: {
            data: {
                fk_event: "${event}"
                ${participantObjects}
            }
        }`
        : '';

    //TODO remove hardcoded fk_author !
    return gql`
        mutation InsertAbstract(
        ${participantVars}
        ${abstractVars}
        ) {
            insert_abstract(
                objects: {
                    fk_author: "9c887270-fc32-4312-98ba-cc07f635ab6c"
                    ${gqlParticipants}
                    ${abstractObjects}
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
