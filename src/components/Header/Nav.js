import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';



export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link
      underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/" 
    >
    Skills
    </Link>,
    <Link
    underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/" 
    >
    Portfolio
    </Link>,
    <Link
    underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/" 
    >
    About me
    </Link>,
    <Link
      underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/" 
    >
    Contact
    </Link>,


  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      
    </Stack>
  );
}
