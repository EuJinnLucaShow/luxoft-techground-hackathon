import React from 'react'
import {Grid} from "@mui/material";
import {InfoItem} from "../components/infoItem";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import {Groups} from "../../Groups/Groups";



export const GroupsTab= () => {
  return <Grid container spacing={3}>
    <Grid item display='flex' gap={2} flexWrap='wrap'>
      <InfoItem title={"Фізичне здоров'я"} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }} />} count={36}/>
      <InfoItem title={"Ментальне здоров'я"} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }}/>} count={22}/>
      <InfoItem title={'Плацевлаштування'} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }}/>} count={3}/>
      <InfoItem title={'Стосунки'} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }} />} count={2}/>
      <InfoItem title={'Проблеми з житлом'} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }}/>} count={22}/>
      <InfoItem title={'Соціалізація'} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }}/>} count={13}/>
    </Grid>

    <Grid item sx={{ minWidth: '100%'}} >
      <Groups/>
    </Grid>
  </Grid>
}
