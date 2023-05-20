import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useField, useFormikContext } from "formik";
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



export default function TextArea({ name, skills, setSkills, ...otherProps }) {

    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();
    const [previousLength, setPreviousLength] = React.useState(0);

    // let previousLength = 0;

    const handleInput = (e) => {
        const bullet = "\u2022" + "   ";
        const newLength = e.target.value.length;
        const characterCode = e.target.value.substr(-1).charCodeAt(0);

        if (newLength > previousLength) {
            if (characterCode === 10) {
                e.target.value = `${e.target.value}${bullet} `;
            } else if (newLength === 1) {
                e.target.value = `${bullet} ${e.target.value}`;
            }
        }

        // setSkills([...skills, e.target.value]);


        // previousLength = newLength;
        setPreviousLength((prev) => newLength);
        // console.log(e.target.value, 'one strocke');
    }

    const splitStringWithBulletPoints = (inputString) => {
        const substrings = inputString.split('•    ')
            .filter((substring) => substring.trim() !== '')
            .map((substring) => substring.trim());
        return substrings;
    };


    const handleBlur = (event) => {
        const value = event.target.value;
        setSkills(splitStringWithBulletPoints(value));
        const splitedValues = splitStringWithBulletPoints(value)
        // setFieldValue(name, splitStringWithBulletPoints(value));
        // console.log(value);
        // console.log(splitStringWithBulletPoints(value));
    }


    const textFieldConfig = {

        ...field,
        ...otherProps,
        fullWidth: true,
        // size: 'small',
        multiline: true,
        rows: 10,
        variant: otherProps.variant || 'outlined',
        label: false,
        onChange: handleInput,
        // onKeyUp: handleKeyUp,
        onBlur: handleBlur

    }

    if (meta && meta.touched && meta.error) {
        textFieldConfig.error = true;
        textFieldConfig.helperText = meta.error;
    }


    return (
        <>
            <label style={{ marginBottom: '.4rem' }} >{otherProps.label}</label>
            <CustomTextField {...textFieldConfig} />
        </>
    );
}