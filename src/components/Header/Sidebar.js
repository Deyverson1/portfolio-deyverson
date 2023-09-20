import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Back from './Salir';
import { useState } from 'react';
import Idioma from './Idioma';
import { useTranslation } from 'react-i18next';
import Tema from './Tema';

const Sidebar = ({ toggleNavAndSidebar }) => {
  const { t } = useTranslation();

  const [idioma, setIdioma] = useState(false);
  const [idiomaVisible, setIdiomaVisible] = useState(true);

  const [tema, setTema] = useState(false);
  const [temaVisible, setTemaVisible] = useState(true);

  const toggleIdioma = () => {
    setIdioma(!idioma);
    setIdiomaVisible(!idiomaVisible); 
  };
  const toggleIdiomaVar = () => {
    setIdioma(false);
    setIdiomaVisible(true); 
  };

  const toggleTema = () => {
    setTema(!tema);
    setTemaVisible(!temaVisible) ;
  };
  const toggleTemaVar = () => {
    setTema(false);
    setTemaVisible(true);
  }

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
      to: 'https://drive.google.com/file/d/19DY92S-W6Yd9HlliMfrD-Q50QuhqNx27/view?usp=drive_link',
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
    <SidebarContainer>
    
      <SidebarContent>
        {idiomaVisible && temaVisible && <Div>
          <Back onClick={toggleNavAndSidebar} />
          <>
               {navData.map((nav, index) => (
              <Content
                key={index}
                to={nav.to}
                onClick={toggleNavAndSidebar}
              >
                {nav.name}
              </Content>
            ))}
              <Content   
              onClick={toggleTema}
              >
                {t('Theme')}
              </Content>
              <Content
                onClick={toggleIdioma}
              >
                {t('Language')}
              </Content>
          </>
        </Div>
        }
        <div>
        {idioma && <Idioma toggleIdiomaVar={toggleIdiomaVar}/>}
        {tema && <Tema toggleTemaVar={toggleTemaVar}/>}
        </div>
      <SocialMedia className='social'>
            <a href="https://www.instagram.com/its_deyverson/" target='blank'><Img src="/img/insta.webp" alt="Instagram"/></a>
            <a href="https://github.com/Deyverson1" target='blank'><Img src="/img/gith.webp" alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/deyverson/" target='blank'><Img src="/img/linkk.webp" alt="Linkedin"/></a>
      </SocialMedia>
      </SidebarContent>
    </SidebarContainer>

  );
};

const SidebarContainer = styled.div`
  position: fixed; 
  top: 0; 
  right: 0; 
  width: 250px; 
  height: 100%; 
  background-color: #fff; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 1); 
  z-index: 1; 
  @media screen and (max-width:425px){
    top: 85.5px;
    height: 560px;
  }
`;

const SidebarContent = styled.div`
  padding: 16px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    justify-content: space-around;
   margin-top: 1rem;
    @media screen and (max-width:425px){
      margin-top: 1.5rem;
    }
`
const Content = styled(Link)`
  font-family: 'Poppins';
  font-size: .8125rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  padding-right: 1rem ;
  padding-bottom: 1.5rem;
  color: #000000;
  text-decoration: none;
  :hover{
    color: #4169E1;
    text-decoration: overline ;
  }
`
const SocialMedia = styled.div`
    padding-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 425px){
    padding-top: .7rem;
}
`
const Img = styled.img`
    width: 35px;
`
export default Sidebar;
