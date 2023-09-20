import React, { useState } from "react";
import Navegador from "./Nav.js";
import styled from "styled-components";
import Icon from "./Icon.js";
import Sidebar from "./Sidebar.js";
import { Link } from "react-router-dom";
import { useColor } from './ColorContext';
import CodeIcon from '@mui/icons-material/Code';
import './header.css'

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
    <HeaderStyle color={color} className="headerStyle">
      <nav className="headerNav">
        <div className="headerLogoSpace">
          <CodeIcon/>
          <Linki to="/"><p className="nameHeader">Deyverson</p></Linki>
        </div>
        <main className="headerLinks">
          <div className="navegador">
            {navVisible && <Navegador />} 
          </div> 
          <Icon onClick={toggleSidebar} />
        </main>
      </nav>
      {sidebar && <Sidebar toggleNavAndSidebar={toggleNavAndSidebar}/>}
    </HeaderStyle>
  );
}

// Estilos Metodologia BEM
const HeaderStyle = styled.header`
  background-color: ${(props) => props.color || '#4a98bf'};
`
const Linki = styled(Link)`
  text-decoration: none;
`

export default Header;
