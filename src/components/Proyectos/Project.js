import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const cardData = [
  {
    title: 'Encriptador de texto',
    image: '/img/archivo-encriptado.png',
    description: 'Development of a text encryptor that primarily employs JavaScript practices for the logic responsible for text processing and encryption. Additionally, it integrates event handling, responsiveness, and styles  implemented through HTML and CSS',
    repoLink: 'https://github.com/Deyverson1/encriptador1.github.io',
    visitLink: 'https://encriptador1-github-io.vercel.app/',
  },
  {
    title: 'Team management',
    image: '/img/mapa-mental.png',
    description: "Website for team organization using React and JavaScript implementation, incorporating event handling in the project's logic along with LocalStorage for an enhanced user experience, as well as ensuring responsiveness. ",
    repoLink: 'https://github.com/Deyverson1/org',
    visitLink: 'https://encriptador-github-io.vercel.app/',
  },
  {
    title: 'Viking Task',
    image: '/img/portapapeles.png',
    description: 'This project is a task management app I created as part of my course. It helps users efficiently manage their daily tasks using technologies like JavaScript (JS), CRUD operations, and LocalStorage for a seamless user experience.',
    repoLink: 'https://github.com/Deyverson1/viking-task.github.io',
    visitLink: 'https://deyverson1.github.io/viking-task.github.io/',
  },
];

export default function CardMain() {
  return (
    <>
      {cardData.map((card, index) => (
        <StyledCard key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={`Image for ${card.title}`}
            height="140"
            image={card.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontFamily='Poppins'>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontFamily='Poppins'>
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={card.repoLink} target="_blank">
              Repositorio
            </Button>
            <Button size="small" href={card.visitLink} target="_blank">
              Visitar
            </Button>
          </CardActions>
        </StyledCard>
      ))}
    </>
  );
}

const StyledCard = styled(Card)`
  margin: 2rem;
`