import React, {useEffect, useState} from "react";
import axios from "axios";
import {Grid, IconButton, SvgIcon, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TelegramIcon from '../assets/messenger.svg'

const daysOfWeek = ['4 грудня', '5 грудня', '6 грудня', '7 грудня', '8 грудня', '9 грудня', '10 грудня'];

const events = [
  { day: '4 грудня', time: '09:00', title: 'Привітання' , group: "Фізичне здоров'я", messengerIcon: TelegramIcon },
  { day: '5 грудня', time: '12:00', title: 'Привітання' ,  group: "Фізичне здоров'я", messengerIcon: TelegramIcon},
  { day: 'Wednesday', time: '15:00', title: 'Привітання',  group: "Фізичне здоров'я" , messengerIcon: TelegramIcon},
  { day: '7 грудня', time: '18:00', title: 'Привітання' ,  group: "Фізичне здоров'я", messengerIcon: TelegramIcon},
  { day: '10 грудня', time: '21:00', title: 'Привітання',  group: "Фізичне здоров'я" , messengerIcon: TelegramIcon},
];

export const MailingPlan = () => {
  const [mailing, setMailing] = useState([])
  const [ loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true)

    axios.get('https://team-10-12.onrender.com/mailing')
      .then( (response) => setMailing(response.data))
      .catch( (error)=> console.log(error))
      .finally(()=> setLoading(false))
  }, []);


  return <Grid container>
    <Grid item xs={12} mb={3}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align='center' width='300px'>Шаблон</TableCell>
            <TableCell align='center'>Текст</TableCell>
            <TableCell align='center' >Група</TableCell>
            <TableCell align='center' >Мессенджер</TableCell>
            <TableCell align='center' width='50px'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mailing.map((row) => (
            <TableRow key={row._id} >
              <TableCell align='center'>{row?.templateName}</TableCell>
              <TableCell align='center'>{row?.mail}</TableCell>
              <TableCell align='center'>{row?.group}</TableCell>
              <TableCell align='center'>{row?.messenger}</TableCell>
              <TableCell align='center'><IconButton children={<EditIcon />}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>

    <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Календар
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  {daysOfWeek.map((day) => (
                    <TableCell key={day} width='15%'>{day}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.title}>
                    <TableCell>{event.time}</TableCell>
                    {daysOfWeek.map((day) => (
                      <TableCell key={day} sx={{ border: '1px solid #F6F6FA' , backgroundColor: event.day === day? '#ECF7FE': 'inherit' }}>
                        {event.day === day && (
                          <Box>
                            <Grid container>
                              <Grid item>
                                <img src={event.messengerIcon}/>
                                </Grid>
                              <Grid item xs={12}><strong>{event.title}</strong></Grid>
                              <Grid item>Групи: {event.group}</Grid>
                            </Grid>
                          </Box>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
    </Grid>

  </Grid>
}
