import React, { useEffect } from 'react';
import { Poster, HeroContent, Name, Goat, Profession, Afirmacion, ImgHero, ImgPoster } from ".";
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useColor } from '../Header/ColorContext';

function Hero() {
    const { color } = useColor();

    const { t } = useTranslation();
    useEffect(() => {
        const el = document.getElementById('poster');
        const height = el.clientHeight;
        const width = el.clientWidth;

        el.addEventListener('mousemove', (e) => {
            const { layerX, layerY } = e;
            const yRotation = ((layerX - width / 2) / width) * 6;
            const xRotation = ((layerY - height / 2) / height) * 6;
            const string = `perspective(400px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            el.style.transform = string;
        });

        el.addEventListener('mouseout', () => {
            el.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
        });
    }, []);

    return (
        <HeroContent>
            <div>
                <Name>{t('Identidad')} <Goat  style={{ color: color }}>Deyverson Herrera</Goat></Name>
                <Profession><Goat style={{ color: color }}>{t('Conector')}</Goat> <Typewriter words={['Profesional Coder', 'Mechatronics Student', 'Future FullStack', 'Frontend Developer',]}
                    loop={3}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    /> 
                </Profession>
                <Afirmacion>{t('HeroDescription')} 
                <br />{t('HeroSubDescription')}</Afirmacion>
                <Media>
                <a href="https://www.instagram.com/its_deyverson/" target='blank'><Img src="/img/insta.png" alt="Instagram" /></a>
                <a href="https://github.com/Deyverson1" target='blank'><Img src="/img/gith.png" alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/deyverson/" target='blank'><Img src="/img/linkk.png" alt="Linkedin" /></a>
                </Media>
            </div>
            <ImgPoster>
                <Poster id="poster"> <ImgHero src="/img/code.jpg" alt="Imagen Code" /> </Poster>
            </ImgPoster>
            
        </HeroContent>
    );
}
const Media = styled.div`
    display: flex;
    justify-content: center;   
`
const Img = styled.img`
    width: 40px;
    height: 40px;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-top: 1rem;
`
export default Hero;