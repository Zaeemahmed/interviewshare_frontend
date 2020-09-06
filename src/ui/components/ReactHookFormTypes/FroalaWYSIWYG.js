import React from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { Controller } from 'react-hook-form';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

const FroalaWYSIWYGComponent = ({ ...props }) => {
    const config = {
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: true,
        charCounterMax: 50,
        saveInterval: 5000,
        quickInsertEnabled: true,
    };

    return (
        <FroalaEditorComponent
            model={props.value}
            onModelChange={props.onChange}
            config={config}
            {...props}
        />
    );
};

const FroalaWYSIWYG = ({ ...props }) => {
    return (
        <Controller
            as={FroalaWYSIWYGComponent}
            tag="textarea"
            variant="outlined"
            defaultValue=""
            error={props.errors[props.name] ? true : undefined}
            helpertext={
                props.errors[props.name] && props.errors[props.name].message
            }
            {...props}
        />
    );
};

export default FroalaWYSIWYG;
