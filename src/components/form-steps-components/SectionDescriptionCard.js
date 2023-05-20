import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SectionDescriptionCard = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1}>
        {/* <p>Section Description</p> */}
        <h3 className='section-description-custom-card-title' >Experience</h3>
        <p className='section-description-card-paragraph' >Showcase your professional background and highlight your key roles and achievements to demonstrate your expertise and suitability for the desired position.</p>
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
      </Stack>
    </Box>
  );
}

export default SectionDescriptionCard;