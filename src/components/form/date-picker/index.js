import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useField } from "formik";
import TextField from '@mui/material/TextField';


const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#023642',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#023642',

        },
        '&:hover fieldset': {
            borderColor: '#023642',
            borderWidth: '2px',

        },
        '&.Mui-focused fieldset': {
            borderColor: '#023642',
            borderStyle: 'solid',
            borderWidth: '1px',
        },
    },
});


export default function DatePickers({ name, ...otherProps }) {

    const [field, meta] = useField(name);

    const datePickerConfig = {

        ...field,
        ...otherProps,
        type: 'date',
        fullWidth: true,
        variant: 'outlined',
        label: false,

    }

    if (meta && meta.touched && meta.error) {
        datePickerConfig.error = true;
        datePickerConfig.helperText = meta.error;
    }


    return (
        <>
            <label  style={{marginBottom: '.4rem'}} >{otherProps.label}</label>
            <CustomTextField {...datePickerConfig} />
        </>
    );
}