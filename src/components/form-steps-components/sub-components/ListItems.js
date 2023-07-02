import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { blue, pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useFormikContext } from 'formik';
import useJobExperience from '../../../hooks/useJobExperienceStore';


const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));


export default function ListItems({ options, setOptions, customHook, handleEdit, handleDelete }) {

    const formik = useFormikContext();
    

    // const handleDelete = (jobTitleOfExperienceToDelete) => {

    //     const storedExperiences = JSON.parse(localStorage.getItem('experiences'));

    //     let remainingExperiences = storedExperiences.filter((experience) => experience.jobTitle !== jobTitleOfExperienceToDelete);

    //     localStorage.setItem('experiences', JSON.stringify(remainingExperiences));
    //     setExperiences([...JSON.parse(localStorage.getItem('experiences'))]);

    // }


    // const handleDisplayExperienceDetailsToUpdate = (jobExperienceToUpdate, formik) => {


    //     formik.setFieldValue('jobTitle', jobExperienceToUpdate.jobTitle, false); // Reset 'language' field
    //     formik.setFieldValue('employer', jobExperienceToUpdate.employer, false); // Reset 'whereWasLearned' field
    //     formik.setFieldValue('jobLocationCity', jobExperienceToUpdate.jobLocationCity, false); // Reset 'oralComprehension' field
    //     formik.setFieldValue('jobLocationStreet', jobExperienceToUpdate.jobLocationStreet, false); // Reset 'readingComprehension' field
    //     formik.setFieldValue('jobLocationCountry', jobExperienceToUpdate.jobLocationCountry, false); // Reset 'oralInteraction' field
    //     formik.setFieldValue('jobStartDate', jobExperienceToUpdate.jobStartDate, false); // Reset 'speakingSkills' field
    //     formik.setFieldValue('jobEndDate', jobExperienceToUpdate.jobEndDate, false); // Reset 'writingSkills' field
    //     formik.setFieldValue('stillWorkingHere', jobExperienceToUpdate.stillWorkingHere, false); // Reset 'writingSkills' field

    // };

    // const handleEdit = (jobTitleOfExperienceToEdit) => {

    //     useExperience.onOpen()

    //     const experienceToEdit = experiences.find((experiences) => experiences.jobTitle === jobTitleOfExperienceToEdit)

    //     handleDisplayExperienceDetailsToUpdate(experienceToEdit);

    //     useExperience.setExperienceIndex(experiences.indexOf(experienceToEdit));

    //     console.log(useExperience.index, experiences.indexOf(experienceToEdit))
    //     // console.log(experiences.indexOf(experienceToEdit));

    // }

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>

            <Grid item xs={12} >

                <Demo>
                    <List >

                        {
                            options?.map((option, index) => (
                                <ListItem
                                    key={index}
                                    sx={{

                                        backgroundColor: '#f4f4f4', marginBottom: '.3rem', borderRadius: '5px', '&:hover': {
                                            backgroundColor: '#f2f2f2',
                                        }
                                    }}
                                    secondaryAction={

                                        <>

                                            <IconButton fontSize="medium" onClick={(e) => handleEdit(option.jobTitle, customHook, options, formik)} edge="end" aria-label="delete">
                                                <ModeEditOutlineIcon sx={{ color: blue[300] }} />
                                            </IconButton>

                                            <IconButton onClick={(e) => handleDelete(option.jobTitle, setOptions)} edge="end" aria-label="delete">
                                                <DeleteIcon fontSize='medium' sx={{ color: pink[300] }} />
                                            </IconButton>

                                        </>

                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#023642', width: 30, height: 30, fontSize: '.9rem' }}>{index + 1}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={option?.jobTitle}
                                        secondary={`${option.employer ? option.employer : ''}, ${option.jobLocationCity}, ${option.stillWorkingHere}...`}
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
