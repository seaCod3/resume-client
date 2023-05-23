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



const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function ListItemPreview({ languages, setLanguages }) {

    const handleDelete = (languageName) => {

        let updatedLang = languages.filter((language) => language.language !== languageName);
        setLanguages([...updatedLang]);

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

                                            <IconButton fontSize="medium" onClick={() => alert('Edited')} edge="end" aria-label="delete">
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