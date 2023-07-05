import React from 'react';
import { Button, Grid } from '@mui/material';
import Textfield from '../form/text-field';
import DatePickers from '../form/date-picker';
import CustomSelect from '../form/select';

const Gender = {
    MALE: "Male",
    FEMALE: "Female",
};

const PersonalInformation = () => {


    return (

        <Grid container spacing={2} my={{xs:1, md:2}} >

            <Grid item xs={12}>
                <Textfield name={'fullName'} label={'Full Name'} />
            </Grid>

            <Grid item xs={6} md={4}>
                <DatePickers name={'dateOfBirth'} label={'Date of Birth'} />
            </Grid>

            <Grid item xs={6} md={4} boxSizing={'border-box'}>
                <CustomSelect name={'gender'} label={'Gender'} options={Gender} />
            </Grid>

            <Grid item xs={6} md={4}>
                <Textfield name={'country'} label={'Country'} />
            </Grid>

            <Grid item xs={6} md={4} boxSizing={'border-box'}>
                <Textfield name={'nationality'} label={'Nationality'} />
            </Grid>

            <Grid item xs={6} md={4}>
                <Textfield name={'street'} label={'Street'} />
            </Grid>

            <Grid item xs={6} md={4}>
                <Textfield name={'city'} label={'City'} />
            </Grid>

            <Grid item xs={6} md={3}>
                <Textfield name={'zipCode'} label={'Zip Code'} />
            </Grid>

            <Grid item xs={6} md={3}>
                <Textfield name={'phone'} label={'Phone'} />
            </Grid>

            <Grid item xs={12} md={6}>
                <Textfield name={'email'} label={'Email'} />
            </Grid>

            {/* <Grid item xs={12} my={'2.4rem'} textAlign={'end'}>
                <Button sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '4px', ":hover": { backgroundColor: '#123', color: '#fff' } }} variant="contained" size='small' type="submit">Register</Button>
            </Grid> */}

        </Grid>

    )

}

export default PersonalInformation;