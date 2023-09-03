import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';

const Container = styled(Box)`
    padding: 1rem 0 ;
`
export default function LinearProgres() {
  return (
    <Container sx={{ width: '100%' }}>
      <LinearProgress />
    </Container>
  );
}
