import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { FieldArray } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

const CheckboxGroup = ({
    options,
    values,
    errors,
    useLabelAsValue = true,
    ...props
}) => {
    return (
        <FieldArray
            name={props.name}
            render={arrayHelpers => (
                <FormGroup>
                    {options.map(option => {
                        let value = useLabelAsValue
                            ? option.label
                            : option.value;
                        return (
                            <FormControlLabel
                                key={option.label}
                                control={
                                    <Checkbox
                                        name={props.name}
                                        type="checkbox"
                                        value={value}
                                        checked={
                                            values[props.name] &&
                                            values[props.name].includes(value)
                                        }
                                        onChange={e => {
                                            if (e.target.checked)
                                                arrayHelpers.push(value);
                                            else {
                                                const idx =
                                                    values[props.name] &&
                                                    values[props.name].indexOf(
                                                        value
                                                    );
                                                arrayHelpers.remove(idx);
                                            }
                                        }}
                                    />
                                }
                                label={option.label}
                            />
                        );
                    })}
                    <FormHelperText>{errors[props.name]}</FormHelperText>
                </FormGroup>
            )}
        />
    );
};

export default CheckboxGroup;
