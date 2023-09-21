import React from "react";
import styled from "styled-components"
import './style.css'
import { useTranslation } from 'react-i18next';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function AboutMe() {
    // const { color } = useColor();
    const { t } = useTranslation();
    const customStyles = {
        fontSize: '16px',
        width: '100%',     
        margin: '0', 
        padding: '0',
        height: 'auto',
        textAlign: 'left',
      }
    return(
        <AboutMeContainer>
            <header>
            <h1 className="tittleAbout">{t('Aboot')}</h1>
            <hr className="hr"/>
            </header>
           
            <SectionContainer>
                <SyntaxHighlighter className='syntax' language="javascript" style={dracula} customStyle={customStyles}>
                 {
                    `
                    const Deyverson = {
                        me: {
                          name: 'Deyverson Herrera Valencia',
                          country: 'Colombia',
                          age: 20,
                          aboutMe: 'Mi enfoque principal se encuentra en la creacion de experiencias de usuario atractivas
                          y eficientes.

                          Mi objetivo es ampliar mi conjunto de habilidades para barcar el desarrollo backend y poder crear 
                          poyectos web completos.
                          
                          Siempre estoy en búsqueda de nuevos desafíos y oportunidades para crecer como desarrollador. 
                          Me emociona el proceso de aprendizaje constante y estoy ansioso por contribuir 
                          al mundo digital con soluciones creativas y funcionales.',
                        },
                        learning: ['JavaScript', 'Php', 'MySQL', 'Html&Css', 'React', 'Node'],
                      };
                    `

                 }
                d
                </SyntaxHighlighter>
                    <div className="descriptionMobile">
                        <h3>Deyverson Herrera Valencia</h3>
                        <p>Mi enfoque principal se encuentra en la creacion de experiencias de usuario atractivas y eficientes.
    <br />
                            Mi objetivo es ampliar mi conjunto de habilidades para barcar el desarrollo backend y poder crear 
                            poyectos web completos.
                            <br />
                            Siempre estoy en búsqueda de nuevos desafíos y oportunidades para crecer como desarrollador. 
                            Me emociona el proceso de aprendizaje constante y estoy ansioso por contribuir 
                            al mundo digital con soluciones creativas y funcionales.</p>
                        </div>
                    <H3>{t('AboutMeSubTittle')}</H3>
                    <section className="learnSection">
                        <div className="aplicaciones">
                            <Img src="/img/java.webp" alt="JavaScript" />
                            <label className="label">JAVASCRIPT</label>
                        </div>
                        <div className="aplicaciones">
                           <Img src="/img/react.webp" alt="React" />
                           <label className="label">REACT</label>
                        </div>
                        <div className="aplicaciones">
                             <Img src="/img/html.webp" alt="Html & Css" />
                           <label className="label">HTML&CSS</label>
                        </div>
                        <div className="aplicaciones">
                        <Img src="/img/node.webp" alt="Node.js" />
                           <label className="label">NODE</label>
                        </div>
                        <div className="aplicaciones">
                        <Img src="/img/vue.webp" alt="Vue.js" />
                           <label className="label">VUE</label>
                        </div>
                        <div className="aplicaciones">
                        <Img src="/img/ts.webp" alt="TypeScript" />
                           <label className="label">TYPESCRIPT</label>
                        </div>
                        <div className="aplicaciones">
                        <Img src="/img/php.webp" alt="Php" />
                           <label className="label">PHP</label>
                        </div>
                        <div className="aplicaciones">
                        <Img src="/img/my.webp" alt="Express.js" />
                        <label className="label">MYSQL</label>
                        </div>
                    </section>
            </SectionContainer>
        </AboutMeContainer>
    )
}
//styles
const AboutMeContainer = styled.section`
    margin: 5rem 2rem;
    margin-bottom: 0;
    padding-bottom: 4rem;
    @media screen and (max-width: 768px){
        margin-bottom: 0;
        padding-bottom: 1rem;
    }
`
const SectionContainer = styled.section`
    display: flex;
    flex-direction : column ;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const H3 = styled.h3`
    letter-spacing: 0.0625rem;
    font-weight: 500;
    text-transform: uppercase;
`

const Img = styled.img`
    width: auto;
    max-width: 50px;
    min-height: 50px;
    @media screen and (max-width: 425px){
        width: auto;
        height: auto;
        max-width: 50px;
        padding: 1rem;
    }
    /* @media screen and (max-width: 375px){
        width: 30px;
        height: 25px;
        padding: .8rem;
    } */
`
export default AboutMe;
