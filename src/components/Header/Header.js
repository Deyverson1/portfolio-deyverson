import React, { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';
import Navegador from "./Nav.js";
import styled from "styled-components";
import Icon from "./Icon.js";
import Sidebar from "./Sidebar.js";
import X from "./Salir.js";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [navVisible, setNavVisible] = useState(true); // Agrega un estado para controlar la visibilidad del Navegador

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setNavVisible(!navVisible); // Cambia la visibilidad del Navegador
  };
  const toggleNavAndSidebar = () => {
    setSidebar(false); // Cierra el Sidebar
    setNavVisible(true); // Muestra el Navegador
  };
  return (
    <HeaderStyle>
      <Nav>
        <LogoSpace>
          <Img src="/img/code1.png" alt="Logo portafolio Deyverson"/>
          <P>Deyverson</P>
        </LogoSpace>
        <NavLinks>
          <Div>
            {navVisible && <Navegador />} {/* Muestra el Navegador si navVisible es verdadero */}
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
  background-color: #4169E1;
  @media screen and (max-width: 768px){
    padding: 1rem;
  }
  @media screen and (max-width: 425px){
    padding: 1rem 2rem;
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
const Img = styled.img`
  width: wrem;
  height: 2rem;
`
const NavLinks = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding-right: 1rem;
    @media screen and (max-width: 425px){
      padding-right: 0;
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
`
export default Header;
