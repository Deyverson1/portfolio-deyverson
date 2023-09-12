import React from 'react';
import styled from 'styled-components';
import { Link } from '@mui/material';

const Sidebar = () => {
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
  return (
    <SidebarContainer>
      <SidebarContent>
            <Div>
            <>
            {navData.map((nav, index) => (
                <Content
                underline="hover"
                key={index}
                color="#000000"
                href={nav.href}
                fontFamily={'Poppins'}
                fontSize={'.8125rem'}
                letterSpacing={'0.0625rem'}
                textTransform={'uppercase'}
                paddingRight={'1rem'}
                paddingBottom={'1.5rem'}
                >
                {nav.name}
                </Content>
            ))}
            </>
            </Div>
            <SocialMedia className='social'>
                <Img src="/img/insta.png" alt="instagram"/>
                <Img src="/img/gith.png" alt="GitHub" />
                <Img src="/img/linkk.png" alt="Linkedin" />
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  z-index: 10000; 
`;

const SidebarContent = styled.div`
  padding: 16px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
`
const Content = styled(Link)`

`
const SocialMedia = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-evenly;
`
const Img = styled.img`
    width: 35px;
`
export default Sidebar;
