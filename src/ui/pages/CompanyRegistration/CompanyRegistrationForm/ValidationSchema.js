import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('company name is required')
        .min(3, 'company name with at least 3 character'),
    address: Yup.string()
        .required('address is required')
        .min(5, 'address with atleast 10 character is required'),
    vatNumber: Yup.string().optional(),
    countryAndCity: Yup.string().required('country and city are required'),
});
