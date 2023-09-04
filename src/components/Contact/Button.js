import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';


export default function Boton() {
  const Botonn = styled(Button)`
    width: 5rem;
  `
  return (
    <Botonn variant="contained" disableElevation>
      Enviar
    </Botonn>
  );
}
