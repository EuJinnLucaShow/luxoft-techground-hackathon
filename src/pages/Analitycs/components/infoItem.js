import {Grid, Box, styled} from "@mui/material";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)({
backgroundColor: '#ECF7FE',
  width: '300px',
  padding: '20px',
  borderRadius: '16px'
})

export const InfoItem = ({title, icon, count}) => {
  return <StyledBox>
    <Grid container spacing={4}>
      <Grid item container display='flex' justifyContent='space-between'>
        <Grid item><Typography variant='h6'>{title}</Typography></Grid>
        <Grid item>{icon}</Grid>
      </Grid>
      <Grid item container display='flex' justifyContent='end'>
        <Grid item><Typography variant='h5' sx={{ fontWeight: 'bold', color: '#2F6CA2'}}>{count}</Typography></Grid>
      </Grid>
    </Grid>
  </StyledBox>
}
