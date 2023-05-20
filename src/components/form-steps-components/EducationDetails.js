import { Grid } from '@mui/material';
import React from 'react';
import Textfield from '../form/text-field';
import DatePickers from '../form/date-picker';
import CheckboxWrapper from '../form/check-box';
import CustomSelect from '../form/select';

const CollegeDegree = {
    BACHELORS: "Bachelor's Degree",
    MASTERS: "Master's Degree",
    DOCTORATE: "Doctorate Degree",
    ASSOCIATE: "Associate Degree",
    DIPLOMA: "Diploma",
};


const EducationDetails = () => {
    return (
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <Textfield name={'instituitionName'} label={'Instituition name'} />
            </Grid>

            <Grid item xs={4}>
                <Textfield name={'instituitionLocationStreet'} label={'Street/Zone'} />
            </Grid>

            <Grid item xs={4}>
                <Textfield name={'instituitionLocationCity'} label={'City'} />
            </Grid>

            <Grid item xs={4}>
                <Textfield name={'instituitionLocationCountry'} label={'Country'} />
            </Grid>

            <Grid item xs={12} boxSizing={'border-box'}>
                <CustomSelect name={'degree'} label={'Degree'} options={CollegeDegree} />
            </Grid>

            <Grid item xs={6}>
                <DatePickers name={'graduationStartDate'} label={'Start date'} />
            </Grid>

            <Grid item xs={6}>
                <DatePickers name={'graduationEndDate'} label={'Graduation date'} />
            </Grid>

            <Grid item xs={12}>
                <CheckboxWrapper
                    name="stillStudingHere"
                    // legend=""
                    label="I currently study here."
                />
            </Grid>

        </Grid>

    )
}

export default EducationDetails;