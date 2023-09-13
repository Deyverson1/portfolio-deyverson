import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Icon({onClick}) {
    return (
      <MenuIcon onClick={onClick} cursor='pointer'/>
    );
}