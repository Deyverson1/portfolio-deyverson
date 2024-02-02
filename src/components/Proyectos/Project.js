import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useColor } from '../Header/ColorContext';
// import { Link } from 'react-router-dom';
import './project.css'

export default function CardMain() {
  const { color } = useColor();
  const { t } = useTranslation();
  const cardData = [
    {
      title: t('ProjectsTittle1'),
      image: '/img/archivo-encriptado.webp',
      description: t('ProjectsDescription1'),
      repoLink: 'https://github.com/Deyverson1/encrypter',
      visitLink: 'https://encriptador-github-io.vercel.app/',
    },
    {
      title: t('ProjectsTittle2'),
      image: '/img/project.webp',
      description: t('ProjectsDescription2'),
      repoLink: 'https://github.com/Deyverson1/org',
      visitLink: 'https://org-dusky.vercel.app/',
    },
    {
      title: t('ProjectsTittle3'),
      image: '/img/try.webp',
      description: t('ProjectsDescription3'),
      repoLink: 'https://github.com/Deyverson1/viking-task.github.io',
      visitLink: 'https://deyverson1.github.io/viking-task.github.io/',
    },
    {
      title: t('ProjectsTittle4'),
      image: '/img/control.webp',
      description: t('ProjectsDescription4'),
      repoLink: 'https://github.com/Deyverson1/crud-php',
      visitLink: 'https://github.com/Deyverson1/crud-php',
    },
    {
      title: 'Dropi Replic',
      image: 'https://dropi.co/wp-content/uploads/2023/05/favicon-300x300.png',
      description: t('ProjectsDescription5'),
      repoLink: 'https://github.com/Deyverson1/dropi-replic',
      visitLink: 'https://dropi-replic.vercel.app/'
    },{
      title: 'Dropi Replic',
      image: 'https://dropi.co/wp-content/uploads/2023/05/favicon-300x300.png',
      description: t('ProjectsDescription5'),
      repoLink: 'https://github.com/Deyverson1/dropi-replic',
      visitLink: 'https://dropi-replic.vercel.app/'
    }
  ];
  return (
    <>
      {cardData.map((card, index) => (
        <section className='sectionCard'>
          <Article color={color} id={index}>
            <picture className='pictureCard'>
              <img src={card.image} alt={card.title} className='imgCard' />
            </picture>
            <div className='divCard'>
              <h4 className='titleCard'>{card.title}</h4>
              <p className='descriptionCard'>{card.description}</p>
              <div className='buttonsCard'>
                <Button color={color} target='blank' href={card.repoLink}>Respositorio</Button>
                <Button color={color} target='blank' href={card.visitLink}>Visitar</Button>
              </div>
            </div>
          </Article>
        </section>
      ))}
    </>
  );
}

const Article = styled.article`
  border-radius: 1rem;
  border: 1px solid #4a5568; /* gray-700 */
  box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white; /* gray-800 */
  border-color: ${(props) => props.color || '#4a98bf'};
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  &:hover{
    transform: scale(1.05);
    background-color: white};
    border-color: #white;
  }
`

const Button = styled.a`
  text-decoration: none;
  color: ${(props) => props.color || '#4a98bf'};

`