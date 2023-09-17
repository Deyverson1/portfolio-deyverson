import React, { useState } from "react";
import Navegador from "./Nav.js";
import styled from "styled-components";
import Icon from "./Icon.js";
import Sidebar from "./Sidebar.js";
import { Link } from "react-router-dom";
import { useColor } from './ColorContext';
import CodeIcon from '@mui/icons-material/Code';

function Header() {
  const { color } = useColor();
  const [sidebar, setSidebar] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
 
  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setNavVisible(!navVisible); 
  };
  const toggleNavAndSidebar = () => {
    setSidebar(false);
    setNavVisible(true); 
  };
  return (
    <HeaderStyle color={color}>
      <Nav>
        <LogoSpace>
          <CodeIcon/>
          <Linki to="/"><P>Deyverson</P></Linki>
        </LogoSpace>
        <NavLinks>
          <Div>
            {navVisible && <Navegador />} 
          </Div> 
          <Icon onClick={toggleSidebar} />
        </NavLinks>
      </Nav>
      {sidebar && <Sidebar toggleNavAndSidebar={toggleNavAndSidebar}/>}
    </HeaderStyle>
  );
}

// Estilos Metodologia BEM
const HeaderStyle = styled.header`
  display: flex;
  padding: 1rem 5rem;
  background-color: ${(props) => props.color || '#4169E1'};
  @media screen and (max-width: 768px){
    padding: 1rem;
  }
  @media screen and (max-width: 425px){
    padding-left: 0;
    padding-right: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; 
    z-index: 1000;
  }
`
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 425px){
    display: flex;
    align-items: center;
  }
`
const LogoSpace = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    @media screen and (max-width: 768px){
      padding-left: 1rem;
    }
`
const Linki = styled(Link)`
  text-decoration: none;
`
const NavLinks = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding-right: 1rem;
    @media screen and (max-width: 425px){
      padding-right: 1rem;
    }
`
const Div = styled.div`
    @media screen and (max-width: 768px){
      display: none;
    }
`
const P = styled.p`
  padding-left: 1rem;
  font-size: .8125rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  padding-top: 3px;
  color: black;
  text-decoration: none;
  :hover{
    color: white;
    text-decoration: overline;
  }
`
export default Header;
