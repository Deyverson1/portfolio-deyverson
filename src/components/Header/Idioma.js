import React from "react";
import i18next from "i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Back from "./Salir";
import './header.css'

const Idioma = ({toggleIdiomaVar}) => {
    const changeLanguage = (language) => {
        i18next.changeLanguage(language)
    }
    return (
        <section className="idiomaContent">
            <Back onClick={toggleIdiomaVar}/>
            <h2 className="tittleIdioma">Selecciona un lenguaje: </h2>
           <div className="idiomaDiv">
                <Links onClick={() => {changeLanguage('en'); toggleIdiomaVar();}}><img className="imgIdioma" src="/img/english.webp" alt="English Language"/> <p className="tittleLanguage">English</p>  </Links>
                <Links onClick={() => {changeLanguage('es'); toggleIdiomaVar();}}> <img  className="imgIdioma" src="/img/espana.webp" alt="English Language"/><p className="tittleLanguage">Spanish</p> </Links>
            </div> 
        </section>
        )
}
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
export default Idioma;