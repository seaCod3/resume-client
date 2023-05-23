import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Item = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SectionDescriptionCard = ({title, description}) => {
  return (
    <Box sx={{ width: '100%', marginY: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Stack alignItems={'flex-start'} spacing={2}>
        
        {/* <p>Section Description</p> */}
        <h3 className='section-description-custom-card-title' >{title}</h3>
        <p className='section-description-card-paragraph' >{description}</p>
    
      </Stack>
    </Box>
  );
}

export default SectionDescriptionCard;