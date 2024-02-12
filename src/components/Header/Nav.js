import * as React from 'react';
// import Link from '@mui/material/Link';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navegador() {
  const { t } = useTranslation();
  const navData = [
    {
      name: t('Home'),
      to: '/',
    },
    {
      name:  t('Projects'),
      to:'/Projects',
    },
    {
      name: t('ContactNav'),
      to: "mailto:deyversongp@gmail.com",
    },
  ]
  return (
    <>
      {navData.map((nav, index) => (
        <Linki
        className="border-black rounded-md"
          key={index}
          to={nav.to}
        >
          {nav.name}
        </Linki>
      ))}
    </>
  );
}
const Linki = styled(Link)`
color: #000000;
text-decoration: none;
text-transform: uppercase;
font-family: 'Poppins';
font-size: .8925rem;
padding-right: 1rem;
letter-spacing:  0.0625rem ;
flex-wrap: wrap;
&:hover{
  color: white;
  text-decoration:  overline;
}
`
