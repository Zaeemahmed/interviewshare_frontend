import * as Yup from 'yup';

export const validationSchema = Yup.object({
    jobTitle: Yup.string()
        .required('Job title is required')
        .min(5, 'Job title with atleast 5 character'),
    location: Yup.string()
        .required('Location is required')
        .min(5, 'Location with atleast 5 character is required'),
    date: Yup.date().optional(),
});

