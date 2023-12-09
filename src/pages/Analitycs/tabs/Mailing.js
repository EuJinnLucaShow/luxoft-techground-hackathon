import React from 'react'
import {Grid} from "@mui/material";
import {InfoItem} from "../components/infoItem";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import {MailingPlan} from "../../Mailing/tabs/MailingPlan";


export const Mailing = () => {
  return <Grid container spacing={3}>
    <Grid item display='flex' gap={2}  flexWrap='wrap'>
      <InfoItem title={"Всього розсилок"} icon={<DraftsOutlinedIcon sx={{ fontSize: 30 }} />} count={300}/>
      <InfoItem title={"Відкритих порад"} icon={<DraftsOutlinedIcon sx={{ fontSize: 30 }}/>} count={1150}/>
    </Grid>

    <Grid item>
      <MailingPlan/>
    </Grid>

  </Grid>
}
