import React from 'react';
import { Field, useField } from 'formik';
import FroalaEditorComponent from 'react-froala-wysiwyg';

const FroalaWYSIWYG = ({ ...props }) => {
    // eslint-disable-next-line
    const [field, meta, helpers] = useField(props);
    const { setValue } = helpers;

    const config = {
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: true,
        charCounterMax: 50,
        saveInterval: 5000,
        quickInsertEnabled: true,
    };

    return (
        <Field
            component={FroalaEditorComponent}
            {...props}
            model={field.value}
            config={config}
            onModelChange={setValue}
            margin="normal"
        />
    );
};

export default FroalaWYSIWYG;
