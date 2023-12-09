import Paper from '@mui/material/Paper';
import React from 'react';
import {CircularProgress, IconButton, styled} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';


const StyledPaper = styled(Paper)({
  minHeight: '85vh',
  height: '100%'
});

const StyledBox = styled(Box)({
 borderBottom: '1px solid #F6F6FA'
});

export const PageWrapper = ({title, children, actions, loading}) => {
  return <>
    <StyledPaper>
      <StyledBox mb={3} display='flex' justifyContent='space-between' sx={{	padding: '20px'}}>
        <Typography variant='h5'  sx={{ fontWeight: 'bold'}}>{title}</Typography>
        <Box>
          {actions}
        </Box>
      </StyledBox>
      {loading ? <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%'}} /> : children}
    </StyledPaper>
  </>;
};
