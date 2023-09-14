import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export default function Icon({onClick}) {
    return (
      <IconMenu onClick={onClick} cursor='pointer'/>
    );
}

const IconMenu = styled(MenuIcon)`
  &:hover{
    color: white;
  }
`