import React from "react"
import FormPropsTextFields from ".";
import styled from "styled-components";

function Contact() {
    const Box = styled.section`
        display: flex;
        justify-content: space-around;
        padding: 5rem 2rem;
    `
    const Aclaracion = styled.div`
        /* background-image: url('/img/java.png'); */
        display: flex;
        flex-direction: column;
        width: 90vh;
        border-radius: 30px;
        background: linear-gradient(to right,  #4169E1, #6495ED);
        text-align: center;
        margin-top: 0;
        padding-top: 0 ;
        box-shadow: 0px 0px 50px rgba(0,0,0,0.4);
    `
    const H2 = styled.h2`
        padding-top: 7rem;
    `
    return (
        <Box>
            <FormPropsTextFields/>
            <Aclaracion>
                <H2>Contacto</H2>
                <p>¿Deseas ponerte en contacto conmigo? <br />
                Deja un mensaje y me pondre en contacto contigo!</p>
            </Aclaracion>
        </Box>
        )
}

export default Contact;