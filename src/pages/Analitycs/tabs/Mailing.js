import React from 'react'
import {Grid} from "@mui/material";
import {InfoItem} from "../components/infoItem";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';


export const Mailing = () => {
  return <Grid container>
    <Grid item display='flex' gap={2}  flexWrap='wrap'>
      <InfoItem title={"Всього hjpcbkjr"} icon={<DraftsOutlinedIcon sx={{ fontSize: 30 }} />} count={300}/>
      <InfoItem title={"Відкритих порад"} icon={<DraftsOutlinedIcon sx={{ fontSize: 30 }}/>} count={1150}/>
    </Grid>

  </Grid>
}
