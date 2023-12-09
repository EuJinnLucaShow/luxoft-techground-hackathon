import React, {useEffect, useState} from 'react'
import {PageWrapper} from "../../common/components/PageWrapper/PageWrapper";
import {IconButton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import EditIcon from "@mui/icons-material/Edit";
import {dateFormatting} from "./helpers";

export const Appeal = () => {
  const [requests, setRequests] = useState([])
  const [ loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true)
     axios.get('https://team-10-12.onrender.com/requests').then( (response) => setRequests(response.data))
      .catch( (error) => console.log(error))
       .finally(()=> setLoading(false))
  }, []);

  return <PageWrapper title={'Звернення'} loading={loading}>
    <Table sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell align='center'>Дата звернення</TableCell>
          <TableCell align='center'>Звернення</TableCell>
          <TableCell align='center'>Група</TableCell>
          <TableCell align='center'>Учасник</TableCell>
          <TableCell align='center'>Відповісти</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {requests.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align='center'>{dateFormatting(row?.date)}</TableCell>
            <TableCell align='center'>{row?.message}</TableCell>
            <TableCell align='center'>{row?.group}</TableCell>
            <TableCell align='center'>{row?.username}</TableCell>
            <TableCell align='center'><IconButton children={<EditIcon />}/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </PageWrapper>
}
