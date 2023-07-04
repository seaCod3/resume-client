import { Button, Grid } from '@mui/material';
import { HiPlus } from "react-icons/hi2";
import CheckboxWrapper from '../form/check-box';
import DatePickers from '../form/date-picker';
import Textfield from '../form/text-field';
import { useState } from 'react';
import useFieldReseter from '../../hooks/useFieldReseter';
import { useFormikContext } from 'formik';
import ListItems from './sub-components/ListItems';
import { useEffect } from 'react';
import useJobExperience from '../../hooks/useExperienceStore';
import { handleAddNewItem, handleDelete, handleGetItemtoEdit, handleSaveEditedItem } from '../libs/form-operations-handlers ';


const Experience = () => {

    const experienceFields = ['jobTitle', 'employer', 'jobLocationCity', 'jobLocationStreet', 'jobLocationCountry', 'jobStartDate', 'jobEndDate', 'stillWorkingHere'];
    const [experiences, setExperiences] = useState([]);
    const formik = useFormikContext();
    const useReseter = useFieldReseter();
    const useExperience = useJobExperience();
    const storedValuePointer = 'experiences';

    useEffect(() => {

        const savedExperiences = JSON.parse(localStorage.getItem(storedValuePointer));

        if (savedExperiences) {
            setExperiences(savedExperiences);
        }

    }, []);

    const handleBuildExperienceToSave = () => {

        return {

            jobTitle: formik.values.jobTitle,
            employer: formik.values.employer,
            jobLocationCity: formik.values.jobLocationCity,
            jobLocationStreet: formik.values.jobLocationStreet,
            jobLocationCountry: formik.values.jobLocationCountry,
            jobStartDate: formik.values.jobStartDate,
            jobEndDate: formik.values.jobEndDate,
            stillWorkingHere: formik.values.stillWorkingHere,
        }

    }

    return (

        <Grid container spacing={2} sx={{ overflowY: 'auto', maxHeight: '600px', paddingRight: { xs: 0, md: '20px' } }} >

            {
                experiences.length > 0 && (

                    <Grid item xs={12}>
                        <ListItems
                            options={experiences}
                            setOptions={setExperiences}
                            customHook={useExperience}
                            handleEdit={handleGetItemtoEdit}
                            handleDelete={handleDelete}
                            fields={experienceFields}
                            storedValuePointer={storedValuePointer}
                        />
                    </Grid>

                )
            }

            <Grid item xs={12}>
                <Textfield name={'jobTitle'} label={'Job Title'} />
            </Grid>

            <Grid item xs={12}>
                <Textfield name={'employer'} label={'Employer'} />
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

            <Grid item xs={4}>
                <DatePickers name={'jobStartDate'} label={'Start Date'} />
            </Grid>

            <Grid item xs={4}>
                <DatePickers name={'jobEndDate'} label={'End Date'} />
            </Grid>

            <Grid item container alignItems={'end'} xs={4}>
                <Grid item xs={12}>
                    <CheckboxWrapper
                        name="stillWorkingHere"
                        // legend=""
                        label="I currently work here."
                    />
                </Grid>
            </Grid>
            <Grid item textAlign={'center'} mt={2} xs={12}>

                {
                    useExperience.show ?
                        (
                            <Button
                                // endIcon={<HiOutlineChevronRight size={20} />}
                                variant='outlined'
                                onClick={(e) => {
                                    handleSaveEditedItem(setExperiences, useReseter, useExperience.index, storedValuePointer, experienceFields, handleBuildExperienceToSave);
                                    useExperience.onClose()
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
                                onClick={() => handleAddNewItem(experiences, setExperiences, useReseter, storedValuePointer, experienceFields, handleBuildExperienceToSave)}

                            >
                                ADD
                            </Button>
                        )
                }

            </Grid>

        </Grid >

    )
}

export default Experience;