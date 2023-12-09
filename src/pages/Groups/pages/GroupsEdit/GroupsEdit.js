import React, {useEffect, useState} from 'react'

import {
  TextField,
  Box,
  Button,
  styled,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import axios from 'axios';

import {PageWrapper} from "../../../../common/components/PageWrapper/PageWrapper";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

const StyledButton = styled(Button) ({
  borderRadius: '40px',
  color: '#000',
  fontWeight: 'bold',
  padding: '16px, 24px, 16px, 24px'
})

export const GroupsEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [groupInfo, setGroupInfo] = useState({})
  const [ loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('')


  useEffect( () => {
    setLoading(true)
    axios.get(`https://team-10-12.onrender.com/groups/${id}`)
      .then( (response) => setGroupInfo(response.data))
      .catch( (error)=> console.log(error))
      .finally(()=> setLoading(false))
  }, []);

  const handleChangeName = (event) => {
    setGroupInfo((prevState)=> ({ ...prevState, name: event.target.value}) )
  }
  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value )
  }

  const handleAddedUser = () => {
    setLoading(true)
    axios.post(`https://team-10-12.onrender.com/groups/addGroupUser`, { phoneNumber, groupId: id  })
      .then( (response) => console.log(response))
      .catch( (error)=> console.log(error))
      .finally(()=> setLoading(false))
  }

  const handleEditGroup = () => {
    setLoading(true)
    axios.put(`https://team-10-12.onrender.com/groups/${id}`, groupInfo)
      .catch( (error)=> console.log(error))
      .finally(()=> {
        setLoading(false)

        navigate(`/groups`)
      })


  }


  return <PageWrapper title={'Редагування групи'} loading={loading}>
    <Box margin={3}>
      <TextField label="Назва" variant="outlined" value={groupInfo?.name} defaultValue='' onChange={handleChangeName}/>
    </Box>
    <Box margin={3}>
      <Typography variant='h6' fontWeight='bold' mb={2}>Додати учасника</Typography>
      <Box display='flex' gap={3}>
        <TextField label="Телефон" type='number' variant="outlined" value={phoneNumber}  onChange={handleChangePhoneNumber} />
        <StyledButton onClick={handleAddedUser} variant='outlined' endIcon={<AddOutlinedIcon/>}>Додати ще</StyledButton>
      </Box>
    </Box>

    <Box margin={3}>
      <Typography variant='h6' fontWeight='bold' mb={2}>Склад групи</Typography>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align='center' >Iм'я</TableCell>
            <TableCell align='center' >Група</TableCell>
            <TableCell align='center' >Вік</TableCell>
            <TableCell align='center' >Статус</TableCell>
            <TableCell align='center' >Область</TableCell>
            <TableCell align='center' >Запити</TableCell>
            <TableCell align='center' >Члени родини</TableCell>
            <TableCell align='center'>Меседжер</TableCell>
            <TableCell align='center' width='100px'>Дія</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groupInfo?.users?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>{row?.name}</TableCell>
              <TableCell align='center'>{groupInfo.name}</TableCell>
              <TableCell align='center'>{row?.age}</TableCell>
              <TableCell align='center'>{row?.userType}</TableCell>
              <TableCell align='center'>{row?.location}</TableCell>
              <TableCell align='center'>{row?.adminRequestsCount}</TableCell>
              <TableCell align='center'>{row?.familyMembers?.length}</TableCell>
              <TableCell align='center'>{row?.messager}</TableCell>
              <TableCell align='center'><IconButton onClick={()=> navigate(`/users/${ row._id }`)} children={<EditIcon />}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
    <Box m={4} p={2}>
      <StyledButton onClick={handleEditGroup} variant='outlined' sx={{ backgroundColor: '#000', color: '#fff'}}>Зберегти зміни</StyledButton>
    </Box>
  </PageWrapper>
}
