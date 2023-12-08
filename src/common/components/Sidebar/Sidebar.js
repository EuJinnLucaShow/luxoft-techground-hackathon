import * as React from 'react';

import Box from '@mui/material/Box';
import {ListItemButton, ListItemIcon, ListItemText, styled} from '@mui/material';
import {NavLink} from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';


const StyledSideBar = styled(Box) ({
  width: '250px',
  position: 'absolute',
  height: '100vh',
  backgroundColor: '#FFFFFF',
  margin: 0
});


const sidebarItems = [
  {
    icon: <PersonOutlineOutlinedIcon />,
    name: 'Користувачі',
    link: '/users'
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    name: 'Групи',
    link: '/groups'
  },
  {
    icon: <MessageOutlinedIcon />,
    name: 'Звернення',
    link: '/appeal'
  },
  {
    icon: <SignalCellularAltIcon />,
    name: 'Аналітика',
    link: '/analytics'
  },
  {
    icon: <DraftsOutlinedIcon />,
    name: 'Розсилка',
    link: '/mailing'
  }
];

const StyledNavLink = styled(NavLink)({

  '&.active': {
  	backgroundColor: '#2F6CA2',
  	color: '#FFFFFF'
  },
});


export  const SideBar = () =>  {
  return (<StyledSideBar>
      {sidebarItems.map((item) => 		(
        <ListItemButton key={item.link} component={StyledNavLink} to={item.link} >
          <ListItemIcon children={item.icon} sx={{ color: '#000'}}/>
          <ListItemText primary={item.name}  sx={{ color: '#000' }}/>
        </ListItemButton>) )}
    </StyledSideBar>
  );
};
