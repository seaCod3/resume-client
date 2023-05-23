import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { blue, pink } from '@mui/material/colors';
import { useFormikContext } from 'formik';



const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));


export default function ListItemPreview({ languages, setLanguages }) {

    const formik = useFormikContext();
    // Access the field values
    const { values } = formik;

    const handleDelete = (languageName) => {

        const storedLanguages = JSON.parse(localStorage.getItem('languagesToStore'));

        let updatedLanguages = storedLanguages.filter((language) => language.language !== languageName);

        localStorage.setItem('languagesToStore', JSON.stringify(updatedLanguages));
        setLanguages([...JSON.parse(localStorage.getItem('languagesToStore'))]);

    }


    const handleSetLanguageDetailsToUpdate = (languageToUpdate) => {


        formik.setFieldValue('language', languageToUpdate.language, false); // Reset 'language' field
        formik.setFieldValue('whereWasLearned', languageToUpdate.whereWasLearned, false); // Reset 'whereWasLearned' field
        formik.setFieldValue('oralComprehension', languageToUpdate.oralComprehension, false); // Reset 'oralComprehension' field
        formik.setFieldValue('readingComprehension', languageToUpdate.readingComprehension, false); // Reset 'readingComprehension' field
        formik.setFieldValue('oralInteraction', languageToUpdate.oralInteraction, false); // Reset 'oralInteraction' field
        formik.setFieldValue('speakingSkills', languageToUpdate.speakingSkills, false); // Reset 'speakingSkills' field
        formik.setFieldValue('writingSkills', languageToUpdate.writingSkills, false); // Reset 'writingSkills' field


    };

    const handleEdit = (languageName) => {

        languages.find((language) => language.language === languageName)
        const language = languages.find((language) => language.language === languageName)

        handleSetLanguageDetailsToUpdate(language);

        console.log(language);

    }

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>

            <Grid item xs={12} >
                {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Avatar with text and icon
                </Typography> */}
                <Demo>
                    <List >

                        {
                            languages?.map((language, index) => (
                                <ListItem
                                    key={index}
                                    sx={{

                                        backgroundColor: '#f4f4f4', marginBottom: '.3rem', borderRadius: '5px', '&:hover': {
                                            backgroundColor: '#f2f2f2',
                                        }
                                    }}
                                    secondaryAction={

                                        <>

                                            <IconButton fontSize="medium" onClick={(e) => handleEdit(language.language)} edge="end" aria-label="delete">
                                                <ModeEditOutlineIcon sx={{ color: blue[300] }} />
                                            </IconButton>

                                            <IconButton onClick={(e) => handleDelete(language.language)} edge="end" aria-label="delete">
                                                <DeleteIcon fontSize='medium' sx={{ color: pink[300] }} />
                                            </IconButton>

                                        </>

                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#023642', width: 30, height: 30, fontSize: '.9rem' }}>{index + 1}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={language.language}
                                        secondary={`${language.whereWasLearned ? language.whereWasLearned : ''}, ${language.oralComprehension}, ${language.readingComprehension}, ${language.oralInteraction}, ${language.speakingSkills}, ${language.writingSkills}`}
                                    />
                                </ListItem>
                            ))
                        }

                    </List>
                </Demo>
            </Grid>
        </Box>
    );
}