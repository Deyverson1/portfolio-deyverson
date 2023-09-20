import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next';
import { useColor } from '../Header/ColorContext';
import './hero.css'
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
        <section className='hero'>
            <div>
                <header>
                    <h1 className='nameHero'>{t('Identidad')} <span className='span'  style={{ color: color }}>Deyverson Herrera</span></h1>
                </header>
                <h2 className='profesion'><span className='span' style={{ color: color }}>{t('Conector')}</span> <Typewriter words={['Profesional Coder', 'Mechatronics Student', 'Future FullStack', 'Frontend Developer',]}
                    loop={2}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    /> 
                </h2>
                <h3 className='afirmacion'>{t('HeroDescription')} 
                <br />{t('HeroSubDescription')}</h3>
                <div className='socialMediaa'> 
                    <a href="https://www.instagram.com/its_deyverson/" target='blank'><img className="img" src="/img/insta.webp" alt="Instagram" /></a>
                    <a href="https://github.com/Deyverson1" target='blank'><img className="img" src="/img/gith.webp" alt="GitHub" /></a>
                    <a href="https://www.linkedin.com/in/deyverson/" target='blank'><img className="img" src="/img/linkk.webp" alt="Linkedin" /></a>
                </div>
            </div>
            <div className='imgContainer'>
                <section className='poster' id="poster"> <img className='imgHero' src="/img/code.webp" alt="Imagen Code" /> </section>
            </div>
        </section>
    );
}

export default Hero;