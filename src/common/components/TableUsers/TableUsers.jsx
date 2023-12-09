import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import messenger from '../../static/messenger.svg';
import edit from '../../static/edit.svg';
import axios from 'axios';

export default function TableUsers() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://team-10-12.onrender.com/entities',
        );
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Ім’я</TableCell>
            <TableCell align="center">Група</TableCell>
            <TableCell align="center">Вік</TableCell>
            <TableCell align="center">Статус</TableCell>
            <TableCell align="center">Область</TableCell>
            <TableCell align="center">Запити</TableCell>
            <TableCell align="center">Члени родини</TableCell>
            <TableCell align="center">Месенджер</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="center">{row.userGroup}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.userStatus}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.adminRequestsCount}</TableCell>
              <TableCell align="center">{row.familyMembers.length}</TableCell>
              <TableCell align="center">
                <img src={messenger} alt="messenger" />
              </TableCell>
              <TableCell align="center">
                <img
                  onClick={() => alert()}
                  src={edit}
                  alt="edit"
                  style={{ cursor: 'pointer' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
