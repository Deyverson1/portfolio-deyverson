import React from "react";
import styled from "styled-components";
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import { blue } from '@mui/material/colors'


function Skills() {
    return ( <SkillSection>
        <Title>Skills</Title>
        <SkillsContent>
            <Card>
                <LanguageIcon fontSize="large" sx={{ color: blue[500] }} className="icon"/>
                <H3>Optimizacion</H3>
                <P>Perfeccionar la eficiencia y el rendimiento de las aplicaciones web para brindar a los usuarios una experiencia rapida y fluida.</P>
               
            </Card>
            <Card>
                <WebIcon fontSize="large" sx={{ color: blue[500] }} className="icon"/>
                <H3>Responsive</H3>
                <P>Desarrollo con capacidad para adaptarse de manera fluida y visualmente atractiva a diferentes tamaños de pantallas.</P>
            </Card>
            <Card>
                <CodeIcon fontSize='large' sx={{ color: blue[500] }} className="icon"/>
                <H3>Mantenibilidad</H3>
                <P>Codigo tanto interactivo como de facil comprension, que puede ser modificado y mantenido a largo plazo</P>
            </Card>
        </SkillsContent>
        </SkillSection>
    )
}
// Styles
const SkillSection = styled.section` 
    margin: 8rem 2rem;
    @media screen and (max-width: 768px){
        margin: 0 2rem;
    }
`
const Title = styled.h2`
    margin: 0;
    padding: 0;
    padding-left: 12px;
    letter-spacing: 0.0625rem;
    font-weight: 500;
`
const SkillsContent = styled.section`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        flex-wrap: wrap;
    }
`
const Card = styled.div`
    border-radius: 7px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
    padding: 0 2rem;
    width: 100%;
    height: 300px;
    text-align: start;
    margin: 12px;
    border: 1px solid #4169E1;
    border-radius: 15px;
    transition: .5s;
    &:hover{
        transition: .7s;
        background-color: #4169E1;
        color: white;
        cursor: pointer;
        > .icon {
            color: white;
        }
    }
`
const H3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.0625rem;
    margin-bottom: 0;
    padding-bottom: 0;
`
const P =styled.p`
    margin-top: .5rem;
`

export default Skills;