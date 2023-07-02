import { Grid } from '@mui/material';
import React from 'react';
import Textfield from '../form/text-field';
import DatePickers from '../form/date-picker';
import CheckboxWrapper from '../form/check-box';
import CustomSelect from '../form/select';
import { useFormikContext } from 'formik';
import useEducationStore from '../../hooks/useEducationStore';
import { useState } from 'react';
import ListItems from './sub-components/ListItems';
import useFieldReseter from '../../hooks/useFieldReseter';

const CollegeDegree = {
    BACHELORS: "Bachelor's Degree",
    MASTERS: "Master's Degree",
    DOCTORATE: "Doctorate Degree",
    ASSOCIATE: "Associate Degree",
    DIPLOMA: "Diploma",
};


const EducationDetails = () => {

    const [educations, setEducations] = useState([]);
    const formik = useFormikContext();
    const useEducation = useEducationStore();


    useEffect(() => {

        const savedEducations = JSON.parse(localStorage.getItem('educations'));

        if (savedEducations) {
            setExperiences(savedEducations);
        }

    }, []);


    return (

        <Grid container spacing={2} sx={{ overflowY: 'auto', maxHeight: '550px', paddingRight: '20px' }} >

            {
                educations.length > 0 && (

                    <Grid item xs={12}>
                        <ListItems
                            options={educations}
                            setOptions={setEducations}
                            customHook={useEducation}
                        // handleEdit={handleEdit}
                        // handleDelete={handleDelete}
                        // setExperiences={setExperiences}
                        />
                    </Grid>

                )
            }

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