import React from 'react';
import { Controller } from 'react-hook-form';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxGroupComponent = ({ useLabelAsValue = true, ...props }) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.label}</FormLabel>
            <FormGroup>
                {props.options.map((option, index) => {
                    let value = useLabelAsValue ? option.label : option.value;
                    return (
                        <FormControlLabel
                            key={option.label}
                            control={
                                <Checkbox
                                    name={props.name[index]}
                                    type="checkbox"
                                    value={value}
                                    onChange={props.onChange}
                                />
                            }
                            label={option.label}
                        />
                    );
                })}
                <FormHelperText>{props.helpertext}</FormHelperText>
            </FormGroup>
        </FormControl>
    );
};

const CheckboxGroup = ({ ...props }) => {
    return (
        <Controller
            as={CheckboxGroupComponent}
            error={props.errors[props.name] ? true : undefined}
            helpertext={
                props.errors[props.name] && props.errors[props.name].message
            }
            defaultValue=""
            {...props}
        />
    );
};
export default CheckboxGroup;
