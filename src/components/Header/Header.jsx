import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import Navegador from "./Nav.js";
import styled from "styled-components";
// Funcion principal - Estilos al final
function Header() {
  return (
    <HeaderStyle>
      <Nav>
        <LogoSpace>
          <Img src="/img/codigo.png" alt="Logo portafolio Deyverson"/>
          <P>Deyverson</P>
        </LogoSpace>
        <NavLinks>
          <Navegador/>
           <MenuIcon/>
        </NavLinks>
      </Nav>
    </HeaderStyle>
  );
}
// Estilos Metodologia BEM
const HeaderStyle = styled.header`
  display: flex;
  padding: 1rem 5rem;
  @media screen and (max-width: 375px){
    padding: 0;
  }
`
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 375px){
    display: flex;
    align-items: center;
  }
`
const LogoSpace = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    align-items: center;
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
    @media screen and (max-width: 375px){
      display: none;
    }
`
const P = styled.p`
  padding-left: 1rem;
  font-size: .8125rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`
export default Header;
