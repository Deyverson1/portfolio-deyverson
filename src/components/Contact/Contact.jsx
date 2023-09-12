import React from "react";
import FormSignUp from ".";
import styled from "styled-components";

function Contact() {
  return (
    <Box>
      <Form/>
      <Aclaracion>
        <H2>Contacto</H2>
        <P>
          ¿Deseas ponerte en contacto conmigo? <br />
          ¡Deja un mensaje y me pondre en contacto contigo! <br />
          O me puedes contactar por medio de deyverson.contacto@gmail.com
        </P>
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
    margin: 3rem 2rem;
  }
  
`;
const Aclaracion = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vh;
  border-radius: 30px;
  background: linear-gradient(to right, #4169e1, #6495ed);
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
  }
`;
const Form = styled(FormSignUp)`
  max-width: 10px !important;
`
const H2 = styled.h2`
  padding-top: 6rem;
  @media screen and (max-width: 768px){
    padding-top: 4rem
  }
  @media screen and (max-width: 425px){
    padding-top: .5rem;
  }
`;
const P = styled.p`
  padding-bottom: 6rem ;
  @media screen and (max-width: 425px){
    padding-bottom: .5rem;
  }
`
export default Contact;
