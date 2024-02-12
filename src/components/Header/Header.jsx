import React, { useState } from "react";
import Navegador from "./Nav.js";
import styled from "styled-components";
import Icon from "./Icon.js";
import Sidebar from "./Sidebar.js";
import { Link } from "react-router-dom";
import { useColor } from './ColorContext.js';
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
    <HeaderStyle color={color} className="headerStyle items-center justify-center ">
      <nav className="headerNav">
        <main className="headerLinks items-center justify-center">
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

const HeaderStyle = styled.header`
  background-color: ${(props) => props.color || '#4a98bf'};
`
const Linki = styled(Link)`
  text-decoration: none;
`

export default Header;
