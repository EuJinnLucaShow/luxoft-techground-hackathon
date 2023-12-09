import React from 'react'
import {Grid} from "@mui/material";
import {InfoItem} from "../components/infoItem";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import {Appeal} from "../../Appeal/Appeal";


export const Requests = () => {
  return <Grid container gap={2}>
    <Grid item display='flex' gap={2} flexWrap='wrap'>
      <InfoItem title={"Всього звернень"} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }} />} count={45}/>
      <InfoItem title={"Макс. звернень"} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }}/>} count={9}/>
      <InfoItem title={'FQA'} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }}/>} count={7}/>
      <InfoItem title={'Лідуюча група:'} subtitle={'Стосунки'} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }} />} count={3}/>
      <InfoItem title={'Середній вік'} icon={<GroupOutlinedIcon sx={{ fontSize: 30 }}/>} count={35}/>
    </Grid>

    <Grid item sx={{ minWidth: '100%'}} >
      <Appeal/>
    </Grid>

  </Grid>
}
