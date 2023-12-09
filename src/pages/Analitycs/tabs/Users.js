import React from 'react'
import {InfoItem} from "../components/infoItem";
import {Grid} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


export const Users = () => {

  return <Grid container>
    <Grid item display='flex' gap={2}>
      <InfoItem title={'Усього користувачів'} icon={<PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />} count={193}/>
      <InfoItem title={'Ветерани'} icon={<PersonOutlineOutlinedIcon sx={{ fontSize: 30 }}/>} count={103}/>
      <InfoItem title={'Члени родини'} icon={<PersonOutlineOutlinedIcon sx={{ fontSize: 30 }}/>} count={90}/>
    </Grid>
  </Grid>


}
