import React from 'react';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Form, Formik } from 'formik';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaWYSIWYG from '../../components/FormikTypes/FroalaWYSIWYG';
import TextInput from '../../components/FormikTypes/TextInput';
import ToggleSwitch from '../../components/FormikTypes/ToggleSwitch';
import DateTimePicker from '../../components/FormikTypes/DateTimePicker';
import DatePicker from '../../components/FormikTypes/DatePicker';
import SelectType from '../../components/FormikTypes/Select';
import InfoIconButton from '../../components/Base/InfoIconButton';
import RadioGroup from '../../components/FormikTypes/RadioGroup';
import CheckboxGroup from '../../components/FormikTypes/CheckboxGroup';

const DynamicForm = ({
    loading,
    history,
    initialValues,
    pageCount,
    onSubmit,
    fields,
    validationSchema,
    parsedOptions,
    parsedHiddenFields,
}) => {
    const { t } = useTranslation();
    const label = f => {
        return f.field_translations[0].label || f.name.toUpperCase() || '';
    };

    const meetsConditions = (exceptionFields, fieldsOperator, allValues) => {
        if (fieldsOperator === 'OR') {
            for (let i = 0; i < exceptionFields.length; i++) {}
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

    const hidden = (f, allValues) => {
        if (f.is_hidden === 'true') return true;
        if (parsedHiddenFields[f.id] && parsedHiddenFields[f.id].fields) {
            return meetsConditions(
                parsedHiddenFields[f.id].fields,
                parsedHiddenFields[f.id].fields_operator,
                allValues
            );
        }
        return false;
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={true}
        >
            {({ isSubmitting, values, errors, handleChange, validateForm }) => {
                console.log('### DynamicForm re-render!');
                return (
                    <Form disabled={loading} aria-busy={loading}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Pagination
                                    count={pageCount}
                                    variant="outlined"
                                    shape="rounded"
                                />
                            </Grid>
                            {fields &&
                                fields.map(
                                    f =>
                                        (f.field_type.name === 'Text' && (
                                            <Grid
                                                key={f.id}
                                                item
                                                xs={12}
                                                md={6}
                                            >
                                                <TextInput
                                                    name={f.name}
                                                    id={f.name}
                                                    variant="outlined"
                                                    label={label(f)}
                                                    fullWidth
                                                    InputProps={{
                                                        endAdornment: f
                                                            .field_translations[0]
                                                            .hint_message && (
                                                            <InfoIconButton
                                                                html={
                                                                    f
                                                                        .field_translations[0]
                                                                        .hint_message
                                                                }
                                                            />
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                        )) ||
                                        (f.field_type.name === 'Number' && (
                                            <Grid
                                                key={f.id}
                                                item
                                                xs={12}
                                                md={6}
                                            >
                                                <TextInput
                                                    type="number"
                                                    name={f.name}
                                                    id={f.name}
                                                    variant="outlined"
                                                    label={label(f)}
                                                    fullWidth
                                                    InputProps={{
                                                        endAdornment: f
                                                            .field_translations[0]
                                                            .hint_message && (
                                                            <InfoIconButton
                                                                html={
                                                                    f
                                                                        .field_translations[0]
                                                                        .hint_message
                                                                }
                                                            />
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                        )) ||
                                        (f.field_type.name === 'DatePicker' &&
                                            !hidden(f, values) && (
                                                <Grid
                                                    key={f.id}
                                                    item
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <MuiPickersUtilsProvider
                                                        utils={DateFnsUtils}
                                                    >
                                                        <DatePicker
                                                            name={f.name}
                                                            id={f.name}
                                                            inputVariant="outlined"
                                                            label={label(f)}
                                                            fullWidth
                                                            InputProps={{
                                                                endAdornment: f
                                                                    .field_translations[0]
                                                                    .hint_message && (
                                                                    <InfoIconButton
                                                                        html={
                                                                            f
                                                                                .field_translations[0]
                                                                                .hint_message
                                                                        }
                                                                    />
                                                                ),
                                                            }}
                                                        ></DatePicker>
                                                    </MuiPickersUtilsProvider>
                                                </Grid>
                                            )) ||
                                        (f.field_type.name ===
                                            'DateTimePicker' && (
                                            <Grid
                                                key={f.id}
                                                item
                                                xs={12}
                                                md={6}
                                            >
                                                <MuiPickersUtilsProvider
                                                    utils={DateFnsUtils}
                                                >
                                                    <DateTimePicker
                                                        name={f.name}
                                                        id={f.name}
                                                        inputVariant="outlined"
                                                        label={label(f)}
                                                        fullWidth
                                                        InputProps={{
                                                            endAdornment: f
                                                                .field_translations[0]
                                                                .hint_message && (
                                                                <InfoIconButton
                                                                    html={
                                                                        f
                                                                            .field_translations[0]
                                                                            .hint_message
                                                                    }
                                                                />
                                                            ),
                                                        }}
                                                    ></DateTimePicker>
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                        )) ||
                                        (f.field_type.name === 'DropDown' && (
                                            <Grid
                                                key={f.id}
                                                item
                                                xs={12}
                                                md={6}
                                            >
                                                <SelectType
                                                    name={f.name}
                                                    id={f.name}
                                                    placeholder="Please select"
                                                    label={label(f)}
                                                    fullWidth
                                                    options={
                                                        parsedOptions[f.id]
                                                    }
                                                    // onChange={handleChange(
                                                    //     f.name
                                                    // )}
                                                ></SelectType>
                                            </Grid>
                                        )) ||
                                        (f.field_type.name === 'Toggle' && (
                                            <Grid
                                                key={f.id}
                                                item
                                                xs={12}
                                                md={6}
                                            >
                                                <ToggleSwitch
                                                    name={f.name}
                                                    id={f.name}
                                                    label={label(f)}
                                                    hintmessage={
                                                        f.field_translations[0]
                                                            .hint_message
                                                    }
                                                ></ToggleSwitch>
                                            </Grid>
                                        )) ||
                                        (f.field_type.name === 'Radio' && (
                                            <Grid
                                                key={f.id}
                                                item
                                                xs={12}
                                                md={6}
                                            >
                                                <RadioGroup
                                                    name={f.name}
                                                    errors={errors}
                                                    id={f.name}
                                                    label={label(f)}
                                                    options={
                                                        parsedOptions[f.id]
                                                    }
                                                ></RadioGroup>
                                            </Grid>
                                        )) ||
                                        (f.field_type.name === 'Checkbox' && (
                                            <Grid item xs={12} md={6}>
                                                <CheckboxGroup
                                                    values={values}
                                                    errors={errors}
                                                    name={f.name}
                                                    id={f.name}
                                                    label={label(f)}
                                                    options={
                                                        parsedOptions[f.id]
                                                    }
                                                ></CheckboxGroup>
                                            </Grid>
                                        )) ||
                                        (f.field_type.name === 'WYSIWYG' && (
                                            <Grid key={f.id} item xs={12}>
                                                <FroalaWYSIWYG
                                                    tag="textarea"
                                                    variant="outlined"
                                                    label={label(f)}
                                                    name={f.name}
                                                    id={f.name}
                                                ></FroalaWYSIWYG>
                                            </Grid>
                                        ))
                                )}
                            <Grid item xs={12} md={6}>
                                <Button
                                    fullWidth
                                    color="secondary"
                                    disabled={loading}
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
                                    disabled={loading}
                                    variant="outlined"
                                    startIcon={
                                        isSubmitting && (
                                            <CircularProgress size={14} />
                                        )
                                    }
                                >
                                    {t('NextPage')}
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    );
};
export default DynamicForm;

// //todo remove after testing
// fields = [
//     {
//         fieldId: '23456789345678',
//         is_hidden: {
//             fields_operator: 'OR', //Default: 'AND'
//             fields: [
//                 {
//                     fieldId: '23456789345678',
//                     conditionValue: true,
//                 },
//                 {
//                     fieldId: '23456786543345689345678',
//                     conditionValue: 'München',
//                 },
//             ],
//         },
//         // is_hidden: true,
//         contains_value: {
//             values: ['...', true, false],
//             fields_operator: 'OR', //Default: 'AND'
//             fields: [
//                 {
//                     fieldId: '23456789345678',
//                     conditionValue: true,
//                 },
//                 {
//                     fieldId: '23456786543345689345678',
//                     conditionValue: 'München',
//                 },
//             ],
//         },
//         has_value: {
//             value: 'freitext',
//             fields_operator: 'OR', //Default: 'AND'
//             fields: [
//                 {
//                     fieldId: '23456789345678',
//                     conditionValue: true,
//                 },
//                 {
//                     fieldId: '23456786543345689345678',
//                     conditionValue: 'München',
//                 },
//             ],
//         },
//         is_required: [
//             {
//                 fields_operator: 'OR', //Default: 'AND'
//                 fields: [
//                     {
//                         fieldId: '23456789345678',
//                         conditionValue: true,
//                     },
//                     {
//                         fieldId: '23456786543345689345678',
//                         conditionValue: 'München',
//                     },
//                 ],
//             },
//         ],
//         must_match: 'regex...',
//         is_email: true,
//         is_uri: true,
//         is_loon: true,
//         min_lenth: 4,
//         max_lenth: 4,
//         selections_min: 1,
//         selections_max: 5,
//         is_phonenumber: true,
//     },
// ];
