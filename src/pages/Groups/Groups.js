import React, {useEffect, useState} from 'react'
import {PageWrapper} from "../../common/components/PageWrapper/PageWrapper";
import {Button, styled, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {Checkbox, IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import * as XLSX from 'xlsx';


const StyledButton = styled(Button) ({
  borderRadius: '40px',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: 'rgb(47,108,162)',
    color: '#fff'
  },
})

export const Groups = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([])
  const [ loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true)

    axios.get('https://team-10-12.onrender.com/groups')
      .then( (response) => setGroups(response.data))
      .catch( (error)=> console.log(error))
      .finally(()=> setLoading(false))
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://team-10-12.onrender.com/groups/${id}`)
      .then((response) => setGroups(response.data))
      .catch((error)=> console.log(error))
  }

  const Actions = () => {
    const handleDownload = () => {
      setLoading(true)
      const sheetData = groups.flatMap(group => {
        return group.users.map(user => [
          group.name,
          user.phoneNumber,
          user.email,
          user.age,
          user.userType
        ]);
      });

      sheetData.unshift(['Група', 'Телефон', 'Емейл', 'Вік', 'Статус']);

      const ws = XLSX.utils.aoa_to_sheet(sheetData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      XLSX.writeFile(wb, 'exported_data.xlsx');

      setLoading(false)
    }

    return <Box display='flex' gap={2}>
      <StyledButton onClick={()=> navigate(`/groups/create`)} variant='outlined' endIcon={<AddIcon/>}>Створити групу</StyledButton>
      <StyledButton onClick={handleDownload} variant='outlined' sx={{ backgroundColor: '#000', color: '#fff'}} endIcon={<FileDownloadOutlinedIcon/>}>Експотувати</StyledButton>
    </Box>
  }

  return <PageWrapper title={'Групи'} actions={Actions()} loading={loading}>
    <Table sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell align='center' sx={{ fontWeight: 'bold', fontSize: 16}}  width='300px'>Назва</TableCell>
          <TableCell align='center' sx={{ fontWeight: 'bold', fontSize: 16}} >Кількість учасників</TableCell>
          <TableCell align='center'sx={{ fontWeight: 'bold', fontSize: 16}}  width='50px'>Редагувати</TableCell>
          <TableCell align='center'sx={{ fontWeight: 'bold', fontSize: 16}}  width='50px'>Видалити</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {groups.map((row) => (
          <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>{row?.name}</TableCell>
            <TableCell align='center'>{row?.users?.length}</TableCell>
            <TableCell align='center'><IconButton onClick={()=> navigate(`/groups/${ row._id }`)} children={<EditIcon />}/></TableCell>
            <TableCell align='center'><IconButton onClick={()=> handleDelete(row._id)} children={<DeleteOutlineOutlinedIcon />}/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </PageWrapper>
}
