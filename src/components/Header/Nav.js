import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';


export default function CustomSeparator() {
  const Linki = styled(Link)`
    &:hover{
      color: #4169E1;
    }
  `
  const breadcrumbs = [
    <Linki
      underline="hover"
      key="1"
      color="#000000"
      href="/"
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      HOME
    </Linki>,
    <Linki
      underline="hover"
      key="2"
      color="#000000"
      font-family='Poppins'
      href="<Skills/>"
      className='navi'
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      Skills
    </Linki>,
    <Linki
      underline="hover" 
      key="2" 
      color="#000000" 
      href="/material-ui/getting-started/installation/"
      className='navi'
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      Proyectos
    </Linki>,
    <Linki
      underline="hover" 
      underlineColor="#4169E1"
      key="2" 
      color="#000000" 
      href="/material-ui/getting-started/installation/"
      className='navi'
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      About me
    </Linki>,
    <Linki
      underline="hover" 
      key="2" 
      color="#000000"
      href="/material-ui/getting-started/installation/"
      className='navi'
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      Contact
    </Linki>,

    <Linki><></></Linki>
  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator=" " aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

