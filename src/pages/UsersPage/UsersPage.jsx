import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { HeaderBox, SortBtn, SortWrapp, SpanBtn, Title, WrappBtn, Wrapper } from './UsersPage.styled'
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import TableUsers from '../../common/components/TableUsers/TableUsers';

const StyledButton = styled(Button) ({
  borderRadius: '40px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgb(47,108,162)',
    color: '#fff'
  },
})

export const UsersPage = () => {
    
    return (
        <Wrapper>
        <HeaderBox>
            <Title>Користувачі</Title>
            <WrappBtn>
            <StyledButton variant='outlined' endIcon={<AddIcon/>}>Створити користувача</StyledButton>
            <StyledButton variant='outlined' sx={{ backgroundColor: '#000', color: '#fff' }} endIcon={<FileDownloadOutlinedIcon />}>Експотувати</StyledButton>
            </WrappBtn>
            </HeaderBox>
            <SortWrapp>
                <SortBtn><SpanBtn>За діагнозом</SpanBtn><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M4.2 1L1 4.2M4.2 1L7.4 4.2M4.2 1L4.2 16.4667M10.0667 4.2L16.4667 4.2M10.0667 8.46667H14.3333M10.0667 12.7333L12.2 12.7333" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
</svg></SortBtn>
                <SortBtn><SpanBtn>За віком</SpanBtn><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M4.2 1L1 4.2M4.2 1L7.4 4.2M4.2 1L4.2 16.4667M10.0667 4.2L16.4667 4.2M10.0667 8.46667H14.3333M10.0667 12.7333L12.2 12.7333" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
</svg></SortBtn>
                <SortBtn><SpanBtn>За статусом</SpanBtn><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M4.2 1L1 4.2M4.2 1L7.4 4.2M4.2 1L4.2 16.4667M10.0667 4.2L16.4667 4.2M10.0667 8.46667H14.3333M10.0667 12.7333L12.2 12.7333" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
</svg></SortBtn>
                <SortBtn><SpanBtn>За областю</SpanBtn><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M4.2 1L1 4.2M4.2 1L7.4 4.2M4.2 1L4.2 16.4667M10.0667 4.2L16.4667 4.2M10.0667 8.46667H14.3333M10.0667 12.7333L12.2 12.7333" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
</svg></SortBtn>
        </SortWrapp>
        <>
          <TableUsers/>
        </>
   </Wrapper>
    )
}