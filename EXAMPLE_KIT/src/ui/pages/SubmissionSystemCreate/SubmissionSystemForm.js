import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { Grid, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { yupResolver } from '@hookform/resolvers';
import FroalaWYSIWYG from '../../components/ReactHookFormTypes/FroalaWYSIWYG';
import TextInput from '../../components/ReactHookFormTypes/TextInput';
import ToggleSwitch from '../../components/ReactHookFormTypes/ToggleSwitch';
import DatePicker from '../../components/ReactHookFormTypes/DatePicker';
import ValidationSchema from '../../components/ValidationSchema/EventSchema';
import { DefaultCatch } from '../../components/Base/Form';
import SystemTypeDropDown from './SystemTypeDropDown';
import EventDropDown from './EventDropDown';
import ThemeDropDown from './ThemeDropDown';
import UploadInput from './UploadInput';
import LanguageCheckboxGroup from './LanguageCheckboxGroup';
import { gqlInsertSubmissionSystem } from './SubmissionSystemMutation';

export default function SubmissionSystemForm({
    defaultValues,
    loading,
    eventId,
}) {
    const history = useHistory();
    const { t } = useTranslation();
    const [fileTerms, fileTermsSet] = useState(null);
    const [fileImprint, fileImprintSet] = useState(null);
    const [filePrivacyPolicy, filePrivacyPolicySet] = useState(null);

    const [
        insertSubmissionSystem,
        // { loading: loadingUploadFile },
    ] = useMutation(gqlInsertSubmissionSystem);

    const onError = (error, e) => {
        console.log('### EventForm ERROR', error, e);
    };

    const onSubmit = values => {
        setTimeout(() => {
            insertSubmissionSystem({
                variables: {
                    id: eventId,
                    ...{ ...values, is_closed: true },
                    fileTerms: fileTerms,
                    fileImprint: fileImprint,
                    filePrivacyPolicy: filePrivacyPolicy,
                },
            })
                .then(() => {
                    //todo go to next tab?
                    // history.push('/');
                    // toast.success(
                    //     t('EventUpdateSuccessful', { name: values.name })
                    // );
                })
                .catch(DefaultCatch);
        }, 500);
    };

    const {
        handleSubmit,
        errors,
        control,
        formState,
        values,
        register,
    } = useForm({
        resolver: yupResolver(ValidationSchema),
        defaultValues,
    });
    const { isSubmitted } = formState;

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            disabled={loading}
            aria-busy={loading.toString()}
            noValidate
        >
            <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextInput
                        name="name"
                        id="name"
                        label={t('SystemName')}
                        errors={errors}
                        control={control}
                    ></TextInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput
                        name="mnemonic"
                        id="mnemonic"
                        label={t('SystemMnemonic')}
                        errors={errors}
                        control={control}
                    ></TextInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePicker
                        name="start_time"
                        id="start_time"
                        label={t('StartTime')}
                        errors={errors}
                        control={control}
                    ></DatePicker>
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePicker
                        name="end_time"
                        id="end_time"
                        label={t('EndTime')}
                        errors={errors}
                        control={control}
                    ></DatePicker>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SystemTypeDropDown
                        errors={errors}
                        control={control}
                    ></SystemTypeDropDown>
                </Grid>
                <Grid item xs={12} md={6}>
                    <EventDropDown
                        errors={errors}
                        control={control}
                    ></EventDropDown>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LanguageCheckboxGroup
                        control={control}
                        register={register}
                        errors={errors}
                        values={values}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ThemeDropDown
                        errors={errors}
                        control={control}
                    ></ThemeDropDown>
                </Grid>
                <Grid item xs={12} md={6}>
                    <UploadInput
                        label={t('Terms')}
                        onChange={file => fileTermsSet(file)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <UploadInput
                        label={t('Imprint')}
                        onChange={file => fileImprintSet(file)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <UploadInput
                        label={t('Privacy Policy')}
                        onChange={file => filePrivacyPolicySet(file)}
                    />
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
                        {t('Cancel')}
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
                            isSubmitted && <CircularProgress size={14} />
                        }
                    >
                        {t('Save')}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
