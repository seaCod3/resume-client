import React from "react";
import { TextField, MenuItem, Typography, Grid } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { styled } from '@mui/material/styles';



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


const CustomSelect = ({ name, options, setOption, ...otherProps }) => {

    const { setFieldValue } = useFormikContext();
    const [field, metaData] = useField(name);



    const handleChange = e => {

        const { value } = e.target;
        setFieldValue(name, value);
        if (setOption) setOption(value)

    }

    const selectConfig = {
        ...otherProps,
        ...field,
        select: true,
        variant: otherProps.variant || 'outlined',
        fullWidth: true,
        size: 'small',
        label: false,
        onChange: handleChange,
    };

    if (metaData && metaData.touched && metaData.error) {
        selectConfig.error = true;
        selectConfig.helperText = metaData.error;
    }

    return (
        <Grid container >

            <Grid item xs={12}>
                <label style={{marginBottom: '.4rem'}} >{otherProps.label}</label>
            </Grid>

            <Grid item container xs={12} spacing={2}>

                <Grid item xs={otherProps.setListinOptions ? 11 : 12}>

                    <CustomTextField {...selectConfig}>

                        {

                            Array.isArray(options) ?
                                options.map((option) => <MenuItem key={option.id} value={option.id}>{option.firstName && option.lastName ? `${option.firstName} ${option.lastName}` : option.name}</MenuItem>) : Object.keys(options).map((item, index) => {

                                    return (

                                        <MenuItem key={index} value={item}>
                                            {options[item]}
                                        </MenuItem>

                                    )
                                })

                        }

                    </CustomTextField>

                </Grid>

            </Grid>

        </Grid>
    )


}

export default CustomSelect;
