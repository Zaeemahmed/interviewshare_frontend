import * as Yup from 'yup';

const getType = field => {
    switch (field.field_type.name) {
        /*case 'Checkbox':
            return Yup.array();
        case 'DateTimePicker':
            return Yup.mixed();
        case 'Number':
            return Yup.number();
        case 'Toggle':
            return Yup.boolean();*/
        default:
            return Yup.mixed();
    }
};

export const DynamicValidation = fields => {
    let ValidationSchema = null;

    if (fields && fields.length > 0) {
        const fieldValidations = {};
        let fieldName;
        for (let i = 0; i < fields.length; i++) {
            fieldName = fields[i].db_field_name || fields[i].name;
            fieldValidations[fieldName] = getType(fields[i]);

            // Is Required
            if (fields[i].is_required) {
                fieldValidations[fieldName] = fieldValidations[
                    fieldName
                ].concat(Yup.string().required(`Required`));
            }

            // Min Length
            if (fields[i].min_length) {
                fieldValidations[fieldName] = fieldValidations[
                    fieldName
                ].concat(
                    Yup.string().min(
                        fields[i].min_length,
                        `Must have at least ${fields[i].min_length} characters`
                    )
                );
            }

            // Max Length
            if (fields[i].max_length) {
                fieldValidations[fieldName] = fieldValidations[
                    fieldName
                ].concat(
                    Yup.string().max(
                        fields[i].max_length,
                        `Must have no more than ${fields[i].max_length} characters`
                    )
                );
            }

            // Selections Max
            if (fields[i].selections_max) {
                fieldValidations[fieldName] = fieldValidations[
                    fieldName
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

    return ValidationSchema;
};
