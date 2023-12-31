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
      name:  t('Skills'),
      to: '/Skills',
    },
    {
      name:  t('Projects'),
      to:'/Projects',
    },
    {
      name: t('Aboot'),
      to: 'AboutMe'
    },
    {
      name: 'CV',
      to: 'https://drive.google.com/file/d/1kg3s7_OgRVShL78T0rkCRl_Zh-M0cV_6/view?usp=sharing',
    },
    {
      name:  t('Certificate'),
      to: 'https://drive.google.com/file/d/1Fvrayql_efe5BP4iWsJ-LHuvRpkLchnF/view',
    },
    {
      name: t('ContactNav'),
      to: '/Contact',
    },
    
  ]
  return (
    <>
      {navData.map((nav, index) => (
        <Linki
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
