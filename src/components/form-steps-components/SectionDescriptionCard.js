import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const SectionDescriptionCard = ({ title, description }) => {
  return (
    <Box sx={{ width: '100%', marginY: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Stack alignItems={'flex-start'} spacing={2}>

        {/* <p>Section Description</p> */}
        {/* <h3 className='section-description-custom-card-title' >{title}</h3>
        <p className='section-description-card-paragraph' >{description}</p> */}
        <h3 className='custom-card-title' >{title}</h3>
        <p className='text-start w-100 card-paragraph' >{description}</p>

      </Stack>
    </Box>
  );
}

export default SectionDescriptionCard;