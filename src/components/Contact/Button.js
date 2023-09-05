import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Botonn = styled(Button)`
width: 5rem;
`
export default function Boton() {
  return (
    <Botonn variant="contained" disableElevation>
      Enviar
    </Botonn>
  );
}
