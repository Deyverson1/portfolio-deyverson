import React from "react"
import FormPropsTextFields from ".";
import styled from "styled-components";



function Contact() {
    const Box = styled.section`
        display: flex;
        width: 100%;
        justify-content: space-around;
        padding: 5rem 0;
    `
    const Aclaracion = styled.div`
        /* background-image: url('/img/java.png'); */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 90vh;
    `


    return (
        <Box>
            <FormPropsTextFields/>
            <Aclaracion>
                <h2>Contacto</h2>
                <p>¿Deseas ponerte en contacto conmigo? <br />
                Deja un mensaje y me pondre en contacto contigo!</p>
            </Aclaracion>
        </Box>
    
        )
}

export default Contact;