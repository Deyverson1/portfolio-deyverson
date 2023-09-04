import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Poster, HeroContent, Name, Goat, Profession, Afirmacion, ImgHero, ImgPoster } from ".";
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
                <Profession><Goat>a </Goat>Frontend Developer<Blinker>|</Blinker></Profession>
                <Afirmacion>Como un tejedor de codigos en el vasto lienzo digital, encuentro inspiracion <br /> en la tecnologia para dar vida a mundos completamente nuevos. 
                <br />¡El universo digital aguarda nuestra imaginacion sin limites!</Afirmacion>
            </div>
            <ImgPoster>
                <Poster id="poster"> <ImgHero src="/img/code.jpg" alt="Imagen Code" /> </Poster>
            </ImgPoster>
            
        </HeroContent>
    );
}
const Blinker = styled.span` 
    animation-name: blinker;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(1,0,0,1);
    animation-duration: 1s;
    //Basic styling  
    display: inline-block;
    padding-left: 2px;
    width: 8px;
    height: 100px;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(white,.3);
    background: $y;
    @keyframes blinker { 
    from { opacity: 1.0; } to { opacity: 0.0; }
  }
`
export default Hero;