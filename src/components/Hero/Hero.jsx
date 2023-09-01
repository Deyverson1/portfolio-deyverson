import React, { useEffect } from 'react';
import { Poster, HeroContent, Name, Goat, Profession, Afirmacion, ImgHero, ImgPoster } from ".";

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
                <Profession><Goat>a </Goat>Frontend Developer</Profession>
                <Afirmacion>Como un tejedor de codigos en el vasto lienzo digital, encuentro inspiracion <br /> en la tecnologia para dar vida a mundos completamente nuevos. 
                <br />¡El universo digital aguarda nuestra imaginacion sin limites!</Afirmacion>
            </div>
            <ImgPoster>
                <Poster id="poster"> <ImgHero src="/img/ImgHeroAstronaut.jpg" alt="" /> </Poster>
            </ImgPoster>
            
        </HeroContent>
    );
}

export default Hero;

