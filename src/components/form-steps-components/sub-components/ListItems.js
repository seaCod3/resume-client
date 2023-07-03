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


export default function ListItems({ options, setOptions, customHook, handleEdit, handleDelete, fields, storedValuePointer }) {

    const formik = useFormikContext();

    const getOptionPrimaryText = (option) => {
        if (option?.jobTitle) {
            return option?.jobTitle;
        } else if (option?.instituitionName) {
            return option?.instituitionName;
        } else if (option?.language) {
            return option?.language;
        }
    };

    const getOptionSecondaryText = (option) => {
        if (option?.jobTitle) {
            return `${option.jobTitle} at ${option?.employer}, in ${option?.jobLocationCity}...`;
        } else if (option?.language) {
            return `Learned in ${option.whereWasLearned}. Level: ${option.oralComprehension}, ${option.readingComprehension}, ${option.oralInteraction}, ${option.speakingSkills}, ${option.writingSkills}`;
        } else if (option?.instituitionName) {
            return `${option.degree} on ${option.course} at ${option?.instituitionName}...`;
        }
    };


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

                                            <IconButton fontSize="medium" onClick={(e) => handleEdit(index, customHook, options, formik, fields)} edge="end" aria-label="delete">
                                                <ModeEditOutlineIcon sx={{ color: blue[300] }} />
                                            </IconButton>

                                            <IconButton onClick={(e) => handleDelete(index, setOptions, storedValuePointer)} edge="end" aria-label="delete">
                                                <DeleteIcon fontSize='medium' sx={{ color: pink[300] }} />
                                            </IconButton>

                                        </>

                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#023642', width: 30, height: 30, fontSize: '.9rem' }}>{index + 1}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={getOptionPrimaryText(option)}
                                        secondary={getOptionSecondaryText(option)}
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
