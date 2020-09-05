import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(5, 'Name with atleast 5 character'),
    email: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
    date: Yup.date().optional(),
    message: Yup.string()
        .required('message is required')
        .min(10, 'Enter a message with atleast 10 characters'),
});
