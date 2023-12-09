import React from 'react'
import {PageWrapper} from "../../common/components/PageWrapper/PageWrapper";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Users} from "../Analitycs/tabs/Users";
import {GroupsTab} from "../Analitycs/tabs/GroupsTab";
import {Requests} from "../Analitycs/tabs/Requests";
import Typography from "@mui/material/Typography";
import {MailingTemplate} from "./tabs/MailingTemplate";
import {MailingPlan} from "./tabs/MailingPlan";

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


export const Mailing = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return <PageWrapper title={'Розсилка'} loading={false}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} >
        <Tab sx={{ width: '50%' , fontWeight: 'bold', fontSize: '18px'}} label="Шаблон розсилки"  />
        <Tab sx={{ width: '50%' , fontWeight: 'bold', fontSize: '18px'}} label="План розсилок"  />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
      <MailingTemplate/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      <MailingPlan/>
    </CustomTabPanel>
  </PageWrapper>
}
