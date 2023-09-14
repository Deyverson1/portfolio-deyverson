import React from "react";
import FormSignUp from ".";
import styled from "styled-components";

function Contact() {
  return (
    <Box>
      <Aclaracion>
        <H2>Contacto</H2>
        <P>
          ¿Deseas ponerte en contacto conmigo? <br />
          ¡Deja un mensaje y me pondre en contacto contigo! <br />
        </P>
        <FormSignUp/>
      </Aclaracion>
    </Box>
  );
}
//styles
const Box = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 2rem;
  @media screen and (max-width: 425px) {
    flex-wrap: wrap-reverse;
    margin-bottom: 0;
    padding-top: 1rem;
    width: auto;
  }
`;
const Aclaracion = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vh;
  border-radius: 30px;
  text-align: center;
  margin-top: 0;
  padding-top: 0;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 768px){
    width: 60vh;
    margin-left: 1rem;
  }
  @media screen and (max-width: 425px){
    margin-bottom: 2rem;
    margin-left: 0;
    padding-top: 1rem;
  }
`;

const H2 = styled.h2`
  padding-top: 3rem;
  margin-bottom: 1px;
  @media screen and (max-width: 768px){
    padding-top: 4rem
  }
  @media screen and (max-width: 425px){
    padding-top: .5rem;
  }
`;
const P = styled.p`
  padding-bottom: 2rem;
  margin-top: 0;
  @media screen and (max-width: 425px){
    padding-bottom: .5rem;
  }
`
export default Contact;
