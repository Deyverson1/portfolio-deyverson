import React from "react";
import FormSignUp from ".";
import styled from "styled-components";

function Contact() {
  return (
    <Box>
      < FormSignUp/>
      <Aclaracion>
        <H2>Contacto</H2>
        <p>
          ¿Deseas ponerte en contacto conmigo? <br />
          ¡Deja un mensaje y me pondre en contacto contigo! <br />
          O me puedes contactar por medio de deyverson.contacto@gmail.com
        </p>
      </Aclaracion>
    </Box>
  );
}
//styles
const Box = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 5rem 2rem;
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
`;
const H2 = styled.h2`
  padding-top: 6rem;
`;
export default Contact;
