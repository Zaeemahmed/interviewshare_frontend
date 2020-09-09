import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required()
        .min(2, 'Must have at least 2 characters'),
    mnemonic: Yup.string()
        .min(1, 'Enter at least 1 character')
        .max(20, 'Please enter no more than maxixum 20 characters')
        .required('Please enter an event mnemonic')
        .matches(/^[a-zA-Z0-9]+$/, {
            message:
                'Please enter only regular characters and/or numbers. No special characters are allowed',
            excludeEmptyString: true,
        })
        .trim(),
});

export default ValidationSchema;
