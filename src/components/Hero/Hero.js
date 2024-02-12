import { Typewriter } from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next';
import { useColor } from '../Header/ColorContext';
import './hero.css'
function Hero() {
    const { color } = useColor();
    const { t } = useTranslation();
    return (
        <section className='hero'>
            <div>
                <header>
                    <h1 className='nameHero'>{t('Identidad')} <span className='span'  style={{ color: color }}>Deyverson Herrera</span></h1>
                </header>
                <h2 className='profesion'><span className='span' style={{ color: color }}>{t('Conector')}</span> <Typewriter words={['Mechatronics Student', 'Future FullStack', 'Frontend Developer',]}
                    loop={3}
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
            
        </section>
    );
}

export default Hero;