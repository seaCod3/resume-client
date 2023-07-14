import { useField, useFormikContext } from 'formik';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';


const CheckboxWrapper = ({
    name,
    label,
    legend,
    ...otherProps
}) => {

    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = e => {
        const { checked } = e.target;
        setFieldValue(name, checked);
    };

    const checkboxConfig = {
        ...field,
        size: 'small',
        onChange: handleChange
    };

    const formControlConfig = {};
    if (meta && meta.touched && meta.error) {
        formControlConfig.error = true;
    }

    return (
        <FormControl {...formControlConfig}>
            {/* <FormLabel component="legend">{legend}</FormLabel> */}
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox sx={{
                        color: '#023642', '&.Mui-checked': { color: '#023642', }, '& .MuiIconButton-root': {
                            border: '1px solid',
                        },
                    }} {...checkboxConfig} />}
                    label={label}
                />
            </FormGroup>
        </FormControl>
    );
};

export default CheckboxWrapper;