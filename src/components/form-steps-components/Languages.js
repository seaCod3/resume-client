import { Button, Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { ProficiencyLevels } from '../../constants/static-texts';
import useFieldReseter from '../../hooks/useFieldReseter';
import useLanguageStore from '../../hooks/useLanguageStore';
import CustomSelect from '../form/select';
import Textfield from '../form/text-field';
import { handleAddNewItem, handleDelete, handleGetItemtoEdit, handleSaveEditedItem } from '../libs/form-operations-handlers ';
import ListItems from './sub-components/ListItems';



const Languages = () => {

    const languageFields = ['language', 'whereWasLearned', 'oralComprehension', 'readingComprehension', 'oralInteraction', 'speakingSkills', 'writingSkills'];
    const storedValuePointer = 'languagesToStore';
    const [languages, setLanguages] = useState([]);
    const useLanguage = useLanguageStore();
    const useReseter = useFieldReseter();
    const formik = useFormikContext();


    const handleBuildLanguageToSave = () => {

        return {

            language: formik.values.language,
            whereWasLearned: formik.values.whereWasLearned,
            oralComprehension: formik.values.oralComprehension,
            readingComprehension: formik.values.readingComprehension,
            oralInteraction: formik.values.oralInteraction,
            speakingSkills: formik.values.speakingSkills,
            writingSkills: formik.values.writingSkills,
        }

    }


    useEffect(() => {

        const savedLanguages = JSON.parse(localStorage.getItem(storedValuePointer));

        if (savedLanguages) {
            setLanguages(savedLanguages);
        }

        console.log(languages);

    }, []);



    return (

        <Grid sx={{ overflowY: 'auto', maxHeight: '550px', paddingRight: { xs: 0, md: '20px' } }} container spacing={2} >

            {
                languages.length > 0 && (

                    <Grid item xs={12}>
                        <ListItems
                            options={languages}
                            setOptions={setLanguages}
                            customHook={useLanguage}
                            handleEdit={handleGetItemtoEdit}
                            handleDelete={handleDelete}
                            fields={languageFields}
                            storedValuePointer={storedValuePointer}
                        />
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

                <Grid item xs={12} md={6} boxSizing={'border-box'}>
                    <CustomSelect name={'oralComprehension'} label={'Oral Comprehention'} options={ProficiencyLevels} />
                </Grid>

                <Grid item xs={12} md={6} boxSizing={'border-box'}>
                    <CustomSelect name={'readingComprehension'} label={'Reading Comprehention'} options={ProficiencyLevels} />
                </Grid>

            </Grid>

            <Grid item container xs={12} spacing={2}>

                <Grid item xs={12} md={6} boxSizing={'border-box'}>
                    <CustomSelect name={'oralInteraction'} label={'Oral Interaction'} options={ProficiencyLevels} />
                </Grid>

                <Grid item xs={12} md={6} boxSizing={'border-box'}>
                    <CustomSelect name={'speakingSkills'} label={'Speaking Skills'} options={ProficiencyLevels} />
                </Grid>

            </Grid>

            <Grid item container xs={12} spacing={2}>

                <Grid item xs={12} md={6} boxSizing={'border-box'}>
                    <CustomSelect name={'writingSkills'} label={'Writing Skills'} options={ProficiencyLevels} />
                </Grid>

            </Grid>

            <Grid item textAlign={'center'} mt={2} xs={12}>

                {
                    useLanguage.show ?
                        (
                            <Button
                                // endIcon={<HiOutlineChevronRight size={20} />}
                                variant='outlined'
                                onClick={(e) => {
                                    handleSaveEditedItem(setLanguages, useReseter, useLanguage.index, storedValuePointer, languageFields, handleBuildLanguageToSave);
                                    useLanguage.onClose()
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
                                onClick={() => handleAddNewItem(languages, setLanguages, useReseter, storedValuePointer, languageFields, handleBuildLanguageToSave)}

                            >
                                ADD
                            </Button>
                        )
                }

            </Grid>

        </Grid>
    )
}

export default Languages;