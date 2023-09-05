import React, { useEffect } from 'react';
import { Poster, HeroContent, Name, Goat, Profession, Afirmacion, ImgHero, ImgPoster } from ".";
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components';
// Effecto de la imagen + estructura 
function Hero() {
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
                <Name>Hi, I'm <Goat>Deyverson Herrera</Goat></Name>
                {/* Frontend Developer<Blinker>|</Blinker> */}
                <Profession><Goat>a</Goat> <Typewriter words={['Profesional Coder', 'Mechatronics Student', 'Frontend Developer',]}
                    loop={5}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    /> 
                </Profession>
                <Afirmacion>Como un tejedor de codigos en el vasto lienzo digital, encuentro inspiracion en la tecnologia para dar vida a mundos completamente nuevos. 
                <br />¡El universo digital aguarda nuestra imaginacion sin limites!</Afirmacion>
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