import React from "react";
import styled from "styled-components"

function AboutMe() {
    return(
        <AboutMeContainer>
            <H1>About Me</H1>
            <SectionContainer>
               <Profile>
                    <h1>Deyverson Herrera Valencia</h1>
                    <Logo src="/img/Logo.png" alt="Foto Deyverson"></Logo>
                </Profile> 
                <Description>
                    <Parrafo>
                    I am a 20-year-old programmer focused on UI environment and interface development,
                    with extensive knowledge across various technologies that enable me to provide
                    diverse approaches tailored to the project's requirements. Supported by my
                    studies in Industrial Mechatronics, I always strive to find the most optimal way
                    for web environment development, aiming for both efficiency and visual
                    excellence.
                    My studies are also geared towards teamwork, utilizing various team
                    methodologies ranging from Soft Skills to web development methodologies like
                    Scrum. This allows me to be an adaptable individual, and my learning curve is
                    quite high, as I am always acquiring new knowledge.
                    </Parrafo>
                    <H3>Learning</H3>
                    <Learn>
                        <Aplication>
                            <Img src="/img/java.png" alt="JavaScript" />
                            <label htmlFor="">JavaScript</label>
                        </Aplication>
                        <Aplication>
                           <Img src="/img/react.png" alt="React" />
                           <label>React</label>
                        </Aplication>
                        <Aplication>
                             <Img src="/img/html.png" alt="Html & Css" />
                           <label>Html&Css</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/node.png" alt="Node.js" />
                           <label>Node</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/vue.png" alt="Vue.js" />
                           <label>Vue</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/ts.png" alt="TypeScript" />
                           <label>TypeScript</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/ph.png" alt="Php" />
                           <label>Php</label>
                        </Aplication>
                        <Aplication>
                        <Img src="/img/my.png" alt="Express.js" />
                        <label>MySQL</label>
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
        margin: 0 2rem;
        padding-bottom: 1rem;
    }
`
const H1 = styled.h1`
    letter-spacing: 0.0625rem;
    font-weight: 500;
`
const SectionContainer = styled.section`
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const Profile = styled.div`
    border: 1px solid #4169E1;
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