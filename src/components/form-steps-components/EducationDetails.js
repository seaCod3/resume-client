import { Button, Grid } from '@mui/material';
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
import { useEffect } from 'react';
import { handleAddNewItem, handleDelete, handleGetItemtoEdit, handleSaveEditedItem } from '../libs/form-operations-handlers ';

const CollegeDegree = {
    Bachelor: "Bachelor's Degree",
    Master: "Master's Degree",
    Doctorate: "Doctorate Degree",
    Associate: "Associate Degree",
    Diploma: "Diploma",
};

const EducationDetails = () => {

    const [educations, setEducations] = useState([]);
    const formik = useFormikContext();
    const useEducation = useEducationStore();
    const useReseter = useFieldReseter();
    const storedValuePointer = 'educations';
    const educationDetailsFields = ['instituitionName', 'instituitionLocationStreet', 'instituitionLocationCity', 'instituitionLocationCountry', 'degree', 'graduationStartDate', 'graduationEndDate', 'stillStudingHere', 'course'];


    useEffect(() => {

        const savedEducations = JSON.parse(localStorage.getItem(storedValuePointer));
        console.log(savedEducations)

        if (savedEducations) {
            setEducations([...savedEducations]);
        }

    }, []);

    const handleBuildEducationToSave = () => {

        const educationDetails = {
            instituitionName: formik.values.instituitionName,
            instituitionLocationStreet: formik.values.instituitionLocationStreet,
            instituitionLocationCity: formik.values.instituitionLocationCity,
            instituitionLocationCountry: formik.values.instituitionLocationCountry,
            degree: formik.values.degree,
            graduationStartDate: formik.values.graduationStartDate,
            graduationEndDate: formik.values.graduationEndDate,
            stillStudingHere: formik.values.stillStudingHere,
            course: formik.values.course
        };

        return educationDetails;
    }


    return (

        <Grid container spacing={2} sx={{ overflowY: 'auto', maxHeight: '550px', paddingRight: '20px' }} >

            {
                educations.length > 0 && (

                    <Grid item xs={12}>
                        <ListItems
                            options={educations}
                            setOptions={setEducations}
                            customHook={useEducation}
                            handleEdit={handleGetItemtoEdit}
                            handleDelete={handleDelete}
                            fields={educationDetailsFields}
                            storedValuePointer={storedValuePointer}
                        />
                    </Grid>

                )
            }

            <Grid item xs={12}>
                <Textfield name={'instituitionName'} label={'Instituition name'} />
            </Grid>

            <Grid item xs={6} boxSizing={'border-box'}>
                <Textfield name={'course'} label={'What did you studied?'} />
            </Grid>

            <Grid item xs={6} boxSizing={'border-box'}>
                <CustomSelect name={'degree'} label={'Degree'} options={CollegeDegree} />
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

            <Grid item xs={4}>
                <DatePickers name={'graduationStartDate'} label={'Start date'} />
            </Grid>

            <Grid item xs={4}>
                <DatePickers name={'graduationEndDate'} label={'Graduation date'} />
            </Grid>

            <Grid item container alignItems={'end'} xs={4}>
                <Grid item xs={12}>
                    <CheckboxWrapper
                        name="stillStudingHere"
                        // legend=""
                        label="I currently study here"
                    />
                </Grid>
            </Grid>
            <Grid item textAlign={'center'} mt={2} xs={12}>

                {
                    useEducation.show ?
                        (
                            <Button
                                // endIcon={<HiOutlineChevronRight size={20} />}
                                variant='outlined'
                                onClick={(e) => {
                                    handleSaveEditedItem(setEducations, useReseter, useEducation.index, storedValuePointer, educationDetailsFields, handleBuildEducationToSave);
                                    useEducation.onClose()
                                }}
                                className='btn-secondary'
                            >
                                Save
                            </Button>
                        )
                        :
                        (
                            <Button
                                size="medium"
                                variant="outlined"
                                // startIcon={<HiPlus color='#023642' size={25} />}
                                sx={{ width: '150px', height: '40px', }}
                                color="inherit"
                                onClick={() => handleAddNewItem(educations, setEducations, useReseter, storedValuePointer, educationDetailsFields, handleBuildEducationToSave)}

                            >
                                ADD
                            </Button>
                        )
                }

            </Grid>
        </Grid>

    )
}

export default EducationDetails;