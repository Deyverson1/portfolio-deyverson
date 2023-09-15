import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import './style.css'




export default function CardMain() {
  const { t } = useTranslation();
  const cardData = [
    {
      title: t('ProjectsTittle1'),
      image: '/img/archivo-encriptado.png',
      description: t('ProjectsDescription1'),
      repoLink: 'https://github.com/Deyverson1/encrypter',
      visitLink: 'https://encriptador-github-io.vercel.app/',
    },
    {
      title: t('ProjectsTittle2'),
      image: '/img/project.png',
      description: t('ProjectsDescription2'),
      repoLink: 'https://github.com/Deyverson1/org',
      visitLink: 'https://org-dusky.vercel.app/',
    },
    {
      title: t('ProjectsTittle3'),
      image: '/img/try.png',
      description: t('ProjectsDescription3'),
      repoLink: 'https://github.com/Deyverson1/viking-task.github.io',
      visitLink: 'https://deyverson1.github.io/viking-task.github.io/',
    },
    {
      title: t('ProjectsTittle4'),
      image: '/img/control.png',
      description: t('ProjectsDescription4'),
      repoLink: 'https://github.com/Deyverson1/crud-php',
      visitLink: 'https://github.com/Deyverson1/crud-php',
    },
  ];
  return (
    <>
      {cardData.map((card, index) => (
        <StyledCard key={index} sx={{ maxWidth: 345 }} className='card'>
          <CardMedia
            component="img"
            alt={`Image for ${card.title}`}
            height="140"
            image={card.image}
            className='imgWidth'
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