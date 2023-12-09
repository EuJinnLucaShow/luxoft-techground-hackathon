import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../static/logo.svg'
import {IconButton} from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {NavLink} from "react-router-dom";

export const Header =() => {
  return     <Box sx={{ flexGrow: 1 }}>
    <AppBar position='static' >
      <Toolbar>
        <Box sx={{ flexGrow: 1}}>
          <NavLink to='/'>
            <img src={logo} alt='Logo' />
          </NavLink>
        </Box>
        <IconButton color='inherit' ><NotificationsNoneOutlinedIcon /></IconButton>
        <IconButton color='inherit' ><AccountCircleOutlinedIcon /></IconButton>
      </Toolbar>
    </AppBar>
  </Box>;
};
