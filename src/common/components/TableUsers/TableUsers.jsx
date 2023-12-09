import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import messenger from '../../static/messenger.svg';
import edit from '../../static/edit.svg';

const rows = [
  {
    id: 1,
    name: 'Олександр',
    group: 'Фізичне здоров’я',
    age: '28',
    status: 'ветеран',
    region: 'Одеська',
    requests: '18',
    family: '1',
  },
  {
    id: 2,
    name: 'Геннадій',
    group: 'Фізичне здоров’я',
    age: '41',
    status: 'ветеран',
    region: 'Київська',
    requests: '7',
    family: '1',
  },
];

export default function TableUsers() {
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
                {row.name}
              </TableCell>
              <TableCell align="center">{row.group}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.region}</TableCell>
              <TableCell align="center">{row.requests}</TableCell>
              <TableCell align="center">{row.family}</TableCell>
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
