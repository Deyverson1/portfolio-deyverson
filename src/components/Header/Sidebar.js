import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Back from './Salir';
import { useState } from 'react';
import Idioma from './Idioma';

const Sidebar = ({ toggleNavAndSidebar }) => {
  const [idioma, setIdioma] = useState(false);
  const [idiomaVisible, setIdiomaVisible] = useState(true);

  const toggleIdioma = () => {
    setIdioma(!idioma);
    setIdiomaVisible(!idiomaVisible); 
  };
  const toggleIdiomaVar = () => {
    setIdioma(false);
    setIdiomaVisible(true); 
  };
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
      href: '/Projects',
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
    }
  ]
  return (
    <SidebarContainer>
      <SidebarContent>
        {idiomaVisible && <Div>
          <Back onClick={toggleNavAndSidebar} />
          <>
               {navData.map((nav, index) => (
              <Content
                key={index}
                to={nav.href}
                onClick={toggleNavAndSidebar}
              >
                {nav.name}
              </Content>
            ))}
              <Content   
              >
                Tema
              </Content>
              <Content
                onClick={toggleIdioma}
              >
                Idioma
              </Content>
          </>
          
          
        </Div>
        }
        <div>
        {idioma && <Idioma toggleIdiomaVar={toggleIdiomaVar}/>}
        </div>
      <SocialMedia className='social'>
            <a href="https://www.instagram.com/its_deyverson/" target='blank'><Img src="/img/insta.png" alt="Instagram"/></a>
            <a href="https://github.com/Deyverson1" target='blank'><Img src="/img/gith.png" alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/deyverson/" target='blank'><Img src="/img/linkk.png" alt="Linkedin"/></a>
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
    top: 81px;
    height: 530px;
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
