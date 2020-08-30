import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FroalaWYSIWYG from '../../components/FormikTypes/FroalaWYSIWYG';
import TextInput from '../../components/FormikTypes/TextInput';
import ToggleSwitch from '../../components/FormikTypes/ToggleSwitch';
import DateTimePicker from '../../components/FormikTypes/DateTimePicker';
import SelectType from '../../components/FormikTypes/Select';
import ValidationSchema from '../../components/ValidationSchema/EventSchema';

const EventForm = ({ initialValues, loading, submitButtonLabel, onSubmit }) => {
    const history = useHistory();
    const { t } = useTranslation();

    const options = [
        { id: 1, value: 'English', label: 'English' },
        { id: 2, value: 'German', label: 'German' },
    ];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form disabled={loading} aria-busy={loading}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    name="name"
                                    id="name"
                                    variant="outlined"
                                    label={t('EventName')}
                                    fullWidth
                                ></TextInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    name="mnemonic"
                                    id="mnemonic"
                                    variant="outlined"
                                    label={t('EventMnemonic')}
                                    fullWidth
                                ></TextInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    name="location"
                                    id="location"
                                    variant="outlined"
                                    label={t('Location')}
                                    fullWidth
                                ></TextInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    name="city"
                                    id="city"
                                    variant="outlined"
                                    label={t('City')}
                                    fullWidth
                                ></TextInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateTimePicker
                                    name="start_time"
                                    id="start_time"
                                    inputVariant="outlined"
                                    label={t('StartTime')}
                                    fullWidth
                                ></DateTimePicker>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateTimePicker
                                    name="end_time"
                                    id="end_time"
                                    inputVariant="outlined"
                                    label={t('EndTime')}
                                    fullWidth
                                ></DateTimePicker>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SelectType
                                    name="language"
                                    id="language"
                                    placeholder={t('LanguagePlaceholder')}
                                    label={t('Language')}
                                    fullWidth
                                    options={options}
                                ></SelectType>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ToggleSwitch
                                    name="is_closed"
                                    id="is_closed"
                                    label={t('Closed')}
                                ></ToggleSwitch>
                            </Grid>
                            <Grid item xs={12}>
                                <FroalaWYSIWYG
                                    name="description"
                                    id="description"
                                    tag="textarea"
                                    variant="outlined"
                                    label={t('Description')}
                                ></FroalaWYSIWYG>
                            </Grid>
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
                                    Back
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
                                    {submitButtonLabel}
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </MuiPickersUtilsProvider>
    );
};
export default EventForm;
