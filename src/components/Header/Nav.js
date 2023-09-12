import * as React from 'react';
import Link from '@mui/material/Link';
import styled from 'styled-components';

const navData = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Skills',
    href: '/Skills',
  },
  {
    name: 'Proyectos',
    href:'/Projects',
  },
  {
    name: 'About Me',
    href: 'AboutMe'
  },
  {
    name: 'CV',
    href: 'https://drive.google.com/file/d/19DY92S-W6Yd9HlliMfrD-Q50QuhqNx27/view?usp=drive_link',
  },
  {
    name: 'Certificados',
    href: 'https://drive.google.com/file/d/1Fvrayql_efe5BP4iWsJ-LHuvRpkLchnF/view',
  },
  {
    name: 'Contact',
    href: '/Contact',
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
          href={nav.href}
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
  color: white;
}
`
