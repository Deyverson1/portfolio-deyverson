import React from "react";
import styled from "styled-components";

function Skills() {
    return ( <SkillSection>
        <Title>Skills</Title>
        <SkillsContent>
            <Card>
                <Img src="/img/programacion-web.png" alt="" />
                <H3>Optimizacion</H3>
                <p>Perfeccionar la eficiencia y el rendimiento de las aplicaciones web para brindar a los usuarios una experiencia rapida y fluida.</p>
            </Card>
            <Card>
                <Img src="/img/codificacion-.png" alt="" />
                <H3>Responsive</H3>
                <p>Desarrollo con capacidad para adaptarse de manera fluida y visualmente atractiva a diferentes tamaños de pantallas.</p>
            </Card>
            <Card>
                <Img src="/img/datos.png" alt="" />
                <H3>Mantenibilidad</H3>
                <p>Codigo tanto interactivo como de facil comprension, que puede ser modificado y mantenido a largo plazo</p>
            </Card>
        </SkillsContent>
        </SkillSection>
    )
}
// Styles


const SkillSection = styled.section`
    margin: 20px; 
    padding-top: 3rem;
`
const Title = styled.h1`
    margin: 0;
    padding: 0;
    padding-left: 12px;
    letter-spacing: 0.0625rem;
`
const SkillsContent = styled.section`
    display: flex;
    justify-content: space-between;

`
const Card = styled.div`
    border-radius: 7px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    text-align: center;
    margin: 12px;
    border: 1px solid #444444;
    border-radius: 15px;
    transition: .5s;
    &:hover{
        background-color: #4169E1;
    }
`
const Img = styled.img`
    width: 15vh;
    /* padding-top: 15px; */
`
const H3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.0625rem;

`
export default Skills;