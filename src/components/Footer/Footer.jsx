import React from 'react'
import styled from 'styled-components'
import { Link } from '@mui/material'
import './style.css'

function Footer() {
    return(
        <Content>
           
            <div className='cabecera'>
                 <div>
                    <img className='imagen_silueta' src="/img/silueta-.png" alt="imagen silueta"/>
                </div>
                <div className='correo'>
                    <img src="/img/correo.png" alt="imagen de correo" className='imagen' />
                    <p className='mail'>deyversongp@gmail.com</p>
                </div>
            </div>
                <div className='SectionEnlaces'>
                    <h4 className='tittle'>ENLACES</h4>
                       <Link className='enlaces' href="/" >HOME</Link> 
                       <Link className='enlaces' href="/Projects'" >PROJECTS</Link> 
                       <Link className='enlaces' href="/Contact" >CONTACT</Link> 
                </div>
                <SocialMedia>
                    <h5 className='tittle'>REDES SOCIALES</h5>
                    <div>
                        <a href="https://www.instagram.com/its_deyverson/" target='blank'><Img src="/img/instagram-.png" alt="Instagram" /></a>
                        <a href="https://github.com/Deyverson1" target='blank'><Img src="/img/github-.png" alt="GitHub" /></a>
                        <a href="https://www.linkedin.com/in/deyverson/" target='blank'><Img src="/img/linkedin-.png" alt="Linkedin" /></a>
                    </div>
                </SocialMedia>
        </Content>
    )

}
const Content = styled.section`
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    /* padding: 4rem 0; */
    background-color: black;
    color: white;
    height: 400px;
    @media screen and (max-width: 425px){
        flex-direction: column;
        height: auto;
    }
`
const SocialMedia = styled.div`
    display: flex;
    justify-content: center; 
    flex-direction: column ;
    align-items: center;
    @media screen and (max-width: 425px){
        padding-bottom: 1rem;
    }
`
const Img = styled.img`
    width: 40px;
    height: 40px;
    padding-left: 1rem;
    padding-right: 1rem;
    @media screen and (max-width: 425px){
        width: 40px;
        height: 40px;
    }
`
export default Footer;