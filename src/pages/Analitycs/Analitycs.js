import React, {useEffect, useState} from 'react'
import {PageWrapper} from "../../common/components/PageWrapper/PageWrapper";



import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {Users} from "./tabs/Users";
import {Requests} from "./tabs/Requests";
import { GroupsTab } from "./tabs/GroupsTab";
import {Mailing} from "./tabs/Mailing";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export const Analitycs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return <PageWrapper title={'Аналітика'} loading={false}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} >
        <Tab sx={{width: '25%' , fontWeight: 'bold', fontSize: '18px'}} label="Користувачі"  />
        <Tab sx={{width: '25%' , fontWeight: 'bold', fontSize: '18px'}} label="Групи"  />
        <Tab sx={{width: '25%' , fontWeight: 'bold', fontSize: '18px'}} label="Звернення"  />
        <Tab sx={{width: '25%' , fontWeight: 'bold', fontSize: '18px'}} label="Розсилки"  />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
    <Users/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
     <GroupsTab/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
      <Requests/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={3}>
      <Mailing/>
    </CustomTabPanel>
  </PageWrapper>
}
