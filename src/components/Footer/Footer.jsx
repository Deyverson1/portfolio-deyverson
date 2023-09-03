import React from 'react'
import styled from 'styled-components'

const Content = styled.section`
    align-items: center;
    text-align: center;
    padding: 4rem 0;
`
const Media = styled.div`
    display: flex;
    justify-content: center;   
`
const Img = styled.img`
    width: 50px;
    height: 50px;
    padding-left: 1rem;
    padding-right: 1rem;
`


function Footer() {
    return(
        <Content>
            <h3>Deyverson Herrera Valencia <br /> 2023</h3>
            <Media>
                <a href="https://www.instagram.com/its_deyverson/" target='blank'><Img src="/img/insta.png" alt="Instagram" /></a>
                <a href="https://github.com/Deyverson1" target='blank'><Img src="/img/gith.png" alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/deyverson/" target='blank'><Img src="/img/linkk.png" alt="Linkedin" /></a>
            </Media>
        </Content>
    )

}

export default Footer;