import React from "react";
import i18next from "i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Back from "./Salir";

const Idioma = ({toggleIdiomaVar}) => {
    const changeLanguage = (language) => {
        i18next.changeLanguage(language)
    }
    return (
        <Content>
            <Back onClick={toggleIdiomaVar}/>
            <Tittle>Selecciona un lenguaje: </Tittle>
           <Div>
                <Links onClick={() => {changeLanguage('en'); toggleIdiomaVar();}}><Img src="/img/english.png" alt="English Language"/>  English </Links>
                <Links onClick={() => {changeLanguage('es'); toggleIdiomaVar();}}> <Img src="/img/espana.png" alt="English Language"/> Spanish </Links>
            </Div> 
            
        </Content>
        
        )
}

const Content = styled.section`
    text-align: center;
`
const Tittle = styled.h2`
    padding-top: 5rem;
`
const Img = styled.img`
    width: 30px;
`
const Links = styled(Link)`
    color: #000000;
    text-decoration: none;
    font-size: .8125rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    &:hover{
        text-decoration: overline;
    }
`
const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export default Idioma;