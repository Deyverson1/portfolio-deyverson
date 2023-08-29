import React from "react"
import SvgIconChildren from "./IconChildren.js";
import {
  LogoSpace,
  Nav,
  HeaderStyle,
  NavLinks,
  Img,
  P

} from "./index.js";
import CustomSeparator from "./Nav.js";


function Header() {
  return (
    <HeaderStyle>
      <Nav>
        <LogoSpace>
          <Img src="/img/Logo50.png" alt="Logo portafolio Deyverson"/>
          <P>Deyverson</P>
        </LogoSpace>
        <NavLinks>
          <CustomSeparator/>
          <SvgIconChildren/>
        </NavLinks>
      </Nav>
    </HeaderStyle>
  );
}

export default Header;
