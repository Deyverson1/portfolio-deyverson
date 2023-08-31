import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

export const Styles = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #000000;
`

export default function CustomSeparator() {

  const breadcrumbs = [
    <Link
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
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#444444"
      font-family='Poppins'
      href="/material-ui/getting-started/installation/"
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      Skills
    </Link>,
    <Link
      underline="hover" 
      key="2" 
      color="#000000" 
      href="/material-ui/getting-started/installation/"
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      Portfolio
    </Link>,
    <Link
      underline="hover" 
      key="2" 
      color="#000000" 
      href="/material-ui/getting-started/installation/"
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      About me
    </Link>,
    <Link
      underline="hover" 
      key="2" 
      color="#000000"
      href="/material-ui/getting-started/installation/"
      fontFamily={'Poppins'}
      fontSize={'.8125rem'}
      letterSpacing={'0.0625rem'}
      textTransform={'uppercase'}
    >
      Contact
    </Link>,


  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator=" " aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

