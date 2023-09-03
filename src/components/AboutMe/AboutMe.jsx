import React from "react";
import { AboutMeContainer, H1, SectionContainer, Profile, Description, Parrafo, H3, Learn, Img } from ".";

function AboutMe() {
    return(
        <AboutMeContainer>
            <H1>About Me</H1>
            <SectionContainer>
               <Profile>
                    <h1>Deyverson Herrera Valencia</h1>
                    <img src="/Img/Logo.png" alt="Foto Deyverson"></img>
                </Profile> 
                <Description>
                    <Parrafo>
                    I am a programmer focused on UI environment and interface development,
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
                        <Img src="/img/java.png" alt="JavaScript" />
                        <Img src="/img/react.png" alt="React" />
                        <Img src="/img/html.png" alt="Html & Css" />
                        <Img src="/img/pngegg.png" alt="Node.js" />
                        <Img src="/img/ts.png" alt="TypeScript" />
                        <Img src="img/angular.png" alt="Angular" />
                        <Img src="/img/vue.png" alt="Vue.js" />
                        <Img src="/img/c++.png" alt="Express.js" />
                        
                    </Learn>
                </Description>
            </SectionContainer>
        </AboutMeContainer>
    )
}

export default AboutMe;