import { Grid } from '@mui/material';
import React from 'react';
import Textfield from '../form/text-field';
import DatePickers from '../form/date-picker';
import CheckboxWrapper from '../form/check-box';

const Experience = () => {
    return (

        <Grid container spacing={2}>

            <Grid item xs={12}>
                <Textfield name={'jobTitle'} label={'Job Title'} />
            </Grid>

            <Grid item xs={12}>
                <Textfield name={'employer'} label={'Employer'} />
            </Grid>

            <Grid item xs={6}>
                <DatePickers name={'jobStartDate'} label={'Start Date'} />
            </Grid>

            <Grid item xs={6}>
                <DatePickers name={'jobEndDate'} label={'End Date'} />
            </Grid>

            <Grid item xs={12}>
                <CheckboxWrapper
                    name="stillWorkingHere"
                    // legend=""
                    label="I currently work here."
                />
            </Grid>

            <Grid item xs={4}>
                <Textfield name={'jobLocationCity'} label={'City'} />
            </Grid>

            <Grid item xs={4}>
                <Textfield name={'jobLocationStreet'} label={'Street/Zone'} />
            </Grid>

            <Grid item xs={4}>
                <Textfield name={'jobLocationCountry'} label={'Country'} />
            </Grid>
        </Grid>

    )
}

export default Experience;