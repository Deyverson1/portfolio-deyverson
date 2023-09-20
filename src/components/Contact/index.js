import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './style.css'
import styled from 'styled-components';
import { useColor } from '../Header/ColorContext';
import { Link } from 'react-router-dom';
const validateCustomName = (name) => {
  
    const length = name.length;
    if (length > 3) {
        return true;
    } else {
        return false;
    }
};
const validateCustomEmail = (email) => {
    const length = email.length;
    if (length > 8 && length < 50 && email.includes("@")) {
        return true;
    } else {
        return false;
    }
};

const validateCustomMessage = (message) => {
    if(message === ''){
        return false;
    } else {
        return true;
    }  
};

const FormSignUp = () => {
  const { color } = useColor();

  const [name, setName] = useState({ value: '', valid: null });
  const [email, setEmail] = useState({ value: '', valid: null });
  const [message, setMessage] = useState({ value: '', valid: null });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza las validaciones
    const isNameValid = validateCustomName(name.value);
    const isEmailValid = validateCustomEmail(email.value);
    const isMessageValid = validateCustomMessage(message.value);

    setName({ ...name, valid: isNameValid });
    setEmail({ ...email, valid: isEmailValid });
    setMessage({ ...message, valid: isMessageValid });

    if (isNameValid && isEmailValid && isMessageValid) {
      try {
        const response = await fetch('https://formsubmit.co/deyversongp@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value,
          }),
        });

        if (response.ok) {
          console.log('                              Datos enviados correctamente                           ');
          setName({ value: '', valid: null });
          setEmail({ value: '', valid: null });
          setMessage({ value: '', valid: null });
          setIsSuccess(true); 
        } else {
          console.error('Error al enviar datos');
        }
      } catch (error) {
        console.error('Error al enviar datos:', error);
      }
    } else {
      console.log('Malo');
    }
  };

  return (
    <Div>
      {isSuccess ? (
        <div className="success-message" style={{ display: 'flex',  justifyContent:'center', alignItems:'center', backgroundColor: color,color: 'white', padding: '10px', borderRadius: '4px', marginBottom:'2rem' }}>¡Formulario enviado con éxito!</div>
      ) : (
        <form
          action="https://formsubmit.co/deyversongp@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="form"
          width= '90%'

        >
          <CampoTexto
            required
            label="Nombre"
            type="text"
            className="inputo"
            value={name.value}
            error={name.valid === false}
            helperText={name.valid === false && 'Ingresa un nombre válido.'}
            onChange={(e) => setName({ value: e.target.value, valid: null })}
          />
          <CampoTexto
            required
            label="Email"
            type="email"
            className="inputo"
            value={email.value}
            error={email.valid === false}
            helperText={email.valid === false && 'Ingrese un email válido.'}
            onChange={(e) => setEmail({ value: e.target.value, valid: null })}
          />
          <CampoTexto
            required
            label="Campo texto"
            className="inputo"
            multiline
            rows={8}
            type="text"
            value={message.value}
            error={message.valid === false}
            helperText={message.valid === false && 'Ingresa un contenido válido.'}
            onChange={(e) => setMessage({ value: e.target.value, valid: null })}
          />
          <Btn color={color} type="submit" className="button">
            Enviar
          </Btn>
        </form>
      )}
    </Div>
  );
};
const Div = styled.div`
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
`
const CampoTexto = styled(TextField)`
  width: 90%;
  @media screen and (max-width: 425px){
  width: 100%;
  }
`
const Btn = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: ${(props) => props.color || '#4a98bf'};
  padding: .5rem;
  border-radius: 3px;
  width: 105px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 25px;
  &:hover{
    box-shadow: 0px 0px 5px rgba(0,0,0,1);
  }
`

export default FormSignUp;
