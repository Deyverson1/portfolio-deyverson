import React from "react"
import styled from "styled-components";
import CardMain from "./Project";

function Projects(){
    return(
        <Content>
            <H1>Projects</H1>
            <DivContent>
                <CardMain/>
                
            </DivContent>
        </Content>
    )
} 
// Styles
const Content = styled.section`
    padding: 5rem 2rem;
    @media screen and (max-width: 768px){

        padding-bottom: 0;
    }
`
const H1 = styled.h2`
    margin: 0;
    padding: 0;
    padding-left: 12px;
    letter-spacing: 0.0625rem;
    font-weight: 500;
    @media screen and (max-width: 425px){
        padding-top: 1rem;
    }
`
const DivContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
export default Projects