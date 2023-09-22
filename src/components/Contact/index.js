import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './style.css';
import styled from 'styled-components';
import { useColor } from '../Header/ColorContext';

const validateCustomName = (name) => {
  const length = name.length;
  return length > 3;
};

const validateCustomEmail = (email) => {
  const length = email.length;
  return length > 8 && length < 50 && email.includes("@");
};

const validateCustomMessage = (message) => {
  return message !== '';
};

const FormSignUp = () => {
  const { color } = useColor();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateCustomName(name);
    const isEmailValid = validateCustomEmail(email);
    const isMessageValid = validateCustomMessage(message);

    if (isNameValid && isEmailValid && isMessageValid) {
      try {
        const response = await fetch('https://formsubmit.co/ragvalhalla78@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        });

        if (response.ok) {
          console.log('Datos enviados correctamente');
          setName('');
          setEmail('');
          setMessage('');
          setIsSuccess(true);

          setNameError('');
          setEmailError('');
          setMessageError('');

          setTimeout(() => {
            setIsSuccess(false);
          }, 9000); 
        } else {
          console.error('Error al enviar datos');
        }
      } catch (error) {
        console.error('Error al enviar datos:', error);
      }
    } else {
      setNameError(isNameValid ? '' : 'Ingresa un nombre válido.');
      setEmailError(isEmailValid ? '' : 'Ingresa un email válido.');
      setMessageError(isMessageValid ? '' : 'Ingresa un contenido válido.');
    }
  };

  return (
    <div className='contentForm'>
      {isSuccess ? (
        <div className="success-message" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: color || '#4a98bf', color: 'white', padding: '10px', borderRadius: '4px', marginBottom: '2rem' }}>¡Formulario enviado con éxito!</div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="form"
          style={{ width: '90%' }}
        >
          <CampoTexto
            required
            label="Nombre"
            type="text"
            className="inputo"
            value={name}
            error={!!nameError}
            helperText={nameError}
            onChange={(e) => setName(e.target.value)}
          />
          <CampoTexto
            required
            label="Email"
            type="email"
            className="inputo"
            value={email}
            error={!!emailError}
            helperText={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CampoTexto
            required
            label="Campo texto"
            className="inputo"
            multiline
            rows={8}
            type="text"
            value={message}
            error={!!messageError}
            helperText={messageError}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            style={{ backgroundColor: color || '#4a98bf' }}
            className="btn"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

const CampoTexto = styled(TextField)`
  width: 90%;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export default FormSignUp;
