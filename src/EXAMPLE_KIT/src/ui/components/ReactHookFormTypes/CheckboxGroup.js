import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export const FormCheckBox = ({ name, value, register, defaultValue }) => {
    return (
        <FormControlLabel
            control={<Checkbox defaultChecked={defaultValue} />}
            name={name}
            inputRef={register}
            value={value}
            label={value}
        />
    );
};

const CheckboxGroup = ({ defaultValues, useLabelAsValue = true, ...props }) => {
    defaultValues = defaultValues.split(',');

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.label}</FormLabel>
            <FormGroup>
                {props.options.map((option, i) => {
                    let value = useLabelAsValue ? option.label : option.value;
                    return (
                        <FormCheckBox
                            key={value}
                            value={value}
                            name={`${props.name}[${i}]`}
                            defaultValue={defaultValues.indexOf(value) !== -1}
                            {...props}
                        />
                    );
                })}
                <FormHelperText>
                    {props.errors[props.name] &&
                        props.errors[props.name].message}
                </FormHelperText>
            </FormGroup>
        </FormControl>
    );
};
export default CheckboxGroup;
