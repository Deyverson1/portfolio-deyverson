import React, { useContext } from 'react';
import { useColor } from './ColorContext'; // Importa el hook
import styled from 'styled-components';

const Tema = () => {
  const { color, setColor } = useColor(); // Obten el color y la función para establecerlo desde el contexto

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor); // Establece el color en el contexto
  };

  return (
    <Content>
      <Tittle>Elige un color:</Tittle>
      <input
        titulo="Color"
        placeholder="Ingresar el color en HEX"
        required
        type="color"
        onChange={handleColorChange}
      />
    </Content>
  );
};

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Tittle = styled.h2`
    padding-top: 5rem;
`
export default Tema;
