import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 2rem;
`
const StyledCardContent = styled(CardContent)`
  
`


export default function ImgMediaCard() {
  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/img/Logo.png"
      />
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="div">
          Encriptador de texto
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Development of a text encryptor that primarily employs JavaScript
        practices for the logic responsible for text processing and encryption.
        Additionally, it integrates event handling, responsiveness, and styles
        implemented through HTML and CSS.
        </Typography>
      </StyledCardContent>
      <CardActions>
        <Button size="small" href='https://github.com/Deyverson1/encriptador.github.io' target='blank'>Repositorio</Button>
        <Button size="small" href='https://encriptador-github-io.vercel.app/' target='blank'>Visitar</Button>
      </CardActions>
    </StyledCard>
  );
}
