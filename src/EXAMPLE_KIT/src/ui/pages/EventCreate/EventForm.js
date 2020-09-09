import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { yupResolver } from '@hookform/resolvers';
import FroalaWYSIWYG from '../../components/ReactHookFormTypes/FroalaWYSIWYG';
import TextInput from '../../components/ReactHookFormTypes/TextInput';
import ToggleSwitch from '../../components/ReactHookFormTypes/ToggleSwitch';
import DateTimePicker from '../../components/ReactHookFormTypes/DateTimePicker';
import DropDown from '../../components/ReactHookFormTypes/DropDown';
import ValidationSchema from '../../components/ValidationSchema/EventSchema';

const EventForm = ({ initialValues, loading, submitButtonLabel, onSubmit }) => {
    const history = useHistory();
    const { t } = useTranslation();

    const options = [
        { id: 1, value: 'English', label: 'English' },
        { id: 2, value: 'German', label: 'German' },
    ];

    const onError = (error, e) => {
        console.log('### EventForm ERROR', error, e);
    };

    const { handleSubmit, errors, control } = useForm({
        resolver: yupResolver(ValidationSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            disabled={loading}
            aria-busy={loading}
            noValidate
        >
            <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextInput
                        name="name"
                        id="name"
                        label={t('EventName')}
                        errors={errors}
                        control={control}
                    ></TextInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput
                        name="mnemonic"
                        id="mnemonic"
                        label={t('EventMnemonic')}
                        errors={errors}
                        control={control}
                    ></TextInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput
                        name="location"
                        id="location"
                        label={t('Location')}
                        errors={errors}
                        control={control}
                    ></TextInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput
                        name="city"
                        label={t('City')}
                        errors={errors}
                        control={control}
                    ></TextInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <DateTimePicker
                        name="start_time"
                        id="start_time"
                        label={t('StartTime')}
                        errors={errors}
                        control={control}
                    ></DateTimePicker>
                </Grid>
                <Grid item xs={12} md={6}>
                    <DateTimePicker
                        name="end_time"
                        id="end_time"
                        label={t('EndTime')}
                        errors={errors}
                        control={control}
                    ></DateTimePicker>
                </Grid>
                <Grid item xs={12} md={6}>
                    <DropDown
                        name="language"
                        id="language"
                        placeholder={t('LanguagePlaceholder')}
                        label={t('Language')}
                        options={options}
                        errors={errors}
                        control={control}
                    ></DropDown>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ToggleSwitch
                        name="is_closed"
                        id="is_closed"
                        label={t('Closed')}
                        errors={errors}
                        control={control}
                    ></ToggleSwitch>
                </Grid>
                <Grid item xs={12}>
                    <FroalaWYSIWYG
                        name="description"
                        id="description"
                        label={t('Description')}
                        errors={errors}
                        control={control}
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
                        // startIcon={
                        //     isSubmitting && <CircularProgress size={14} />
                        // }
                    >
                        {submitButtonLabel}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
export default EventForm;
