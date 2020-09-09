import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useTranslation } from 'react-i18next';
import { Grid, Button } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import TextInput from '../../components/ReactHookFormTypes/TextInput';
import NumberInput from '../../components/ReactHookFormTypes/NumberInput';
import DatePicker from '../../components/ReactHookFormTypes/DatePicker';
import DateTimePicker from '../../components/ReactHookFormTypes/DateTimePicker';
import DropDown from '../../components/ReactHookFormTypes/DropDown';
import Toggle from '../../components/ReactHookFormTypes/ToggleSwitch';
import RadioGroup from '../../components/ReactHookFormTypes/RadioGroup';
import CheckboxGroup from '../../components/ReactHookFormTypes/CheckboxGroup';
import FroalaWYSIWYG from '../../components/ReactHookFormTypes/FroalaWYSIWYG';
import { DefaultCatch } from '../../components/Base/Form';
import { DynamicValidation } from './DynamicValidation';
import { dynamicInsertAbstractMutation } from './DynamicMutation';

const DynamicForm = ({
    fields,
    initialValues,
    parsedOptions,
    parsedHiddenFields,
    event,
    systemId,
    page,
    pageCount,
}) => {
    const { t } = useTranslation();
    const history = useHistory();
    const { handleSubmit, getValues, errors, control, register } = useForm({
        resolver: yupResolver(DynamicValidation(fields)),
    });
    const [insertAbstract, { loading: loadingInsertAbstract }] = useMutation(
        dynamicInsertAbstractMutation(fields, event, initialValues.id)
        /*{
            update: cacheInsertAbstract,
        }*/
    );

    const onSubmit = data => {
        console.log('### DynamicForm data', data);
        let variables = {};
        let nextPage = parseInt(page) + 1;
        Object.keys(data).forEach(value => {
            if (shouldBeSaved(value, data)) {
                // Cast to string for back-end compliance
                variables[value] = '' + data[value];
            }
        });
        insertAbstract({
            variables: variables,
        })
            .then(() => {
                hasNextPage(page, pageCount)
                    ? history.push(
                          '/dynamicCreate/' + systemId + '/' + nextPage
                      )
                    : alert('submission completed'); // summary page displaying entered content with possibilty to go back to specific pages for editing
            })
            .catch(error => {
                DefaultCatch(error);
            });
    };
    const onError = errors => {
        console.warn('Validation Error', errors);
    };

    const values = getValues();

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            disabled={loadingInsertAbstract}
            aria-busy={loadingInsertAbstract}
            noValidate
        >
            <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12} md={6}></Grid>
                {fields.map(f => {
                    let fieldName = f.db_field_name || f.name;
                    return (
                        !hidden(f, values, parsedHiddenFields) && (
                            <Grid
                                key={f.id}
                                item
                                xs={12}
                                md={f.field_type.name === 'WYSIWYG' ? 12 : 6}
                            >
                                {(f.field_type.name === 'Text' && (
                                    <TextInput
                                        name={fieldName}
                                        control={control}
                                        label={label(f)}
                                        hint={
                                            f.field_translations[0].hint_message
                                        }
                                        errors={errors}
                                        defaultValue={
                                            initialValues[f.db_field_name] || ''
                                        }
                                    />
                                )) ||
                                    (f.field_type.name === 'Number' && (
                                        <NumberInput
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            hint={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            errors={errors}
                                            defaultValue={
                                                initialValues[f.db_field_name]
                                            }
                                        />
                                    )) ||
                                    (f.field_type.name === 'DatePicker' && (
                                        <DatePicker
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            hint={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            errors={errors}
                                            defaultValue={
                                                initialValues[f.db_field_name]
                                            }
                                        />
                                    )) ||
                                    (f.field_type.name === 'DateTimePicker' && (
                                        <DateTimePicker
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            hint={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            errors={errors}
                                            defaultValue={
                                                initialValues[f.db_field_name]
                                            }
                                        />
                                    )) ||
                                    (f.field_type.name === 'DropDown' && (
                                        <DropDown
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            errors={errors}
                                            options={parsedOptions[f.id]}
                                            defaultValue={
                                                initialValues[f.db_field_name]
                                            }
                                        />
                                    )) ||
                                    (f.field_type.name === 'Toggle' && (
                                        <Toggle
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            errors={errors}
                                            hint={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            register={register}
                                            defaultValue={
                                                initialValues[f.db_field_name]
                                            }
                                        />
                                    )) ||
                                    (f.field_type.name === 'Radio' && (
                                        <RadioGroup
                                            name={fieldName}
                                            control={control}
                                            register={register}
                                            label={label(f)}
                                            errors={errors}
                                            hint={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            options={parsedOptions[f.id]}
                                            defaultValue={
                                                initialValues[f.db_field_name]
                                            }
                                        />
                                    )) ||
                                    (f.field_type.name === 'Checkbox' && (
                                        <CheckboxGroup
                                            name={fieldName}
                                            control={control}
                                            register={register}
                                            label={label(f)}
                                            errors={errors}
                                            hint={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            options={parsedOptions[f.id]}
                                            values={values}
                                            defaultValues={
                                                initialValues[f.db_field_name]
                                            }
                                        />
                                    )) ||
                                    (f.field_type.name === 'WYSIWYG' && (
                                        <FroalaWYSIWYG
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            errors={errors}
                                            options={parsedOptions[f.id]}
                                            defaultValue={
                                                initialValues[f.db_field_name]
                                            }
                                        />
                                    ))}
                            </Grid>
                        )
                    );
                })}
                <Grid item xs={12} md={6}>
                    <Button
                        fullWidth
                        color="secondary"
                        disabled={loadingInsertAbstract}
                        variant="outlined"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        {t('Back')}
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        fullWidth
                        color="primary"
                        type="submit"
                        disabled={loadingInsertAbstract}
                        variant="outlined"
                    >
                        {t('NextPage')}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
export default DynamicForm;

const hidden = (f, allValues, parsedHiddenFields) => {
    if (f.is_hidden === 'true') return true;

    const meetsConditions = (exceptionFields, fieldsOperator, allValues) => {
        if (fieldsOperator === 'OR') {
            for (let i = 0; i < exceptionFields.length; i++) {
                if (
                    allValues[exceptionFields[i].fieldName] ===
                    exceptionFields[i].conditionValue
                ) {
                    return true;
                }
            }
            return false;
        } else {
            // 'AND'
            for (let i = 0; i < exceptionFields.length; i++) {
                if (
                    allValues[exceptionFields[i].fieldName] !==
                    exceptionFields[i].conditionValue
                ) {
                    return false;
                }
            }
            return true;
        }
    };

    if (parsedHiddenFields[f.id] && parsedHiddenFields[f.id].fields) {
        return meetsConditions(
            parsedHiddenFields[f.id].fields,
            parsedHiddenFields[f.id].fields_operator,
            allValues
        );
    }
    return false;
};

const label = f => {
    return f.field_translations[0].label || f.name.toUpperCase() || '';
};

const hasNextPage = (page, pageCount) => {
    return pageCount > page ? true : false;
};

const shouldBeSaved = (value, data) => {
    // Only save field if "value" is in db_field_name-format (has "__")
    // AND has a corresponding value
    const databaseToFieldSeperator = '__'; //todo this must be prevented as a field name in the backend.
    if (value.indexOf(databaseToFieldSeperator) !== -1 && data[value]) {
        return true;
    }
    return false;
};
