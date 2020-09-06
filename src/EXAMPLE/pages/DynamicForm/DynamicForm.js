import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useTranslation } from 'react-i18next';
import { Grid, Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
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
import { DynamicValidation } from './DynamicValidation';
import {
    dynamicInsertAbstractMutation,
    cacheInsertAbstract,
} from './DynamicMutation';

const DynamicForm = ({
    history,
    pageCount,
    fields,
    parsedOptions,
    parsedHiddenFields,
}) => {
    const { t } = useTranslation();
    const { handleSubmit, getValues, errors, control } = useForm({
        resolver: yupResolver(DynamicValidation(fields)),
    });
    const [insertAbstract, { loading: loadingInsertAbstract }] = useMutation(
        dynamicInsertAbstractMutation(fields),
        {
            update: cacheInsertAbstract,
        }
    );

    const onSubmit = (data, e) => {
        insertAbstract({
            variables: {
                ...data,
            },
        });
    };
    const onError = (errors, e) => {
        console.log(errors, e);
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
                <Grid item xs={12} md={6}>
                    <Pagination
                        count={pageCount}
                        variant="outlined"
                        shape="rounded"
                    />
                </Grid>
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
                                        hintmessage={
                                            f.field_translations[0].hint_message
                                        }
                                        errors={errors}
                                    />
                                )) ||
                                    (f.field_type.name === 'Number' && (
                                        <NumberInput
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            hintmessage={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            errors={errors}
                                        />
                                    )) ||
                                    (f.field_type.name === 'DatePicker' && (
                                        <DatePicker
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            hintmessage={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            errors={errors}
                                        />
                                    )) ||
                                    (f.field_type.name === 'DateTimePicker' && (
                                        <DateTimePicker
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            hintmessage={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            errors={errors}
                                        />
                                    )) ||
                                    (f.field_type.name === 'DropDown' && (
                                        <DropDown
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            errors={errors}
                                            options={parsedOptions[f.id]}
                                        />
                                    )) ||
                                    (f.field_type.name === 'Toggle' && (
                                        <Toggle
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            errors={errors}
                                            hintmessage={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                        />
                                    )) ||
                                    (f.field_type.name === 'Radio' && (
                                        <RadioGroup
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            errors={errors}
                                            hintmessage={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            options={parsedOptions[f.id]}
                                        />
                                    )) ||
                                    (f.field_type.name === 'Checkbox' && (
                                        <CheckboxGroup
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            errors={errors}
                                            hintmessage={
                                                f.field_translations[0]
                                                    .hint_message
                                            }
                                            options={parsedOptions[f.id]}
                                            values={values}
                                        />
                                    )) ||
                                    (f.field_type.name === 'WYSIWYG' && (
                                        <FroalaWYSIWYG
                                            name={fieldName}
                                            control={control}
                                            label={label(f)}
                                            errors={errors}
                                            options={parsedOptions[f.id]}
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
