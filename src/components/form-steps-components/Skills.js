import { Button, Grid } from '@mui/material';
import React from 'react';
import TextArea from '../form/text-area';

const Skills = ({skills, setSkills}) => {
    return (
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <TextArea skills={skills} setSkills={setSkills} name={'skills'} label={'Skills'} />
            </Grid>

            <Grid item xs={12} my={'2.4rem'} textAlign={'end'}>
                <Button sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '4px', ":hover": { backgroundColor: '#123', color: '#fff' } }} variant="contained" size='small' type="submit">Register</Button>
            </Grid>

        </Grid>
    )
}

export default Skills;