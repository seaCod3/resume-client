import { Button, Grid } from '@mui/material';
import React from 'react';
import Textfield from '../form/text-field';
import CustomSelect from '../form/select';
import { HiPlus } from "react-icons/hi2";
import ListItemPreview from './sub-components/ListItemPreview';
import { ProficiencyLevels } from '../../constants/static-texts';
import { useFormikContext } from 'formik';
import { useEffect } from 'react';



const Languages = () => {

    const formik = useFormikContext();
    // Access the field values
    const { values } = formik;
    const [chosenLanguages, setChosenLanguages] = React.useState([]);
    const [shouldDisplaySaveButton, setShouldDisplaySaveButton] = React.useState(false);


    const handleResetLanguageDetails = () => {


        formik.setFieldValue('language', '', false); // Reset 'language' field
        formik.setFieldValue('whereWasLearned', '', false); // Reset 'whereWasLearned' field
        formik.setFieldValue('oralComprehension', '', false); // Reset 'oralComprehension' field
        formik.setFieldValue('readingComprehension', '', false); // Reset 'readingComprehension' field
        formik.setFieldValue('oralInteraction', '', false); // Reset 'oralInteraction' field
        formik.setFieldValue('speakingSkills', '', false); // Reset 'speakingSkills' field
        formik.setFieldValue('writingSkills', '', false); // Reset 'writingSkills' field


    };


    const handleChosenLanguages = (e) => {

        let languagesToStore = [];


        const languageDetails = {

            language: values.language,
            whereWasLearned: values.whereWasLearned,
            oralComprehension: values.oralComprehension,
            readingComprehension: values.readingComprehension,
            oralInteraction: values.oralInteraction,
            speakingSkills: values.speakingSkills,
            writingSkills: values.writingSkills,

        }


        if (!localStorage.getItem('languagesToStore')) {

            languagesToStore.push(languageDetails);

            localStorage.setItem('languagesToStore', JSON.stringify(languagesToStore));

        } else {

            languagesToStore = JSON.parse(localStorage.getItem('languagesToStore'));
            languagesToStore.push(languageDetails);

            localStorage.setItem('languagesToStore', JSON.stringify(languagesToStore));

        }

        setChosenLanguages([...chosenLanguages, languageDetails]);

        handleResetLanguageDetails();

    }

    const handleSaveEditedLanguageDetails = () => {

    }


    useEffect(() => {

        const storedLanguages = JSON.parse(localStorage.getItem('languagesToStore'));

        if (storedLanguages) {
            setChosenLanguages(storedLanguages);
        }

        console.log(chosenLanguages);

    }, []);


    return (

        <Grid sx={{ overflowY: 'auto', maxHeight: '600px', paddingRight: '20px' }} container spacing={2} >

            {
                chosenLanguages.length > 0 && (

                    <Grid item xs={12}>
                        <ListItemPreview languages={chosenLanguages} setLanguages={setChosenLanguages} setSaveDisplay={setShouldDisplaySaveButton} />
                    </Grid>

                )
            }

            <Grid item xs={12}>
                <Textfield name={'language'} label={'Language'} />
            </Grid>

            <Grid item xs={12} boxSizing={'border-box'}>
                <Textfield name={'whereWasLearned'} label={'Where/how did you learn?'} />
            </Grid>

            <Grid item container xs={12} spacing={2}>

                {/* <Grid item xs={12} boxSizing={'border-box'}>
                    <h5 style={{ color: '#023642', margin: '0', fontSize: '1.2rem' }}>Comprehention</h5>
                </Grid> */}

                <Grid item xs={6} boxSizing={'border-box'}>
                    <CustomSelect name={'oralComprehension'} label={'Oral Comprehention'} options={ProficiencyLevels} />
                </Grid>

                <Grid item xs={6} boxSizing={'border-box'}>
                    <CustomSelect name={'readingComprehension'} label={'Reading Comprehention'} options={ProficiencyLevels} />
                </Grid>

            </Grid>

            <Grid item container xs={12} spacing={2}>

                {/* <Grid item xs={12} boxSizing={'border-box'}>
                    <h5 style={{ color: '#023642', margin: '0', fontSize: '1.2rem' }}>Speaking</h5>
                </Grid> */}

                <Grid item xs={6} boxSizing={'border-box'}>
                    <CustomSelect name={'oralInteraction'} label={'Oral Interaction'} options={ProficiencyLevels} />
                </Grid>

                <Grid item xs={6} boxSizing={'border-box'}>
                    <CustomSelect name={'speakingSkills'} label={'Speaking Skills'} options={ProficiencyLevels} />
                </Grid>

            </Grid>

            <Grid item container xs={12} spacing={2}>

                {/* <Grid item xs={12} boxSizing={'border-box'}>
                    <h5 style={{ color: '#023642', margin: '0', fontSize: '1.2rem' }}>Writing</h5>
                </Grid> */}

                <Grid item xs={6} boxSizing={'border-box'}>
                    <CustomSelect name={'writingSkills'} label={'Writing Skills'} options={ProficiencyLevels} />
                </Grid>

                {
                    shouldDisplaySaveButton && (
                        <Grid item xs={6} textAlign={'end'} boxSizing={'border-box'}>

                            <Button
                                // endIcon={<HiOutlineChevronRight size={20} />}
                                variant='outlined'
                                onClick={(e) => {
                                    setShouldDisplaySaveButton(prev => !prev);
                                }}
                                sx={{ mr: 1, width: '150px', marginBottom: '-75px' }}
                                className='btn-secondary'
                            >
                                Save
                            </Button>
                        </Grid>
                    )
                }

            </Grid>

            <Grid item textAlign={'start'} mt={2} xs={12}>

                <Button
                    // color="inherit"
                    size="medium"
                    variant="text"
                    startIcon={<HiPlus color='#023642' size={25} />}
                    sx={{ color: '#023642' }}
                    onClick={handleChosenLanguages}

                >Add More</Button>

            </Grid>

        </Grid>
    )
}

export default Languages;