import * as React from 'react';
import Link from '@mui/material/Link';
import styled from 'styled-components';

const navData = [
  {
    name: 'Home',
  },
  {
    name: 'Skills',
  },
  {
    name: 'Proyectos',
  },
  {
    name: 'About'
  },
  {
    name: 'Contact'
  },
]
export default function Navegador() {
  return (
    <>
      {navData.map((nav, index) => (
        <Linki
          underline="hover"
          key={index}
          color="#000000"
          href="/"
          fontFamily={'Poppins'}
          fontSize={'.8125rem'}
          letterSpacing={'0.0625rem'}
          textTransform={'uppercase'}
          paddingRight={'1rem'}
          
        >
          {nav.name}
        </Linki>
      ))}
    </>
  );
}
const Linki = styled(Link)`
&:hover{
  color: #4169E1;
}
`
