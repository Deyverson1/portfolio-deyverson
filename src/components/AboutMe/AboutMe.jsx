import React from "react";
import styled from "styled-components"
import './style.css'
import { useTranslation } from 'react-i18next';
import { useColor } from '../Header/ColorContext';

function AboutMe() {
    const { color } = useColor();
    const { t } = useTranslation();
    return(
        
        <AboutMeContainer>
            <H1>{t('Aboot')}</H1>
            <SectionContainer>
               <Profile color={color}>
                    <h1>Deyverson Herrera Valencia</h1>
                    <Logo src="/img/Logo.png" alt="Foto Deyverson"></Logo>
                </Profile> 
                <Description>
                    <Parrafo>
                    {t('AboutMeDescription')}
                    </Parrafo>
                    <H3>{t('AboutMeSubTittle')}</H3>
                    <Learn>
                        <Aplication>
                            <Img src="/img/java.webp" alt="JavaScript" />
                            <label htmlFor="">JAVASCRIPT</label>
                        </Aplication>
                        <Aplication>
                           <Img src="/img/react.webp" alt="React" />
                           <label>REACT</label>
                        </Aplication>
                        <Aplication>
                             <Img src="/img/html.webp" alt="Html & Css" />
                           <label>HTML&CSS</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/node.webp" alt="Node.js" />
                           <label>NODE</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/vue.webp" alt="Vue.js" />
                           <label>VUE</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/ts.webp" alt="TypeScript" />
                           <label>TYPESCRIPT</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/php.webp" alt="Php" />
                           <label>PHP</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/my.webp" alt="Express.js" />
                        <label>MYSQL</label>
                        </Aplication>
                    </Learn>
                </Description>
            </SectionContainer>
        </AboutMeContainer>
    )
}

//styles
const AboutMeContainer = styled.section`
    margin: 5rem 2rem;
    @media screen and (max-width: 768px){
        margin-bottom: 0;
        padding-bottom: 1rem;
    }
`
const H1 = styled.h1`
    letter-spacing: 0.0625rem;
    font-weight: 500;
    text-transform: uppercase;
    @media screen and (max-width: 425px){
        padding-top: 1rem;
    }
`
const SectionContainer = styled.section`
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const Profile = styled.div`
    border: 1px solid  ${(props) => props.color || '#4169E1'};
    border-radius: 3rem;
    text-align: center;
`
const Logo = styled.img`
    width: 400px;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const Description = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 425px){
        padding: 1rem;
    }
`
const Parrafo = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #444444;
    width: 100%;
    @media screen and (max-width: 425px){
        font-size: 16px;
        margin: 0;
    }
`
const H3 = styled.h3`
    letter-spacing: 0.0625rem;
    font-weight: 500;
`
const Learn = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Aplication = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Img = styled.img`
    width: 50px;
    height: 50px;
    @media screen and (max-width: 425px){
        width: 42px;
        height: 42px;
        padding: 1rem;
    }
    @media screen and (max-width: 375px){
        width: 40px;
        height: 40px;
        padding: .8rem;
    }
`
export default AboutMe;